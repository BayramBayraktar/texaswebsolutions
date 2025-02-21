import React from 'react'
import Layout from '../layout/index'
import Link from 'next/link';
import WeCreatedSlider from '@/components/weCreated';
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

import Form from '@/components/Form';

const Contact = () => {
    return (
        <Layout
            title="Contact Texsas Web Solutions - Get in Touch for Expert Web Services"
            description="Need a professional web design and development company in Texas? Contact Texsas Web Solutions today for expert solutions, custom websites, and digital marketing services."
            keywordContent="contact Texsas Web Solutions, web design agency Texas, web development services Texas, digital marketing Texas, get in touch Texas, professional web services Texas"
        >
            <div className='w-full max-w-screen-xl mx-auto px-3 md:py-24'>
                <div className='flex flex-col md:flex-row gap-10 mt-28 justify-between'>
                    <div className='md:w-[50%]'>
                        <small className='text-sm font-Font1'>CONTACT US</small>
                        <h1 className='text-4xl font-Font1 mt-2 mb-4'>Feel Free to Say Hello – We’re Here to Help!</h1>
                        <p className='text-base'>{"Have a question or an idea in mind? Don’t hesitate to reach out! We’re happy to offer a free consultation and guide you in the right direction. Whether it's a new project, a collaboration, or just a simple inquiry, our friendly team is ready to assist you. Contact us today – we’d love to hear from you!"}</p>
                        <div className='flex flex-col gap-8 mt-8'>
                            <Link href="mailto:texsaswebsolutions@gmail.com" className='text-xl flex items-center gap-4 mt-2'>
                                <MdOutlineEmail className='text-2xl w-12 h-12 border border-gray-800 rounded-full p-3 shadow-sm shadow-black' />
                                <span className='font-Font1 text-xl'>Email</span>
                            </Link>
                            <Link href="https://wa.me/+905315278986" className='text-xl flex gap-4 mt-2 items-center' target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className='text-2xl w-12 h-12 border border-gray-800 rounded-full p-3 shadow-sm shadow-black' />
                                <span className='font-Font1 text-xl'>Whatsapp</span>
                            </Link>

                            <Link href="https://www.linkedin.com/company/texas-web-solutions/?viewAsMember=true" className='text-xl flex gap-4 mt-2 items-center' target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn className='text-2xl w-12 h-12 border border-gray-800 rounded-full p-3 shadow-sm shadow-black' />
                                <span className='font-Font1 text-xl'>Linkedin</span>
                            </Link>

                        </div>
                    </div>
                    <Form />
                </div>
                <WeCreatedSlider />
            </div>
        </Layout >
    )
}

export default Contact