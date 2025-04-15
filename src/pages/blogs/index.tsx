import React from 'react';
import Link from 'next/link';
import Layout from '@/layout/index';
import Image from 'next/image';

import Reviews from '@/components/reviews';
import Portofolio from '@/components/weCreated';
import VideoSlider from '@/components/videoSlider';

const Blogs = () => {
    // Örnek blog verileri
    const blogPosts = [
        {
            id: 1,
            title: "Web Design Trends in 2023",
            description: "Discover the latest web design trends in 2023 and learn how to create modern, user-friendly websites that stand out in the market.",
            image: "/images/webdesigner.jpg",
            slug: "web-design-trends-2023",
        },
        {
            id: 2,
            title: "SEO Best Practices for Businesses",
            description: "Learn the best SEO practices tailored for businesses to improve your search rankings and attract more customers.",
            image: "/images/seoMarketing.png",
            slug: "seo-best-practices",
        },
        {
            id: 3,
            title: "How to Build a Successful E-Commerce Store",
            description: "Step-by-step guide to building a successful e-commerce store in the, from product management to secure payment integration.",
            image: "/images/eCommerce.png",
            slug: "build-successful-ecommerce-store",
        },
        {
            id: 4,
            title: "The Importance of Web Maintenance",
            description: "Why regular web maintenance is crucial for your business and how it can help you stay ahead in the competitive market.",
            image: "/images/webMaintenance.jpg",
            slug: "importance-of-web-maintenance",
        },
        {
            id: 5,
            title: "Content Strategy for Digital Marketing",
            description: "Learn how to create a winning content strategy that drives engagement and conversions for your business.",
            image: "/images/contentCreation.jpg",
            slug: "content-strategy-digital-marketing",
        },
        {
            id: 6,
            title: "Custom Software Solutions for SMEs",
            description: "How custom software solutions can help small and medium-sized enterprises (SMEs) in the UK streamline their operations and grow their business.",
            image: "/images/Customsoftwaresolutions.jpg",
            slug: "custom-software-solutions-smes",
        },
    ];

    return (
        <Layout
            title="Latest Blog Posts | Insights and Tips for Businesses"
            description="Explore our latest blog posts covering web design, SEO, e-commerce, and more. Stay updated with insights and tips tailored for UK businesses."
            keywordContent="web design blog, SEO tips, e-commerce blog, web maintenance blog, content strategy, digital marketing blog, custom software blog"
        >
            <div className='w-full max-w-screen-xl mx-auto mt-12 px-3 py-24'>
                <span className='font-Font1 text-black px-3 py-1 rounded-2xl border-x-1 border-y-2 text-xl md:text-sm border-[rgba(126,214,223,.25)] bg-[rgba(126,214,233,.15)]'>
                    Blogs
                </span>
                <h1 className='my-12 md:w-[60%] font-Font1 text-2xl md:text-6xl'>
                    Latest Insights and Tips for Businesses
                </h1>
                <p className='leading-7 md:w-[60%]'>
                    {"Stay updated with the latest trends, tips, and insights in web design, SEO, e-commerce, and more. Our blog is tailored to help businesses grow and succeed in the digital world."}
                </p>

                <div className='w-full mt-8 grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {blogPosts.map((post) => (
                        <div key={post.id} className='bg-[rgb(247,247,247)] flex flex-col justify-between hover:bg-[rgb(237,250,250)] p-6 shadow-lg overflow-hidden rounded-2xl'>
                            <div className='relative w-full h-[320px]'>
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className='object-cover rounded-2xl'
                                />
                            </div>
                            <div className='mt-4'>
                                <h1 className='text-2xl'>{post.title}</h1>
                                <p className='text-sm opacity-80 my-2'>
                                    {post.description}
                                </p>
                                <Link
                                    href={`/blogs/${post.slug}`}
                                    className='py-3 text-sm block rounded-2xl mt-4 bg-black text-white text-center hover:bg-gray-800 transition-all'
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <VideoSlider />
                <Portofolio />
            </div>
            <Reviews />
        </Layout>
    );
};

export default Blogs;