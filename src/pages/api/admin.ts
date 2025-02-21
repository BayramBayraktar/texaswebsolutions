import { NextApiRequest, NextApiResponse } from 'next';
import ConnectDb from '../../utils/db';
import cookie from 'cookie';
import jwt from 'jsonwebtoken';
import User from '../../models/User';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        await ConnectDb();

        const { Email, Password } = req.body;

        try {
            const user = await User.findOne({ Email });

            if (!user || user.Password !== Password) {
                return res.status(401).json({ success: false, message: 'Invalid email or password' });
            }

            if (!process.env.SECRET_KEY) {
                console.error('SECRET_KEY is not defined in environment variables.');
                return res.status(500).json({ success: false, message: 'Internal Server Error' });
            }

            const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });

            res.setHeader('Set-Cookie', cookie.serialize('auth', token, {
                httpOnly: false,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                path: '/',
                maxAge: 3600,
            }));

            return res.json({ success: true, message: 'Login successful' });

        } catch (error) {
            console.error(error);
            return res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }

    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
}
