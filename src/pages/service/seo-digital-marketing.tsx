import Layout from '@/layout/index';
import Image from 'next/image';
import Link from 'next/link';


const SeoDigitalMarketing = () => {
    return (
        <Layout
            title="SEO & Digital Marketing Services | Your Trusted Digital Partner"
            description="Boost your online visibility with our expert SEO and digital marketing services. We offer comprehensive search engine optimization, social media marketing, content strategy, and PPC campaigns tailored for businesses of all sizes."
            keywordContent="SEO services, digital marketing agency, local SEO services, social media marketing, content marketing strategy, PPC management, search engine optimization, online marketing services, digital advertising, SEO consultant"
        >
            <div className="w-full max-w-screen-xl mx-auto mt-12 px-3 py-24">
                {/* Section 1: Introduction */}
                <span className="font-Font1 text-black px-3 py-1 rounded-2xl border-x-1 border-y-2 border-gray-200 bg-blue-50 text-base md:text-sm">
                    SEO & Digital Marketing Services
                </span>
                <h1 className="my-12 text-2xl md:text-5xl font-Font1 md:w-[60%]">
                    Expert SEO & Digital Marketing Services
                </h1>
                <p className="leading-7 md:w-[60%]">
                    As a top digital marketing agency, we deliver comprehensive SEO and market analysis services that drive real business results. Our custom digital marketing solutions are designed to enhance your online presence and improve your search rankings across all major platforms.
                </p>

                {/* Section 2: Hero Image */}
                <div className="w-full relative mt-8">
                    <div className="w-full h-[300px] md:h-[500px] relative">
                        <Image
                            src="/images/seodetailpage.jpg"
                            alt="Expert SEO & Digital Marketing Services"
                            fill
                            className="object-cover rounded-2xl shadow-xl"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </div>

                {/* Section 3: Why Choose Us */}
                <div className="mt-12">
                    <h1 className="my-8 text-2xl md:text-5xl font-Font1">
                        Why Choose Our Digital Marketing Services?
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-3xl font-Font1">1. Custom Digital Marketing Strategies</h2>
                            <p className="text-sm md:text-base my-4">
                                As a leading digital marketing agency, we specialize in:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Custom digital marketing strategies tailored to your needs</li>
                                <li>Comprehensive SEO services for improved search visibility</li>
                                <li>Data-driven market analysis and performance tracking</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-3xl font-Font1">2. Top-Rated SEO Services</h2>
                            <p className="text-sm md:text-base my-4">
                                Our SEO service offerings include:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Custom SEO strategies for higher search rankings</li>
                                <li>Technical SEO optimization for better website performance</li>
                                <li>Local SEO services to dominate your market area</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 4: Key Services */}
                <div className="mt-12">
                    <h1 className="my-8 text-2xl md:text-5xl font-Font1">
                        Key Digital Marketing Services
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-2xl font-Font1">SEO Services</h2>
                            <ul className="list-disc pl-6 mt-4">
                                <li>Advanced SEO strategies for better rankings</li>
                                <li>Local SEO optimization for market dominance</li>
                                <li>Technical SEO improvements for website performance</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-2xl font-Font1">Digital Marketing Strategy</h2>
                            <ul className="list-disc pl-6 mt-4">
                                <li>Custom digital marketing plans</li>
                                <li>Market analysis and competitor research</li>
                                <li>ROI-focused marketing campaigns</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-2xl font-Font1">Marketing Analytics & Reporting</h2>
                            <ul className="list-disc pl-6 mt-4">
                                <li>Comprehensive market performance tracking</li>
                                <li>Digital marketing ROI analysis</li>
                                <li>Custom reporting and insights</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 5: Call to Action */}
                <div className="mt-12 text-center">
                    <h1 className="text-2xl md:text-5xl font-Font1">
                        Start Your Digital Success Today!
                    </h1>
                    <p className="md:w-[60%] mx-auto my-6">
                        Ready to transform your digital presence? Our top-rated digital marketing agency is here to help. Contact us today to discuss how our custom SEO and digital marketing services can drive your business growth!
                    </p>
                    <Link href="/contact" className="bg-black text-white px-8 py-3 rounded-3xl font-Font1 hover:bg-gray-800 transition-all">
                        Contact Us
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default SeoDigitalMarketing;