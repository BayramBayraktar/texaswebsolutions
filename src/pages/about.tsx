import React from 'react'
import Layout from '../layout/index'
import WeCreatedSlider from '@/components/weCreated'
import Image from 'next/image'

const About = () => {
    return (
        <Layout
            title="About Texsas Web Solutions - Leading Web Design & Development Company in Texas"
            description="Learn more about Texsas Web Solutions, the trusted web design and development company in Texas. We specialize in creating custom, innovative websites for small businesses to help them grow online."
            keywordContent="about Texsas Web Solutions, web design company Texas, web development Texas, about us Texas, custom websites Texas, professional web services Texas"
        >
            <div className='w-full max-w-screen-xl mx-auto px-3 md:py-24'>
                <div className='flex flex-col-reverse md:flex-row justify-between'>
                    <div className='my-24 md:w-[55%]'>
                        <span className='font-Font1 text-black px-3 py-1 rounded-2xl border-x-1 border-y-2 text-2xl md:text-sm border-[rgba(126,214,223,.25)] bg-[rgba(126,214,233,.15)]'>About us</span>
                        <h1 className='my-12 text-2xl md:text-5xl font-Font1'>Leading Web Design & Development Company – Your Trusted Digital Agency</h1>
                        <p className='leading-7'>{"Web design and development company dedicated to helping businesses thrive in the digital world. We specialize in creating custom websites, innovative software solutions, and SEO-optimized platforms that drive growth and success. With a team of experienced professionals, we deliver top-notch design and development services tailored to your unique needs. Whether you're looking for a stunning website, a reliable digital agency, or custom software development, we transform your vision into reality. Trust us to provide the best solutions that help your business stand out in a competitive market."}</p>

                        <h2 className='mt-24 font-Font1 mb-4 text-2xl' >Why Choose Our Web Design & Development Services?</h2>
                        <p className='leading-7'>When it comes to web design and development, we stand out as a trusted partner for businesses looking to elevate their online presence. Our team combines creativity, technical expertise, and a deep understanding of industry trends to deliver websites that are not only visually stunning but also highly functional. Whether you need a custom website, e-commerce platform, or a responsive design, we prioritize user experience and SEO optimization to ensure your site ranks high and converts visitors into customers. With a focus on quality, innovation, and timely delivery, we are committed to helping your business succeed in the digital world.</p>

                        <h2 className='mt-24 font-Font1 mb-4 text-2xl' >Expertise in Custom Website Development</h2>
                        <p className='leading-7'>{"Our custom website development services are designed to meet the unique needs of your business. We understand that no two businesses are alike, which is why we create tailored solutions that reflect your brand identity and goals. From intuitive navigation to seamless functionality, we ensure every aspect of your website is optimized for performance and user engagement. Whether you're a startup or an established enterprise, our team has the skills and experience to build a website that not only looks great but also drives results"}</p>

                        <h2 className='mt-24 font-Font1 mb-4 text-2xl' >Innovative Software Solutions for Your Business</h2>
                        <p className='leading-7'>In today s fast-paced digital landscape, having the right software solutions is crucial for staying competitive. We specialize in developing innovative software that streamlines your operations, enhances productivity, and improves customer satisfaction. Whether you need a custom CRM, a mobile app, or an integrated business solution, our team works closely with you to understand your requirements and deliver a product that exceeds expectations. With a focus on scalability and cutting-edge technology, we help future-proof your business.</p>
                    </div>

                    <div className='w-full h-[600px] relative'>
                        <Image
                            src="/images/aboutimage.jpg"
                            alt='Leading Web Design & Development Company – Your Trusted Digital Agency'
                            className='rounded-3xl object-cover shadow-2xl border'
                            fill
                            style={{
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                </div>

                <div className='flex flex-col-reverse md:flex-row-reverse justify-between '>
                    <div className='md:my-24 w-full md:w-[55%]'>
                        <h1 className='my-12 text-2xl md:text-5xl font-Font1'>Join Our Digital Success Journey - Experience the Best Web Solutions</h1>
                        <p className='leading-7'>{"Ready to elevate your digital presence? Partner with the leading web design and development company that delivers results. Join our growing family of successful businesses and experience the difference of working with a top-rated digital agency. Let's transform your vision into reality - reach out today and take the first step towards digital excellence."}</p>
                    </div>
                    <div className='md:w-[40%] w-full relative'>
                        <Image
                            src="/images/about2.jpg"
                            alt='Leading Web Design & Development Company – Your Trusted Digital Agency'
                            className='rounded-3xl object-cover shadow-2xl border'
                            fill
                            style={{
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                </div>

                <WeCreatedSlider />
            </div>
        </Layout>
    )
}

export default About