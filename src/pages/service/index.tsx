import React from 'react';
import Link from 'next/link';
import Layout from '@/layout/index';
import Image from 'next/image';

import Reviews from '@/components/reviews'
import Portofolio from '@/components/weCreated'
import VideoSlider from '@/components/videoSlider'

const Service = () => {
    return (
        <Layout
            title="Expert Web Design & Development Services in the UK | Your Trusted Digital Partner"
            description="Discover our comprehensive web services in the UK, including custom development, responsive design, e-commerce solutions, and SEO optimization. Transform your business with our professional web services."
            keywordContent="web design services UK, website development UK, e-commerce development UK, responsive web design UK, SEO services UK, web maintenance services UK, custom web solutions UK, business website services UK, professional web agency UK, web consulting services UK"
        >
            <div className='w-full max-w-screen-xl mx-auto mt-12 px-3 py-24'>
                <span className='font-Font1 text-black px-3 py-1 rounded-2xl border-x-1 border-y-2 text-xl md:text-sm border-[rgba(126,214,223,.25)] bg-[rgba(126,214,233,.15)]'>
                    Services
                </span>
                <h1 className='my-12 md:w-[60%] font-Font1 text-2xl md:text-6xl'>
                    Explore the Features That Simplify Your Success in the UK
                </h1>
                <p className='leading-7 md:w-[60%]'>
                    {"Transform your online presence with our expert web design, SEO optimization, and web development services tailored for UK businesses. We create fast, responsive, and user-friendly websites designed to meet your unique needs. Boost your visibility on search engines and grow your business with our cutting-edge solutions. Let's build something amazing together."}
                </p>

                <div className='w-full mt-8 grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {/* Web Design & Development */}
                    <div className='bg-[rgb(247,247,247)] flex flex-col justify-between hover:bg-[rgb(237,250,250)] p-6 shadow-lg overflow-hidden rounded-2xl'>
                        <div className='relative w-full h-[320px]'>
                            <Image
                                src="/images/webdesigner.jpg"
                                alt="Web Design & Development in the UK"
                                fill
                                className='object-cover rounded-2xl'
                            />
                        </div>
                        <div className='mt-4 flex flex-col justify-between'>
                            <h1 className='text-2xl'>Web Design & Development</h1>
                            <p className='text-sm opacity-80 my-2'>
                                We create custom, responsive, and user-friendly websites tailored for UK businesses of all sizes, ensuring a strong online presence and seamless user experience.
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
                                alt="SEO & Digital Marketing in the UK"
                                fill
                                className='object-cover rounded-2xl'
                            />
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-2xl'>SEO & Digital Marketing</h1>
                            <p className='text-sm opacity-80 my-2'>
                                Boost your search rankings and attract more customers with our SEO strategies, local optimization, and data-driven digital marketing solutions tailored for the UK market.
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
                                alt="E-Commerce Development in the UK"
                                fill
                                className='object-cover rounded-2xl'
                            />
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-2xl'>E-Commerce Development</h1>
                            <p className='text-sm opacity-80 my-2'>
                                Launch and scale your online store with our expert e-commerce development, including secure payment integration, mobile-friendly designs, and advanced product management tailored for UK businesses.
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
                                alt="Custom Software Solutions in the UK"
                                fill
                                className='object-cover rounded-2xl'
                            />
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-2xl'>Custom Software Solutions</h1>
                            <p className='text-sm opacity-80 my-2'>
                                We develop scalable and high-performance software tailored to your business needs, helping you streamline operations and stay ahead in your industry in the UK.
                            </p>
                            <Link href={"/service/custom-software-solutions"} className='py-3 text-sm block rounded-2xl mt-4 bg-black text-white text-center hover:bg-gray-800 transition-all'>
                                More Details
                            </Link>
                        </div>
                    </div>

                    {/* Web Maintenance & Support */}
                    <div className='bg-[rgb(247,247,247)] flex flex-col justify-between hover:bg-[rgb(237,250,250)] p-6 shadow-lg overflow-hidden rounded-2xl'>
                        <div className='relative w-full h-[320px]'>
                            <Image
                                src="/images/webMaintenance.jpg"
                                alt="Web Maintenance & Support in the UK"
                                fill
                                className='object-cover rounded-2xl'
                            />
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-2xl'>Web Maintenance & Support</h1>
                            <p className='text-sm opacity-80 my-2'>
                                Keep your website running smoothly with our comprehensive maintenance and support services. From updates to security patches, we ensure your site remains secure and up-to-date.
                            </p>
                            <Link href={"/service/web-maintenance-support"} className='py-3 text-sm block rounded-2xl mt-4 bg-black text-white text-center hover:bg-gray-800 transition-all'>
                                More Details
                            </Link>
                        </div>
                    </div>

                    {/* Content Creation & Strategy */}
                    <div className='bg-[rgb(247,247,247)] flex flex-col justify-between hover:bg-[rgb(237,250,250)] p-6 shadow-lg overflow-hidden rounded-2xl'>
                        <div className='relative w-full h-[320px]'>
                            <Image
                                src="/images/contentCreation.jpg"
                                alt="Content Creation & Strategy in the UK"
                                fill
                                className='object-cover rounded-2xl'
                            />
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-2xl'>Content Creation & Strategy</h1>
                            <p className='text-sm opacity-80 my-2'>
                                Engage your audience with high-quality content tailored to your brand. Our content creation and strategy services help you connect with your customers and drive conversions.
                            </p>
                            <Link href={"/service/content-creation-strategy"} className='py-3 text-sm block rounded-2xl mt-4 bg-black text-white text-center hover:bg-gray-800 transition-all'>
                                More Details
                            </Link>
                        </div>
                    </div>
                </div>
                <VideoSlider />
                <Portofolio />
            </div>
            <Reviews />
        </Layout>
    );
};

export default Service;