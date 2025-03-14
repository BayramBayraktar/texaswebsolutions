import React from 'react';
import Layout from '../layout/index';
import WeCreatedSlider from '@/components/weCreated';
import Image from 'next/image';
import Link from 'next/link';
import VideoSlider from '@/components/videoSlider'
import Reviews from '@/components/reviews'

const About = () => {
    return (
        <Layout
            title="About Us - Leading Web Design & Development Company in the UK"
            description="Discover our story as a trusted web design and development company in the UK. We specialize in creating custom, innovative websites and software solutions to help businesses grow online."
            keywordContent="about us, web design company UK, web development UK, custom websites UK, professional web services, digital agency UK, SEO-optimized websites UK"
        >
            <div className='w-full max-w-screen-xl mx-auto px-3 md:py-24'>
                {/* Section 1: Introduction */}
                <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-8'>
                    <div className='my-12 md:my-24 md:w-[55%]'>
                        <span className='font-Font1 text-black px-3 py-1 rounded-2xl border-x-1 border-y-2 text-2xl md:text-sm border-[rgba(126,214,223,.25)] bg-[rgba(126,214,233,.15)]'>
                            About Us
                        </span>
                        <h1 className='my-8 text-3xl md:text-5xl font-Font1'>
                            Leading Web Design & Development Company in the UK – Your Trusted Digital Partner
                        </h1>
                        <p className='leading-7 text-gray-700'>
                            Based in the UK, we are a premier web design and development company dedicated to helping businesses thrive in the digital world. Specializing in custom websites, innovative software solutions, and SEO-optimized platforms, we drive growth and success for businesses of all sizes. With a team of experienced professionals, we deliver top-notch design and development services tailored to your unique needs. Whether you need a stunning website, a reliable digital agency, or custom software development, we transform your vision into reality.
                        </p>
                        <div className='mt-6'>
                            <Link href="/contact" className='bg-black text-white px-8 py-3 rounded-3xl font-Font1 hover:bg-gray-800 transition-all'>
                                Get a Free Consultation
                            </Link>
                        </div>
                    </div>

                    <div className='w-full h-[400px] md:h-[500px] relative'>
                        <Image
                            src="/images/aboutimage.jpg"
                            alt='Leading Web Design & Development Company in the UK – Your Trusted Digital Partner'
                            className='rounded-3xl object-cover shadow-2xl border'
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>

                <VideoSlider />

                {/* Section 2: Why Choose Us */}
                <div className='flex flex-col md:flex-row justify-between items-center gap-8 mt-24'>
                    <div className='w-full h-[400px] md:h-[500px] relative'>
                        <Image
                            src="/images/about2.jpg"
                            alt='Why Choose Our Web Design & Development Services in the UK'
                            className='rounded-3xl object-cover shadow-2xl border'
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>

                    <div className='my-12 md:my-24 md:w-[55%]'>
                        <h2 className='font-Font1 mb-4 text-3xl md:text-4xl'>
                            Why Choose Our Web Design & Development Services in the UK?
                        </h2>
                        <p className='leading-7 text-gray-700'>
                            When it comes to web design and development, we stand out as a trusted partner for businesses looking to elevate their online presence. Our team combines creativity, technical expertise, and a deep understanding of industry trends to deliver websites that are not only visually stunning but also highly functional. Whether you need a custom website, e-commerce platform, or a responsive design, we prioritize user experience and SEO optimization to ensure your site ranks high and converts visitors into customers. With a focus on quality, innovation, and timely delivery, we are committed to helping your business succeed in the digital world.
                        </p>
                        <ul className='mt-6 list-disc pl-6 text-gray-700'>
                            <li>Tailored solutions for UK businesses</li>
                            <li>SEO-optimized websites for better visibility</li>
                            <li>Fast-loading and mobile-friendly designs</li>
                            <li>Transparent pricing with no hidden fees</li>
                        </ul>
                    </div>
                </div>

                {/* Section 3: Expertise */}
                <div className='mt-24'>
                    <h2 className='font-Font1 mb-8 text-3xl md:text-4xl text-center'>
                        Our Expertise in Web Design & Development
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className='bg-[rgba(126,214,233,.15)] p-6 rounded-2xl'>
                            <h3 className='font-Font1 text-2xl mb-4'>Custom Website Development</h3>
                            <p className='leading-7 text-gray-700'>
                                {"Our custom website development services are designed to meet the unique needs of your business. From intuitive navigation to seamless functionality, we ensure every aspect of your website is optimized for performance and user engagement. Whether you're a startup or an established enterprise, our team has the skills and experience to build a website that not only looks great but also drives results."}
                            </p>
                        </div>
                        <div className='bg-[rgba(126,214,233,.15)] p-6 rounded-2xl'>
                            <h3 className='font-Font1 text-2xl mb-4'>Innovative Software Solutions</h3>
                            <p className='leading-7 text-gray-700'>
                                {"In today's fast-paced digital landscape, having the right software solutions is crucial for staying competitive. We specialize in developing innovative software that streamlines your operations, enhances productivity, and improves customer satisfaction. Whether you need a custom CRM, a mobile app, or an integrated business solution, our team works closely with you to deliver a product that exceeds expectations."}
                            </p>
                        </div>
                        <div className='bg-[rgba(126,214,233,.15)] p-6 rounded-2xl'>
                            <h3 className='font-Font1 text-2xl mb-4'>E-Commerce Solutions</h3>
                            <p className='leading-7 text-gray-700'>
                                {"We create powerful e-commerce platforms that help UK businesses sell online with ease. From secure payment gateways to user-friendly product management, we ensure your online store is equipped to handle high traffic and deliver a seamless shopping experience."}
                            </p>
                        </div>
                        <div className='bg-[rgba(126,214,233,.15)] p-6 rounded-2xl'>
                            <h3 className='font-Font1 text-2xl mb-4'>SEO & Digital Marketing</h3>
                            <p className='leading-7 text-gray-700'>
                                {"Our SEO and digital marketing services are designed to increase your online visibility and drive targeted traffic to your website. From keyword research to content optimization, we help you rank higher on search engines and attract more customers."}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 4: Call to Action */}
                <div className='mt-24 text-center'>
                    <h1 className='text-3xl md:text-5xl font-Font1 mb-8'>
                        Join Our Digital Success Journey in the UK
                    </h1>
                    <p className='leading-7 text-gray-700 max-w-2xl mx-auto mb-8'>
                        {"Ready to elevate your digital presence? Partner with the leading web design and development company in the UK that delivers results. Join our growing family of successful businesses and experience the difference of working with a top-rated digital agency. Let's transform your vision into reality - reach out today and take the first step towards digital excellence."}
                    </p>
                    <Link href="/contact" className='bg-black text-white px-8 py-3 rounded-3xl font-Font1 hover:bg-gray-800 transition-all'>
                        Get Started Today
                    </Link>
                </div>

                {/* Slider Section */}
                <WeCreatedSlider />
            </div>
            <Reviews />
        </Layout>
    );
};

export default About;