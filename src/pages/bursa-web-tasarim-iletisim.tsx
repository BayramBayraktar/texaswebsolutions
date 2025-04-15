import React from 'react';
import Layout from '../layout/index';
import Link from 'next/link';
import WeCreatedSlider from '@/components/weCreated';
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import Form from '@/components/Form';
import Reviews from '@/components/reviews';

const Contact = () => {
    return (
        <Layout
            title="Bursa Web Tasarım ve Yazılım Hizmetleri | Bize Ulaşın"
            description="Bursa'da profesyonel web tasarım ve yazılım çözümleri için bizimle iletişime geçin. Ücretsiz danışmanlık, özel web sitesi tasarımı ve dijital pazarlama desteği sunuyoruz."
            keywordContent="Bursa web tasarım, yazılım ajansı Bursa, web geliştirme, dijital pazarlama, iletişim, ücretsiz danışmanlık, Bursa web hizmetleri"
        >
            <div className='w-full max-w-screen-xl mx-auto px-3 md:py-24'>
                <div className='flex flex-col md:flex-row gap-10 mt-28 justify-between'>
                    <div className='md:w-[50%]'>
                        <small className='text-sm font-Font1 text-gray-600'>İLETİŞİME GEÇİN</small>
                        <h1 className='text-4xl font-Font1 mt-2 mb-4'>Bizimle İletişime Geçin – Yardımcı Olmaktan Mutluluk Duyarız!</h1>
                        <p className='text-base text-gray-700'>
                            {"Aklınızda bir soru ya da proje mi var? Hiç çekinmeden bizimle iletişime geçin! Ücretsiz danışmanlık fırsatımızdan yararlanarak işinizi dijital dünyada bir adım öne taşıyabilirsiniz. Yeni bir proje, iş birliği ya da basit bir öneri için ekibimiz size yardımcı olmaya hazır. Hemen bizimle iletişime geçin – sizinle tanışmak için sabırsızlanıyoruz!"}
                        </p>
                        <div className='flex flex-col gap-8 mt-8'>
                            <Link href="mailto:texsaswebsolutions@gmail.com" className='text-xl flex items-center gap-4 mt-2'>
                                <MdOutlineEmail className='text-2xl w-12 h-12 border border-gray-800 rounded-full p-3 shadow-sm shadow-black' />
                                <div className='flex flex-col'>
                                    <span className='font-Font1 text-xl'>E-posta</span>
                                    <span className='font-Font1 text-xl'>texsaswebsolutions@gmail.com</span>
                                </div>
                            </Link>
                            <Link href="https://wa.me/+905315278986" className='text-xl flex gap-4 mt-2 items-center' target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className='text-2xl w-12 h-12 border border-gray-800 rounded-full p-3 shadow-sm shadow-black' />
                                <div className='flex flex-col'>
                                    <span className='font-Font1 text-xl'>WhatsApp</span>
                                    <span className='font-Font1 text-xl'> +90 531 527 8986</span>
                                </div>
                            </Link>
                            <Link href="https://www.linkedin.com/company/texas-web-solutions/?viewAsMember=true" className='text-xl flex gap-4 mt-2 items-center' target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn className='text-2xl w-12 h-12 border border-gray-800 rounded-full p-3 shadow-sm shadow-black' />
                                <div className='flex flex-col'>
                                    <span className='font-Font1 text-xl'>LinkedIn</span>
                                    <span className='font-Font1 text-xl'>texas-web-solutions</span>

                                </div>

                            </Link>
                        </div>
                    </div>
                    <Form />
                </div>
                <WeCreatedSlider />
            </div>
            <Reviews />
        </Layout>
    );
};

export default Contact;
