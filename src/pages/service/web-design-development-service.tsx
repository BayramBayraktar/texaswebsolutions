import Layout from '@/layout/index';
import Image from 'next/image';
import Link from 'next/link';

const ServiceDetail = () => {
    return (
        <Layout
            title="Professional Web Design & Development Services in the UK | Your Trusted Digital Partner"
            description="We offer top-rated web design and development services in the UK, creating custom, responsive, and high-performing websites tailored to businesses of all sizes. Boost your online presence with us!"
            keywordContent="web design services UK, web development services UK, custom website design UK, small business web development UK, professional web design UK, SEO-optimized websites UK, e-commerce development UK"
        >
            <div className='w-full max-w-screen-xl mx-auto mt-12 px-3 py-24'>
                {/* Section 1: Introduction */}
                <span className='font-Font1 text-black px-3 py-1 rounded-2xl border-x-1 border-y-2 text-base md:text-sm border-[rgba(126,214,223,.25)] bg-[rgba(126,214,233,.15)]'>
                    Web Design & Development Service
                </span>
                <h1 className='my-12 text-2xl md:text-5xl font-Font1 md:w-[60%]'>
                    Professional Web Design & Development Services in the UK
                </h1>
                <p className='leading-7 w-full md:w-[60%]'>
                    In today’s digital landscape, having a professionally designed website is essential for business growth. Our web design and development services focus on creating custom, high-performance websites that enhance user experience and drive conversions. Whether you are a startup, an established company, or an agency, we offer tailored solutions to meet your needs in the UK.
                </p>

                {/* Section 2: Hero Image */}
                <div className='w-full relative mt-8'>
                    <div className='w-full h-[300px] md:h-[500px] relative'>
                        <Image
                            src="/images/designservice.jpg"
                            alt="Web Design and Development Services in the UK"
                            fill
                            className="object-cover rounded-2xl shadow-xl"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </div>

                {/* Section 3: Why Choose Us */}
                <div className='mt-12'>
                    <h1 className='my-8 text-2xl md:text-5xl font-Font1'>
                        Why Choose Our Web Design & Development Services in the UK?
                    </h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className='bg-[rgba(126,214,233,.15)] p-6 rounded-2xl'>
                            <h2 className='text-xl md:text-3xl font-Font1'>1. Custom Web Design & Development</h2>
                            <p className='text-sm md:text-base my-4'>
                                As a leading web development company in the UK, we specialize in custom solutions that align with your business goals. Our expertise includes:
                            </p>
                            <ul className='list-disc pl-6'>
                                <li>Custom website design tailored to your brand</li>
                                <li>Top-notch web development for seamless performance</li>
                                <li>SEO-optimized websites to boost search rankings</li>
                            </ul>
                        </div>
                        <div className='bg-[rgba(126,214,233,.15)] p-6 rounded-2xl'>
                            <h2 className='text-xl md:text-3xl font-Font1'>2. Comprehensive Development Solutions</h2>
                            <p className='text-sm md:text-base my-4'>
                                Our services cater to businesses of all sizes in the UK. Whether you need a corporate website, e-commerce platform, or software development, we ensure a smooth and efficient process.
                            </p>
                            <ul className='list-disc pl-6'>
                                <li>Custom web development for unique business needs</li>
                                <li>Full-stack development with the latest technologies</li>
                                <li>Scalable software solutions to support growth</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 4: Key Services */}
                <div className='mt-12'>
                    <h1 className='my-8 text-2xl md:text-5xl font-Font1'>
                        Key Services We Offer in the UK
                    </h1>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        <div className='bg-[rgba(126,214,233,.15)] p-6 rounded-2xl'>
                            <h2 className='text-xl md:text-2xl font-Font1'>Website Development</h2>
                            <ul className='list-disc pl-6 mt-4'>
                                <li>Custom website development</li>
                                <li>SEO-friendly development</li>
                                <li>E-commerce solutions</li>
                            </ul>
                        </div>
                        <div className='bg-[rgba(126,214,233,.15)] p-6 rounded-2xl'>
                            <h2 className='text-xl md:text-2xl font-Font1'>Web Design</h2>
                            <ul className='list-disc pl-6 mt-4'>
                                <li>Professional web design</li>
                                <li>User-focused UI/UX design</li>
                                <li>Responsive design for all devices</li>
                            </ul>
                        </div>
                        <div className='bg-[rgba(126,214,233,.15)] p-6 rounded-2xl'>
                            <h2 className='text-xl md:text-2xl font-Font1'>SEO & Digital Marketing</h2>
                            <ul className='list-disc pl-6 mt-4'>
                                <li>SEO optimization</li>
                                <li>Digital marketing strategies</li>
                                <li>Market analysis and consulting</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 5: Call to Action */}
                <div className='mt-12 text-center'>
                    <h1 className='text-2xl md:text-5xl font-Font1'>
                        Get Started Today!
                    </h1>
                    <p className='md:w-[60%] mx-auto my-6'>
                        Are you looking for the best web design and development services in the UK? Our team is here to transform your vision into reality. Contact us today and take the first step toward an exceptional online presence!
                    </p>
                    <Link href="/contact" className="bg-black text-white px-8 py-3 rounded-3xl font-Font1 hover:bg-gray-800 transition-all">
                        Contact Us
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default ServiceDetail;