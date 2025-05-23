import { NextApiRequest, NextApiResponse } from 'next';
import ConnectDb from '../../../utils/db';
import Contact from '../../../models/contact';
import jwt from 'jsonwebtoken';
import User from '../../../models/User';



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const newContact = new Contact({
            Name: req.body.Name,
            Email: req.body.Email,
            Phone: req.body.Phone,
            Message: req.body.Message
        });

        try {
            await ConnectDb();
            await newContact.save();
            return res.json('Mesajımız başarıyla teslim edildi, en kısa sürede sizinle iletişime geçeceğiz.');
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    if (req.method === 'GET') {
        try {
            const authorization = req.headers.authorization;
            const token = authorization ? authorization.split(" ")[1] : null;


            if (!token) {
                return res.status(401).json({ error: 'Unauthorized: No token provided' });
            }
            if (!process.env.SECRET_KEY) {
                console.error('SECRET_KEY is not defined in environment variables.');
                return res.status(500).json({ error: 'Internal Server Error: SECRET_KEY missing' });
            }

            const decoded = jwt.verify(token, process.env.SECRET_KEY) as jwt.JwtPayload;

            if (!decoded || !decoded.id || typeof decoded.id !== 'string') {
                return res.status(403).json({ error: 'Forbidden: Invalid token' });
            }

            const user = await User.findById(decoded.id);
            if (!user) {
                return res.status(403).json({ error: 'Forbidden: Invalid user' });
            }

            const messages = await Contact.find();
            return res.json(messages);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
