import { NextApiRequest, NextApiResponse } from 'next';
import ConnectDb from '../../utils/db';
import cookie from 'cookie';
import jwt from 'jsonwebtoken';
import User from '../../models/User';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            await ConnectDb();
            console.log('MongoDB connected successfully');

            const { Email, Password } = req.body;
            console.log('Login attempt for email:', Email);

            const user = await User.findOne({ Email });
            if (!user) {
                console.log('User not found');
                return res.status(401).json({
                    success: false,
                    message: 'Invalid email or password'
                });
            }

            if (user.Password !== Password) {
                console.log('Invalid password');
                return res.status(401).json({
                    success: false,
                    message: 'Invalid email or password'
                });
            }

            if (!process.env.SECRET_KEY) {
                console.error('SECRET_KEY is missing');
                return res.status(500).json({
                    success: false,
                    message: 'Configuration error'
                });
            }

            const token = jwt.sign(
                { id: user._id },
                process.env.SECRET_KEY,
                { expiresIn: '1h' }
            );
            console.log('Token generated successfully');

            if (token) {
                res.setHeader('Set-Cookie', cookie.serialize('session', token, {
                    httpOnly: true,
                    maxAge: 60 * 60,
                    sameSite: "strict",
                    path: "/"
                })).json({ success: true })
            }



        } catch (error) {
            console.error('Detailed error:', error);
            return res.status(500).json({
                success: false,
                message: 'Internal Server Error',
            });
        }
    }

    return res.status(405).json({
        success: false,
        message: 'Method Not Allowed'
    });
}