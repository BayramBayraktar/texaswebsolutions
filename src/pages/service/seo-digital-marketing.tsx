import Layout from '../../layout/index'
import PartnerSlider from '../../components/PartnerSlider'
import Image from 'next/image';
const SeoDigitalMarketing = () => {

    return (
        <Layout
            title="SEO & Digital Marketing Services in Texas | Texsas Web Solutions"
            description="Boost your online visibility with our expert SEO and digital marketing services. We offer comprehensive search engine optimization, social media marketing, content strategy, and PPC campaigns tailored for Texas businesses."
            keywordContent="SEO services Texas, digital marketing agency Texas, local SEO services, social media marketing, content marketing strategy, PPC management, search engine optimization Texas, online marketing services, digital advertising Texas, SEO consultant Texas"
        >
            <div className="w-full max-w-screen-xl mx-auto mt-12 px-3 py-24">
                <span className="font-Font1 text-black px-3 py-1 rounded-2xl border-x-1 border-y-2 border-gray-200 bg-blue-50 text-base md:text-sm ">SEO & Digital Marketing Services</span>

                <h1 className="my-12 text-xl md:text-5xl font-Font1 md:w-[60%]">Best Digital Marketing Agency & SEO Services</h1>
                <p className="leading-7  md:w-3/5">As a top digital marketing agency, we deliver comprehensive SEO and market analysis services that drive real business results. Our custom digital marketing solutions are designed to enhance your online presence and improve your search rankings across all major platforms.</p>


                <div className='w-full relative mt-8 hidden md:block'>
                    <div className='w-full h-[600px] relative'>
                        <Image
                            src="/images/seodetailpage.jpg"
                            alt="Best Digital Marketing & SEO Service"
                            fill
                            className="object-cover rounded-2xl shadow-xl"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </div>


                <div className="slider-wrapper mt-24">
                    <PartnerSlider />
                </div>

                <h1 className="my-8 text-xl md:text-5xl md:w-3/5 font-Font1">Why Choose Our Digital Marketing Services?</h1>

                <h2 className=" text-base md:text-3xl font-Font1 mt-12">1. Best Digital Marketing Agency Services</h2>
                <h3 className=" text-sm md:text-xl md:w-3/5 my-4 font-Font1">As a leading digital marketing agency, we specialize in:</h3>
                <li>Custom digital marketing strategies tailored to your market needs</li>
                <li>Comprehensive SEO services for improved search visibility</li>
                <li>Data-driven market analysis and performance tracking</li>

                <h2 className=" text-base md:text-3xl font-Font1 mt-12">2. Top-Rated SEO Services</h2>
                <h3 className=" text-sm  md:text-xl md:w-3/5 my-4 font-Font1">Our best SEO service offerings include:</h3>
                <li>Custom SEO strategies for higher search rankings</li>
                <li>Technical SEO optimization for better website performance</li>
                <li>Local SEO services to dominate your market area</li>

                <h2 className=" text-base md:text-3xl font-Font1 mt-12">3. Custom Digital Marketing Solutions</h2>
                <h3 className=" text-sm md:text-xl md:w-3/5 my-4 font-Font1">Our market-leading digital services include:</h3>
                <li>Comprehensive digital marketing campaigns</li>
                <li>Custom content marketing strategies</li>
                <li>Social media marketing and management</li>

                <h1 className="my-8  text-xl md:text-5xl md:w-3/5 font-Font1">Key Digital Marketing Services</h1>

                <h2 className="text-base md:text-3xl font-Font1 my-4">SEO Services</h2>
                <li>Advanced SEO strategies for better rankings</li>
                <li>Local SEO optimization for market dominance</li>
                <li>Technical SEO improvements for website performance</li>

                <h2 className=" text-base md:text-3xl font-Font1 my-4">Digital Marketing Strategy</h2>
                <li>Custom digital marketing plans</li>
                <li>Market analysis and competitor research</li>
                <li>ROI-focused marketing campaigns</li>

                <h2 className=" text-base md:text-3xl font-Font1 my-4">Marketing Analytics & Reporting</h2>
                <li>Comprehensive market performance tracking</li>
                <li>Digital marketing ROI analysis</li>
                <li>Custom reporting and insights</li>

                <h1 className="my-8 text-xl md:text-5xl md:w-3/5 font-Font1">Why Choose Our Digital Marketing Agency?</h1>
                <li>Best digital marketing agency with proven results</li>
                <li>Custom SEO services for every business need</li>
                <li>Top-rated digital marketing solutions</li>
                <li>Data-driven market strategies</li>
                <li>Customer-focused service approach</li>

                <h1 className="my-8 text-xl md:text-5xl md:w-3/5 font-Font1">Start Your Digital Success Today!</h1>
                <p className="md:w-3/5">Ready to transform your digital presence? Our top-rated digital marketing agency is here to help. Contact us today to discuss how our custom SEO and digital marketing services can drive your business growth!</p>
            </div>
        </Layout>
    );
};

export default SeoDigitalMarketing;
