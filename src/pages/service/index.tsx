import React from 'react';
import Link from 'next/link';
import Layout from '@/layout/index';
import Image from 'next/image';

const Service = () => {
    return (
        <Layout
            title="Expert Web Design & Development Services | Your Trusted Digital Partner"
            description="Discover our comprehensive web services including custom development, responsive design, e-commerce solutions, and SEO optimization. Transform your business with our professional web services."
            keywordContent="web design services, website development, e-commerce development, responsive web design, SEO services, web maintenance services, custom web solutions, business website services, professional web agency, web consulting services"
        >
            <div className='w-full max-w-screen-xl mx-auto mt-12 px-3 py-24'>
                <span className='font-Font1 text-black px-3 py-1 rounded-2xl border-x-1 border-y-2 text-xl md:text-sm border-[rgba(126,214,223,.25)] bg-[rgba(126,214,233,.15)]'>
                    Services
                </span>
                <h1 className='my-12 md:w-[60%] font-Font1 text-2xl md:text-6xl'>
                    Explore the Features That Simplify Your Success
                </h1>
                <p className='leading-7 md:w-[60%]'>
                    {"Transform your online presence with our expert web design, SEO optimization, and web development services. We create fast, responsive, and user-friendly websites tailored to your business needs. Boost your visibility on search engines and grow your business with our cutting-edge solutions. Let's build something amazing together."}
                </p>

                <div className='w-full mt-8 grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {/* Web Design & Development */}
                    <div className='bg-[rgb(247,247,247)] flex flex-col justify-between hover:bg-[rgb(237,250,250)] p-6 shadow-lg overflow-hidden rounded-2xl'>
                        <div className='relative w-full h-[320px]'>
                            <Image 
                                src="/images/webdesigner.jpg" 
                                alt="Web Design & Development" 
                                fill 
                                className='object-cover rounded-2xl' 
                            />
                        </div>
                        <div className='mt-4 flex flex-col justify-between'>
                            <h1 className='text-2xl'>Web Design & Development</h1>
                            <p className='text-sm opacity-80 my-2'>
                                We create custom, responsive, and user-friendly websites tailored for businesses of all sizes, ensuring a strong online presence and seamless user experience.
                            </p>
                            <Link href={"/service/web-design-development-service"} className='py-3 text-sm block rounded-2xl mt-4 bg-black text-white text-center hover:bg-gray-800 transition-all'>
                                More Details
                            </Link>
                        </div>
                    </div>

                    {/* SEO & Digital Marketing */}
                    <div className='bg-[rgb(247,247,247)] flex flex-col justify-between hover:bg-[rgb(237,250,250)] p-6 shadow-lg overflow-hidden rounded-2xl'>
                        <div className='relative w-full h-[320px]'>
                            <Image 
                                src="/images/seoMarketing.png" 
                                alt="SEO & Digital Marketing" 
                                fill 
                                className='object-cover rounded-2xl' 
                            />
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-2xl'>SEO & Digital Marketing</h1>
                            <p className='text-sm opacity-80 my-2'>
                                Boost your search rankings and attract more customers with our SEO strategies, local optimization, and data-driven digital marketing solutions.
                            </p>
                            <Link href={"/service/seo-digital-marketing"} className='py-3 block text-sm rounded-2xl mt-4 bg-black text-white text-center hover:bg-gray-800 transition-all'>
                                More Details
                            </Link>
                        </div>
                    </div>

                    {/* E-Commerce Development */}
                    <div className='bg-[rgb(247,247,247)] flex flex-col justify-between hover:bg-[rgb(237,250,250)] p-6 shadow-lg overflow-hidden rounded-2xl'>
                        <div className='relative w-full h-[320px]'>
                            <Image 
                                src="/images/eCommerce.png" 
                                alt="E-Commerce Development" 
                                fill 
                                className='object-cover rounded-2xl' 
                            />
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-2xl'>E-Commerce Development</h1>
                            <p className='text-sm opacity-80 my-2'>
                                Launch and scale your online store with our expert e-commerce development, including secure payment integration, mobile-friendly designs, and advanced product management.
                            </p>
                            <Link href={"/service/e-commerce-development"} className='py-3 text-sm block rounded-2xl mt-4 bg-black text-white text-center hover:bg-gray-800 transition-all'>
                                More Details
                            </Link>
                        </div>
                    </div>

                    {/* Custom Software Solutions */}
                    <div className='bg-[rgb(247,247,247)] flex flex-col justify-between hover:bg-[rgb(237,250,250)] p-6 shadow-lg overflow-hidden rounded-2xl'>
                        <div className='relative w-full h-[320px]'>
                            <Image 
                                src="/images/Customsoftwaresolutions.jpg" 
                                alt="Custom Software Solutions" 
                                fill 
                                className='object-cover rounded-2xl' 
                            />
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-2xl'>Custom Software Solutions</h1>
                            <p className='text-sm opacity-80 my-2'>
                                We develop scalable and high-performance software tailored to your business needs, helping you streamline operations and stay ahead in your industry.
                            </p>
                            <Link href={"/service/custom-software-solutions"} className='py-3 text-sm block rounded-2xl mt-4 bg-black text-white text-center hover:bg-gray-800 transition-all'>
                                More Details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Service;