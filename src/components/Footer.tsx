import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
//import Price from '@/components/price'


export default function Footer() {

    const [activeIndex, setActiveIndex] = useState<number | null>();
    const faqData = [
        {
            question: "How long does SEO take to show results for my website?",
            answer: "SEO is a long-term strategy. Most businesses see initial improvements in 3-6 months, but competitive industries may require 6-12 months of consistent technical SEO optimization and content development."
        },
        {
            question: "What's the difference between on-page SEO and off-page SEO?",
            answer: "On-page SEO focuses on optimizing content, meta tags, and site structure. Off-page SEO involves building quality backlinks and online reputation through digital PR and local citations."
        },
        {
            question: "Why does mobile responsiveness matter for SEO rankings?",
            answer: "Google uses mobile-first indexing. A mobile-friendly website with fast loading speeds improves user experience and directly impacts search rankings through Core Web Vitals metrics."
        },
        {
            question: "How often should I update my website content for SEO?",
            answer: "Fresh content signals authority. Aim to update key pages quarterly and publish new blog posts weekly. Use tools like Google Search Console to identify outdated content needing refreshment."
        },
        {
            question: "What are the essential technical SEO elements for new websites?",
            answer: "Prioritize XML sitemap submission, robots.txt optimization, schema markup implementation, canonical tags, and HTTPS security for strong technical SEO foundations."
        },
        {
            question: "How can local SEO help my small business get more customers?",
            answer: "Local SEO strategies like Google Business Profile optimization, localized content creation, and NAP consistency across directories can increase visibility in 'near me' searches by up to 300%."
        },
        {
            question: "What's the ideal website loading speed for SEO?",
            answer: "Aim for under 2.5 seconds. Google prioritizes sites scoring 90+ in PageSpeed Insights. Optimize images, leverage browser caching, and minimize render-blocking resources."
        },
        {
            question: "How do featured snippets impact SEO strategy?",
            answer: "Position zero snippets increase visibility by 35%. Optimize content with clear answers using header tags, bullet points, and structured data markup to target question-based queries."
        },
        {
            question: "Why is website security (HTTPS) important for search rankings?",
            answer: "HTTPS is a Google ranking factor. It builds user trust and prevents 'Not Secure' warnings. SSL implementation also protects sensitive data and improves conversion rates."
        },
        {
            question: "What's the role of backlinks in modern SEO success?",
            answer: "High-quality backlinks from authoritative sites remain crucial. Focus on earning links through data-driven content, expert roundups, and digital PR campaigns rather than buying links."
        },
        {
            question: "How can I track SEO performance effectively?",
            answer: "Use Google Search Console for technical insights, Google Analytics 4 for traffic analysis, Ahrefs/SEMrush for keyword tracking, and custom dashboards to monitor ROI metrics."
        },
        {
            question: "What content length performs best for SEO in 2025?",
            answer: "Comprehensive content (1,500-2,500 words) ranks best, but focus on quality over quantity. Use semantic keywords and answer searcher intent through pillar pages and topic clusters."
        },
        {
            question: "How does voice search optimization differ from traditional SEO?",
            answer: "Voice search requires natural language optimization. Target question phrases, optimize for featured snippets, and ensure your business information appears in knowledge panels."
        },
        {
            question: "What are the most important Google ranking factors in 2025?",
            answer: "Top factors include E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness), Core Web Vitals, mobile-first indexing, and high-quality content aligned with user intent."
        },
        {
            question: "Can AI-generated content hurt my website's SEO?",
            answer: "Google rewards human-first content. While AI tools can assist research, always add unique insights and expert perspectives. Mass-produced AI content may trigger quality filters."
        }
    ];

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            {/*  <Price /> */}
  
            <div className="my-12 max-w-screen-xl mx-auto px-3">
                {faqData.map((item, index) => (
                    <div key={index} onClick={() => toggleAccordion(index)} className="p-6 bg-gray-50 rounded-xl mt-3 cursor-pointer shadow-lg">
                        <div className="flex items-center justify-between">
                            <h1 className="md:text-xl text-base font-Font1">{item.question}</h1>
                            <span className="bg-white p-4 text-sm md:text-xl rounded-full">{activeIndex === index ? <IoMdClose /> : <FaPlus />}</span>
                        </div>
                        <div className={`transition-all overflow-hidden duration-500 ${activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                            {activeIndex === index && (
                                <h2 className="mt-4 text-sm md:text-base text-gray-600">
                                    {item.answer}
                                </h2>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full max-w-screen-xl mx-auto md:p-28 py-16 px-4 text-center bg-[url(/images/bgimage.jpg)] bg-black bg-opacity-80 bg-blend-overlay md:rounded-3xl bg-cover'>
                <h1 className='text-white font-Font1 text-xl md:text-5xl'>
                    Your Vision, Our Expertise Perfect Results
                    Where innovation meets reliable web solutions
                </h1>
                <p className='md:my-4 my-6 text-sm md:text-base text-white'>Simple, transparent pricing with no hidden fees.</p>
                <button className='text-center text-[#00BFFF] md:px-12 md:py-3 px-6 py-2 border-2 border-[#00BFFF] rounded-2xl'>Get started</button>
            </div>

            <div className="bg-[rgb(247,247,247)]">
                <div className="w-full max-w-screen-xl mx-auto px-3">
                    <div className="flex md:flex-row flex-col w-full py-24">
                        <div className="md:w-1/3 w-full flex flex-col items-center md:items-start">
                            <Link className="font-Font1  text-5xl" href="/" aria-label="go to homepage">-TWS-</Link>
                            <h1 className="font-Font1 mt-2">Texsas Web Solutions</h1>
                        </div>
                        <div className="md:w-2/3 w-full flex flex-col gap-y-16 mt-12 md:mt-0 md:flex-row">
                            <div className="md:w-1/3 w-full">
                                <h1 className="font-Font1 text-2xl md:text-base my-4">Quick Links</h1>
                                <ul className="flex flex-col gap-y-6">
                                    <Link className="text-gray-800 font-medium text-xl md:text-sm" href={"/"} >Home</Link>
                                    <Link className="text-gray-800 font-medium text-xl md:text-sm" href={"/about"} >About</Link>
                                    <Link className="text-gray-800 font-medium text-xl md:text-sm" href={"/service"} >Service</Link>
                                    <Link className="text-gray-800 font-medium text-xl md:text-sm" href={"/reviews"} >Reviews</Link>
                                    <Link className="text-gray-800 font-medium text-xl md:text-sm" href={"/contact"} >Contact</Link>
                                </ul>
                            </div>
                            <div className=" md:w-1/3 w-full ">
                                <h1 className="font-Font1 text-2xl md:text-base my-4">Contact us</h1>
                                <ul className="flex flex-col gap-y-6">
                                    <div><b className="text-sm">Email: </b><Link className="text-gray-800 font-medium text-xl md:text-sm" href="mailto:texsaswebsolutions@gmail.com">texsaswebsolutions@gmail.com</Link></div>
                                    <div><b className="text-sm">Whatsapp: </b><Link className="text-gray-800 font-medium text-xl md:text-sm" href="https://wa.me/+905315278986">Whatsapp</Link></div>
                                </ul>
                            </div>
                            <div className="md:w-1/3 w-full">
                                <h1 className="font-Font1 my-4">Social Media</h1>
                                <ul className="flex flex-col gap-y-6">
                                    <Link className="text-gray-800 font-medium text-xl md:text-sm" target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/company/texas-web-solutions/?viewAsMember=true"} >Linkedin</Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-center py-8 border-t-2 text-[12px] font-semibold  border-gray-200">Copyright © 2025 <b>Texas Web Solutions.</b> All rights reserved.</h2>
                </div>
            </div>

        </div>
    )
}