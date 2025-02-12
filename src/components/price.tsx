import React from 'react'
import Link from 'next/link';
import { FaCheckCircle } from "react-icons/fa";
import { GoPackage } from "react-icons/go";

const Price = () => {
    return (
        <div className='w-full max-w-screen-xl mx-auto px-3 py-24'>
            <div className='mt-24'>
                <h1 className='text-black font-Font1 text-center text-4xl md:text-6xl'>Website Packages</h1>
                <h2 className='text-center font-Font1 md:text-xl mt-4'>Custom Web Design Solutions for Small Businesses</h2>
                <p className='text-center text-sm mt-1'>Affordable and professional website packages designed to help small businesses grow, attract customers, and stand out online.</p>
            </div>

            <div className='w-full flex md:flex-row flex-col gap-6 my-14'>
                <div className='bg-[rgb(200,242,242)] py-8 flex flex-col justify-between px-5 rounded-2xl w-full md:w-1/3'>
                    <div className='flex items-center gap-3'>
                        <div className='p-2 bg-white rounded-2xl'>
                            <GoPackage className=' text-4xl md:text-6xl' />
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-Font1 text-gray-700'>For small business</p>
                            <h1>
                                <b>Starter Business Package</b>
                            </h1>
                        </div>
                    </div>
                    <p className='mt-8 text-sm md:text-base text-gray-700'>
                        Perfect for small businesses looking to establish a strong online presence. Get a modern, mobile-friendly website with essential features including local SEO optimization, Google Maps integration, and SSL security. Tailored specifically for Texas businesses to make a powerful impact in your local market.
                    </p>
                    <p className='text-black text-4xl md:text-5xl font-Font1 my-4 md:my-8'>$999</p>
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
                            <p className='md:text-base text-sm text-gray-800 '>Local Seo.</p>
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
                    <Link href="/contact" className='w-full mt-4 p-3 text-center outline-none rounded-3xl bg-black text-white font-Font1 text-sm'>Get Started</Link>
                </div>
                <div className='bg-[rgb(200,242,242)] py-8 flex flex-col justify-between px-5 rounded-2xl w-full md:w-1/3'>
                    <div className='flex items-center gap-3'>
                        <div className='p-2 bg-white rounded-2xl'>
                            <GoPackage className=' text-4xl md:text-6xl' />
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-Font1 text-gray-700'>For growing businesses</p>
                            <h1>
                                <b>Professional Business Package</b>
                            </h1>
                        </div>
                    </div>
                    <p className='mt-8 text-sm md:text-base text-gray-700'>
                        Take your business to the next level with a fully customized website designed to maximize your online presence.
                        This package includes all features from the Starter Package, plus a custom design, an integrated appointment
                        booking system, and essential e-commerce capabilities. Gain credibility with a professional website tailored
                        for Texas businesses, complete with local SEO enhancements and Google Analytics integration.
                    </p>
                    <p className='text-black text-4xl md:text-5xl font-Font1 my-4 md:my-8'>$1,997</p>
                    <h2 className='text-black mb-6 md:mb-2 text-xl font-Font1'>Features</h2>
                    <ul className='flex flex-col gap-4'>
                        <li className='flex items-center gap-2'>
                            <FaCheckCircle className='text-2xl w-6 md:w-8 flex-shrink-0' />
                            <p className='md:text-base text-sm text-gray-800 '>All Starter Package Features.</p>
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
                    <Link href="/contact" className='w-full mt-4 p-3 text-center outline-none rounded-3xl bg-black text-white font-Font1 text-sm'>Get Started</Link>

                </div>

                <div className='bg-[rgb(200,242,242)] py-8 flex flex-col justify-between px-5 rounded-2xl w-full md:w-1/3'>
                    <div className='flex items-center gap-3'>
                        <div className='p-2 bg-white rounded-2xl'>
                            <GoPackage className=' text-4xl md:text-6xl' />
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-Font1 text-gray-700'>For established businesses</p>
                            <h1>
                                <b>Premium Package</b>
                            </h1>
                        </div>
                    </div>
                    <p className='mt-8 text-sm md:text-base text-gray-700'>
                        Elevate your brand with a fully customizable website designed to enhance your online visibility and customer engagement.
                        This package includes all features from the Business Package, plus advanced customization, fundamental SEO improvements,
                        and social media integration. Additionally, you’ll receive a promotional video to boost your brand’s presence.
                    </p>
                    <p className='text-black text-4xl md:text-5xl font-Font1 my-4 md:my-8'>$2,997</p>
                    <h2 className='text-black mb-2 text-xl font-semibold'>Features</h2>
                    <ul className='flex flex-col gap-4'>
                        <li className='flex items-center gap-2'>
                            <FaCheckCircle className='text-2xl w-6 md:w-8 flex-shrink-0' />
                            <p className='md:text-base text-sm text-gray-800'>All Business Package Features.</p>
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
                    <Link href="/contact" className='w-full mt-4 p-3 text-center outline-none rounded-3xl bg-black text-white font-Font1 text-sm'>Get Started</Link>

                </div>
            </div>
        </div>
    )
}

export default Price