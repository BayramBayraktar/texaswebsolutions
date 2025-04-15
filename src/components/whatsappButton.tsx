import Link from 'next/link';
import React from 'react'

import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
    return (
        <Link href="https://wa.me/+905315278986">
            <div className='z-30 fixed bottom-4 right-4 bg-white rounded-full p-2 cursor-pointer'>
                <FaWhatsapp size={55} className='text-green-500 ' />
            </div>
        </Link>
    )
}

export default WhatsappButton