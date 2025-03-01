import React from 'react';
import Link from 'next/link';
import { FaCheckCircle } from "react-icons/fa";
import { GoPackage } from "react-icons/go";

const Price = () => {
    return (
        <div className='w-full max-w-screen-xl mx-auto px-3 py-24'>
            <div className='mt-24'>
                <h1 className='text-black font-Font1 text-center text-4xl md:text-6xl'>Website Packages</h1>
                <h2 className='text-center font-Font1 md:text-xl mt-4'>Tailored Web Solutions for Every Stage of Your Business</h2>
                <p className='text-center text-sm mt-1'>From startups to established enterprises, our packages are designed to help you grow, attract customers, and dominate your market.</p>
            </div>

            <div className='w-full flex md:flex-row flex-col gap-6 my-14'>
                {/* Paket 1: Essential Growth */}
                <div className='bg-[rgb(200,242,242)] py-8 flex flex-col justify-between px-5 rounded-2xl w-full md:w-1/3'>
                    <div className='flex items-center gap-3'>
                        <div className='p-2 bg-white rounded-2xl'>
                            <GoPackage className=' text-4xl md:text-6xl' />
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-Font1 text-gray-700'>For Startups & Small Businesses</p>
                            <h1>
                                <b>Essential Growth</b>
                            </h1>
                        </div>
                    </div>
                    <p className='mt-8 text-sm md:text-base text-gray-700'>
                        Kickstart your online journey with a modern, mobile-friendly website. Perfect for businesses looking to establish a strong digital presence with essential features like SEO optimization, Google Maps integration, and SSL security.
                    </p>
                    <p className='text-black text-4xl md:text-5xl font-Font1 my-4 md:my-8'>$999</p>
                    <p className='text-sm text-gray-600 mb-4'>*Limited Time Offer: Save 10% with Early Bird Discount!</p>
                    <h2 className='text-black mb-6 md:mb-2 text-xl font-Font1'>Features</h2>
                    <ul className='flex flex-col gap-4'>
                        <li className='flex items-center gap-2'>
                            <FaCheckCircle className='text-2xl w-6 md:w-8 flex-shrink-0' />
                            <p className='md:text-base text-sm text-gray-800 '>5 Professional Pages.</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaCheckCircle className='text-2xl w-6 md:w-8 flex-shrink-0' />
                            <p className='md:text-base text-sm text-gray-800 '>Premium Mobile-Responsive Design.</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaCheckCircle className='text-2xl w-6 md:w-8 flex-shrink-0' />
                            <p className='md:text-base text-sm text-gray-800 '>Basic SEO Optimization.</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaCheckCircle className='text-2xl w-6 md:w-8 flex-shrink-0' />
                            <p className='md:text-base text-sm text-gray-800 '>Google Business, Local Directories, Maps.</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaCheckCircle className='text-2xl w-6 md:w-8 flex-shrink-0' />
                            <p className='md:text-base text-sm text-gray-800 '>1-Year Free Domain + Hosting + SSL.</p>
                        </li>
                    </ul>
                    <Link href="/contact" className='w-full mt-4 p-3 text-center outline-none rounded-3xl bg-black text-white font-Font1 text-sm hover:bg-gray-800 transition-all'>Get Started</Link>
                </div>

                {/* Paket 2: Advanced Success */}
                <div className='bg-[rgb(200,242,242)] py-8 flex flex-col justify-between px-5 rounded-2xl w-full md:w-1/3'>
                    <div className='flex items-center gap-3'>
                        <div className='p-2 bg-white rounded-2xl'>
                            <GoPackage className=' text-4xl md:text-6xl' />
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-Font1 text-gray-700'>For Growing Businesses</p>
                            <h1>
                                <b>Advanced Success</b>
                            </h1>
                        </div>
                    </div>
                    <p className='mt-8 text-sm md:text-base text-gray-700'>
                        Scale your business with a fully customized website. Includes all Essential Growth features, plus advanced design, appointment booking, and basic e-commerce capabilities. Ideal for businesses ready to take the next step.
                    </p>
                    <p className='text-black text-4xl md:text-5xl font-Font1 my-4 md:my-8'>$1,997</p>
                    <p className='text-sm text-gray-600 mb-4'>*Special Offer: Free 1-Month SEO Audit Included!</p>
                    <h2 className='text-black mb-6 md:mb-2 text-xl font-Font1'>Features</h2>
                    <ul className='flex flex-col gap-4'>
                        <li className='flex items-center gap-2'>
                            <FaCheckCircle className='text-2xl w-6 md:w-8 flex-shrink-0' />
                            <p className='md:text-base text-sm text-gray-800 '>All Essential Growth Features.</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaCheckCircle className='text-2xl w-6 md:w-8 flex-shrink-0' />
                            <p className='md:text-base text-sm text-gray-800 '>Custom Design with Basic Modifications.</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaCheckCircle className='text-2xl w-6 md:w-8 flex-shrink-0' />
                            <p className='md:text-base text-sm text-gray-800 '>Integrated Contact Form & Appointment System.</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaCheckCircle className='text-2xl w-6 md:w-8 flex-shrink-0' />
                            <p className='md:text-base text-sm text-gray-800 '>Basic E-Commerce (Product Listing, Add to Cart).</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaCheckCircle className='text-2xl w-6 md:w-8 flex-shrink-0' />
                            <p className='md:text-base text-sm text-gray-800 '>3 Months of Free Support (Updates & Technical Assistance).</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaCheckCircle className='text-2xl w-6 md:w-8 flex-shrink-0' />
                            <p className='md:text-base text-sm text-gray-800 '>Google Analytics Setup.</p>
                        </li>
                    </ul>
                    <Link href="/contact" className='w-full mt-4 p-3 text-center outline-none rounded-3xl bg-black text-white font-Font1 text-sm hover:bg-gray-800 transition-all'>Get Started</Link>
                </div>

                {/* Paket 3: Premium Dominance */}
                <div className='bg-[rgb(200,242,242)] py-8 flex flex-col justify-between px-5 rounded-2xl w-full md:w-1/3'>
                    <div className='flex items-center gap-3'>
                        <div className='p-2 bg-white rounded-2xl'>
                            <GoPackage className=' text-4xl md:text-6xl' />
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-Font1 text-gray-700'>For Established Businesses</p>
                            <h1>
                                <b>Premium Dominance</b>
                            </h1>
                        </div>
                    </div>
                    <p className='mt-8 text-sm md:text-base text-gray-700'>
                        Dominate your market with a fully customizable website, advanced SEO, and social media integration. Includes all Advanced Success features, plus a promotional video and 6 months of free support.
                    </p>
                    <p className='text-black text-4xl md:text-5xl font-Font1 my-4 md:my-8'>$2,997</p>
                    <p className='text-sm text-gray-600 mb-4'>*Exclusive Offer: Free Promotional Video Worth €299!</p>
                    <h2 className='text-black mb-2 text-xl font-semibold'>Features</h2>
                    <ul className='flex flex-col gap-4'>
                        <li className='flex items-center gap-2'>
                            <FaCheckCircle className='text-2xl w-6 md:w-8 flex-shrink-0' />
                            <p className='md:text-base text-sm text-gray-800'>All Advanced Success Features.</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaCheckCircle className='text-2xl w-6 md:w-8 flex-shrink-0' />
                            <p className='md:text-base text-sm text-gray-800'>Fully Customizable Design (Prototype with Figma/Adobe XD).</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaCheckCircle className='text-2xl w-6 md:w-8 flex-shrink-0' />
                            <p className='md:text-base text-sm text-gray-800'>Basic SEO Optimization (Keyword Research & Content Optimization).</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaCheckCircle className='text-2xl w-6 md:w-8 flex-shrink-0' />
                            <p className='md:text-base text-sm text-gray-800'>Social Media Integration (Instagram/Facebook Feed).</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaCheckCircle className='text-2xl w-6 md:w-8 flex-shrink-0' />
                            <p className='md:text-base text-sm text-gray-800'>6 Months of Free Support.</p>
                        </li>
                    </ul>
                    <Link href="/contact" className='w-full mt-4 p-3 text-center outline-none rounded-3xl bg-black text-white font-Font1 text-sm hover:bg-gray-800 transition-all'>Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default Price;