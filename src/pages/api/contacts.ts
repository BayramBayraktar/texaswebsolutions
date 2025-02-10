import { NextApiRequest, NextApiResponse } from 'next';
import ConnectDb from '../../utils/db';
import Contact from '../../models/contact'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        
        const newContact = new Contact({
            Name: req.body.Name,
            Email: req.body.Email,
            Phone: req.body.Phone,
            Message: req.body.Message
        })

        try {
            await ConnectDb()
            await newContact.save()
            return res.json('Your message has been successfully delivered, we will contact you as soon as possible.')

        } catch (error) {
            return console.log(error)
        }

    }
}