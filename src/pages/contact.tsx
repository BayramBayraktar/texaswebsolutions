import React from 'react'
import Layout from '../layout/index'
import Link from 'next/link';
import WeCreatedSlider from '@/components/weCreated';
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
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
                        <h1 className='text-4xl font-Font1 mt-2 mb-4'>GET IN TOUCH</h1>
                        <p className='text-base'>Tell us everything you’re looking for in a new website! Shoot us an email or give us a call—we’ll get back to you as soon as possible. If we’re unavailable, don’t worry—we’ll call you back the same day. We’re here to listen and bring your ideas to life!</p>
                        <div className='flex flex-col gap-8 mt-8'>
                            <div className='flex gap-6 items-center'>
                                <MdOutlineLocalPhone className='text-2xl w-12 h-12 border border-gray-800 rounded-full p-3 shadow-sm shadow-black' />
                                <div className='flex flex-col gap-2'>
                                    <span className='font-Font1 text-xl'>Phone</span>
                                    <Link className="text-gray-800 font-medium text-xl" href="tel:-----">------</Link>
                                </div>
                            </div>
                            <div className='flex gap-6 items-center'>
                                <MdOutlineEmail className='text-2xl w-12 h-12 border border-gray-800 rounded-full p-3 shadow-sm shadow-black' />
                                <div className='flex flex-col gap-2'>
                                    <span className='font-Font1 text-xl'>Email</span>
                                    <Link href="mailto:texsaswebsolutions@gmail.com" className='text-xl'>Texas Web Solutions</Link>
                                </div>
                            </div>
                            <div className='flex gap-6 items-center'>
                                <FaWhatsapp className='text-2xl w-12 h-12 border border-gray-800 rounded-full p-3 shadow-sm shadow-black' />
                                <div className='flex flex-col gap-2'>
                                    <span className='font-Font1 text-xl'>Whatsapp</span>
                                    <Link href="https://wa.me/-------" className='text-xl' target="_blank" rel="noopener noreferrer">
                                        ------
                                    </Link>
                                </div>
                            </div>

                            <div className='flex gap-6 items-center'>
                                <FaFacebook className='text-2xl w-12 h-12 border border-gray-800 rounded-full p-3 shadow-sm shadow-black' />
                                <div className='flex flex-col gap-2'>
                                    <span className='font-Font1 text-xl'>Facebook</span>
                                    <Link href="https://www.facebook.com/people/Bayram-Bayraktar/pfbid0DuhzN3yfztM99yMQn1TzQPS4BvSTFejBD4JRb5Qae1fSAU7NEvKG8jQHDzbiF6jsl/" className='text-xl' target="_blank" rel="noopener noreferrer">
                                        Bayram Bayraktar (Owner)
                                    </Link>
                                </div>
                            </div>
                            <div className='flex gap-6 items-center'>
                                <FaLinkedinIn className='text-2xl w-12 h-12 border border-gray-800 rounded-full p-3 shadow-sm shadow-black' />
                                <div className='flex flex-col gap-2'>
                                    <span className='font-Font1 text-xl'>Linkedin</span>
                                    <Link href="https://www.linkedin.com/company/texas-web-solutions/?viewAsMember=true" className='text-xl' target="_blank" rel="noopener noreferrer">
                                        Texas Web Solutions
                                    </Link>
                                </div>
                            </div>

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