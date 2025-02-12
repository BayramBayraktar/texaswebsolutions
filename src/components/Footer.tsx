import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import Price from '@/components/price'

export default function Footer() {

    const [activeIndex, setActiveIndex] = useState<number | null>();

    const faqData = [
        {
            question: "Which is the best design company?",
            answer: "The best design company depends on your needs. Whether you need web design, graphic design, or UI/UX services, researching best design company options will help you find the right fit."
        },
        {
            question: "What are the best software development companies?",
            answer: " Leading firms in software development are known as best software development company options. They offer web, mobile, and custom software solutions."
        },
        {
            question: "What services do digital agencies offer?",
            answer: "Digital agency services include web development, SEO, social media management, and online advertising."
        },
        {
            question: "Which is the best company for SEO services?",
            answer: " To find the best SEO service, look for agencies that specialize in keyword optimization, technical SEO, and performance tracking."
        },
        {
            question: "What is the best web design company?",
            answer: "A best website design company should have a modern approach to design and prioritize user experience."
        }
    ];


    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            <Price />
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
                                    <div><b className="text-sm">Phone: </b><Link className="text-gray-800 font-medium text-xl md:text-sm" href="tel:">---</Link></div>
                                </ul>
                            </div>
                            <div className="md:w-1/3 w-full">
                                <h1 className="font-Font1 my-4">Social Media</h1>
                                <ul className="flex flex-col gap-y-6">
                                    <Link className="text-gray-800 font-medium text-xl md:text-sm" target="_blank" rel="noopener noreferrer" href={"https://www.facebook.com/people/Bayram-Bayraktar/pfbid0DuhzN3yfztM99yMQn1TzQPS4BvSTFejBD4JRb5Qae1fSAU7NEvKG8jQHDzbiF6jsl/"} >Facebook</Link>
                                    <Link className="text-gray-800 font-medium text-xl md:text-sm" target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/company/texas-web-solutions/?viewAsMember=true"} >Linkedin</Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-center py-8 border-t-2 text-[12px] font-semibold  border-gray-200">Copyright © 2025 WDDS. All rights reserved.</h2>
                </div>
            </div>

        </div>
    )
}