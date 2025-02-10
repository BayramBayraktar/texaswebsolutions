import React from 'react'
import Link from 'next/link'
import Layout from '../../layout/index'

const Blog = () => {
    return (
        <Layout
            title="Blog - Latest Insights on Web Design & Development in Texas | Texsas Web Solutions"
            description="Explore the latest trends, tips, and insights on web design and development in Texas. Texsas Web Solutions' blog offers valuable resources to help small businesses grow their online presence."
            keywordContent="web design blog Texas, web development blog Texas, Texas web solutions blog, digital marketing tips Texas, small business web design tips, professional web services blog Texas"
        >
            <div className='w-full max-w-screen-xl mx-auto mt-12 py-24'>
                <span className='font-Font1 text-black px-3 py-1 rounded-2xl border-x-1 border-y-2 text-sm border-[rgba(126,214,223,.25)] bg-[rgba(126,214,233,.15)]'>Our Blog</span>
                <h1 className='my-12  text-6xl'>Insights to Elevate Your <br /> Business</h1>
                <p className='leading-7 w-[60%]'>Unlock the Power of Digital Success – Where Creative Ideas, Expert Web Design, and SEO Strategies Come Together to Elevate Your Online Presence and Drive Business Growth.</p>

                <div className='w-full mt-8 grid grid-cols-3 gap-6 '>
                    <div className='bg-[rgb(247,247,247)]  flex flex-col justify-between hover:bg-[rgb(237,250,250)] p-6 shadow-lg overflow-hidden rounded-2xl'>
                        <img className='object-cover rounded-2xl max-h-[320px] h-fit' src="./images/webdesigner.jpg" alt='' />
                        <div className='mt-4 flex flex-col justify-between'>
                            <h1 className='text-2xl'>Web Design & Development</h1>
                            <p className='text-sm opacity-80 my-2'>We create custom, responsive, and user-friendly websites tailored for small businesses, ensuring a strong online presence.</p>
                            <Link href={"/service/web-design-development-service"} className='py-3 text-sm block rounded-2xl mt-4 bg-black text-white text-center'>More Details</Link>
                        </div>
                    </div>
                    <div className='bg-[rgb(247,247,247)]  flex flex-col justify-between hover:bg-[rgb(237,250,250)] p-6 shadow-lg overflow-hidden rounded-2xl'>
                        <img className='object-cover rounded-2xl max-h-fit' src="./images/seoMarketing.png" alt='' />
                        <div className='mt-4'>
                            <h1 className='text-2xl'>SEO & Digital Marketing</h1>
                            <p className='text-sm opacity-80 my-2'>Boost your search rankings and attract more customers with our SEO strategies, local optimization, and digital marketing solutions.</p>
                            <Link href={"/service/seo-digital-marketing"} className='py-3 block text-sm rounded-2xl mt-4 bg-black text-white text-center'>More Details</Link>
                        </div>
                    </div>
                    <div className='bg-[rgb(247,247,247)]  flex flex-col justify-between hover:bg-[rgb(237,250,250)] p-6 shadow-lg overflow-hidden rounded-2xl'>
                        <img className='object-cover rounded-2xl max-h-fit' src="./images/eCommerce.png" alt='' />
                        <div className='mt-4'>
                            <h1 className='text-2xl'>E-Commerce Development</h1>
                            <p className='text-sm opacity-80 my-2'>Launch and scale your online store with our expert e-commerce development, including secure payment integration and mobile-friendly designs.</p>
                            <Link href={"/service/e-commerce-development"} className='py-3 text-sm block rounded-2xl mt-4 bg-black text-white text-center'>More Details</Link>
                        </div>
                    </div>
                    <div className='bg-[rgb(247,247,247)]  flex flex-col justify-between hover:bg-[rgb(237,250,250)] p-6 shadow-lg overflow-hidden rounded-2xl'>
                        <img className='object-cover rounded-2xl max-h-[320px] h-fit' src="./images/Customsoftwaresolutions.jpg" alt='' />
                        <div className='mt-4'>
                            <h1 className='text-2xl'>Custom Software Solutions</h1>
                            <p className='text-sm opacity-80 my-2'>We develop scalable and high-performance software tailored to your business needs, helping you stay ahead in your industry</p>
                            <Link href={"/service/custom-software-solutions"} className='py-3 text-sm block rounded-2xl mt-4 bg-black text-white text-center'>More Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Blog