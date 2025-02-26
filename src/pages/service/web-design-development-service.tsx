import Layout from '../../layout/index'
import Image from 'next/image';
const ServiceDetail = () => {

    return (
        <Layout
            title="Professional Web Design & Development Services in Texas | Texsas Web Solutions"
            description="Texsas Web Solutions offers top-rated web design and development services in Texas. We create custom, responsive, and high-performing websites tailored to small businesses. Boost your online presence with us!"
            keywordContent="web design services Texas, web development services Texas, custom website design Texas, small business web development, professional web design Texas, Texas web solutions"
        >
            <div className='w-full max-w-screen-xl mx-auto mt-12 px-3 py-24'>
                <span className='font-Font1 text-black px-3 py-1 rounded-2xl border-x-1 border-y-2 text-base md:text-sm border-[rgba(126,214,223,.25)] bg-[rgba(126,214,233,.15)]'>Web design development service</span>
                <h1 className='my-12 text-2xl md:text-5xl font-Font1 md:w-[60%]'>Web Design and Development Services</h1>
                <p className='leading-7 w-full md:w-[60%]'>In today’s digital landscape, having a professionally designed website is essential for business growth. Our web design and development services focus on creating custom, high-performance websites that enhance user experience and drive conversions. Whether you are a startup, an established company, or an agency, we offer tailored solutions to meet your needs.</p>

                <div className='w-full relative mt-8 hidden md:block'>
                    <div className='w-full h-[600px] relative'>
                        <Image
                            src="/images/designservice.jpg"
                            alt="Web Design and Development Services"
                            fill
                            className="object-cover rounded-2xl shadow-xl"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </div>

         

                <h1 className='my-8  text-xl md:text-5xl w-full md:w-[60%] font-Font1'>Why Choose Our Web Design & Development Services?</h1>
                <h2 className='text-base md:text-3xl font-Font1 mt-12'>1. Best Web Design & Development Company</h2>
                <h3 className=' text-sm md:text-xl md:w-[60%] my-4 font-Font1'>As a leading website development company, we specialize in custom solutions that align with your business goals. Our expertise includes:</h3>
                <li>Custom website design tailored to your brand</li>
                <li>Top-notch web development services for seamless performance</li>
                <li>SEO-optimized websites to boost search rankings</li>


                <h2 className=' text-base md:text-3xl font-Font1 mt-12'>2. Comprehensive Web Development Solutions</h2>
                <h3 className='text-sm md:text-xl md:w-[60%] my-4 font-Font1'>Our best development services cater to businesses of all sizes. Whether you need a corporate website, e-commerce platform, or software development, our team ensures a smooth and efficient process. We provide:</h3>
                <li>Custom web development for unique business needs</li>
                <li>Full-stack development with the latest technologies</li>
                <li>Scalable software solutions to support business growth</li>

                <h2 className='text-base md:text-3xl font-Font1 mt-12'>3. Best Web Design Agency for Custom Solutions</h2>
                <h3 className=' text-sm md:text-xl md:w-[60%] my-4 font-Font1'>A well-designed website is crucial for success. As a top digital agency, we provide cutting-edge designs that make your brand stand out. Our services include:</h3>
                <li>UI/UX design for an intuitive user experience</li>
                <li>Responsive web design for mobile and desktop compatibility</li>
                <li>Brand-focused creative design to engage your audience</li>

                <h1 className='my-8 text-xl md:text-5xl md:w-[60%] font-Font1'>Key Services We Offer</h1>
                <h2 className=' text-base md:text-3xl font-Font1 my-4'>Website Development Services</h2>
                <li>Custom website development for businesses of all types</li>
                <li>SEO-friendly development to improve search engine visibility</li>
                <li>E-commerce solutions for seamless online transactions</li>

                <h2 className=' text-base md:text-3xl font-Font1 my-4'>Web Design Services</h2>
                <li>Professional web design to enhance brand identity</li>
                <li>User-focused UI/UX design for better engagement</li>
                <li>Best web design agency solutions for businesses worldwide</li>

                <h2 className='text-base md:text-3xl font-Font1 my-4'>SEO & Digital Marketing Services</h2>
                <li>SEO optimization to improve Google rankings</li>
                <li>Digital marketing strategies to boost online presence</li>
                <li>Market analysis and consulting to drive business success</li>


                <h1 className='my-8 text-xl md:text-5xl md:w-[60%] font-Font1'>Why Choose Our Web Design & Development Services?</h1>
                <li>Best web development company with years of experience</li>
                <li>Custom software solutions tailored to your business needs</li>
                <li>SEO-optimized design and development for higher search rankings</li>
                <li>Comprehensive digital solutions for agencies and businesses</li>
                <li>Customer-centric approach to ensure satisfaction</li>

                <h1 className='my-8 text-xl md:text-5xl md:w-[60%] font-Font1'>Get Started Today!</h1>
                <p className=' md:w-[60%]'>Are you looking for the best web design and development company? Our team is here to transform your vision into reality. Contact us today and take the first step toward an exceptional online presence!</p>
            </div>

        </Layout>
    );
};

export default ServiceDetail;
