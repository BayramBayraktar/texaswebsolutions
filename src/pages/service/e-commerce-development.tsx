import Layout from '@/layout/index';
import Image from 'next/image';
import Link from 'next/link';

const EcommerceDevelopment = () => {
    return (
        <Layout
            title="E-commerce Website Development Services | Your Trusted Digital Partner"
            description="Transform your business with our custom e-commerce development solutions. We build secure, scalable, and user-friendly online stores with seamless payment integration and inventory management."
            keywordContent="e-commerce development, online store development, custom e-commerce solutions, WooCommerce development, Shopify development, e-commerce website design, shopping cart integration, secure payment gateway setup, B2B e-commerce solutions, e-commerce consulting services"
        >
            <div className="w-full max-w-screen-xl mx-auto mt-12 px-3 py-24">
                {/* Section 1: Introduction */}
                <span className="font-Font1 text-black px-3 py-1 rounded-2xl border-x-1 border-y-2 border-gray-200 bg-blue-50 text-base md:text-sm">
                    E-commerce Development Services
                </span>
                <h1 className="my-12 text-2xl md:text-5xl font-Font1 md:w-[60%]">
                    Expert E-commerce Development Services
                </h1>
                <p className="leading-7 md:w-[60%]">
                    As a leading e-commerce development company, we deliver custom solutions that transform your online business. Our team specializes in creating scalable, high-performance e-commerce platforms tailored to your unique needs.
                </p>

                {/* Section 2: Hero Image */}
                <div className="w-full relative mt-8">
                    <div className="w-full h-[300px] md:h-[500px] relative">
                        <Image
                            src="/images/ecommercedetail.jpg"
                            alt="Expert E-commerce Development Services"
                            fill
                            className="object-cover rounded-2xl shadow-xl"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </div>

                {/* Section 3: Why Choose Us */}
                <div className="mt-12">
                    <h1 className="my-8 text-2xl md:text-5xl font-Font1">
                        Why Choose Our E-commerce Development Services?
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-3xl font-Font1">1. Custom E-commerce Solutions</h2>
                            <p className="text-sm md:text-base my-4">
                                As a leading e-commerce development company, we offer:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Custom e-commerce solutions tailored to your business</li>
                                <li>Professional website design and development services</li>
                                <li>Top-rated software development expertise</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-3xl font-Font1">2. Professional E-commerce Development</h2>
                            <p className="text-sm md:text-base my-4">
                                Our e-commerce development services include:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Custom shopping cart development</li>
                                <li>Secure payment gateway integration</li>
                                <li>Scalable e-commerce platforms</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 4: Key Services */}
                <div className="mt-12">
                    <h1 className="my-8 text-2xl md:text-5xl font-Font1">
                        Key E-commerce Development Services
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-2xl font-Font1">Website Development</h2>
                            <ul className="list-disc pl-6 mt-4">
                                <li>Custom e-commerce website development</li>
                                <li>Responsive design implementation</li>
                                <li>Performance optimization services</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-2xl font-Font1">E-commerce Solutions</h2>
                            <ul className="list-disc pl-6 mt-4">
                                <li>Shopping cart development</li>
                                <li>Payment system integration</li>
                                <li>Inventory management systems</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-2xl font-Font1">Custom Development</h2>
                            <ul className="list-disc pl-6 mt-4">
                                <li>Custom feature development</li>
                                <li>API integrations</li>
                                <li>E-commerce platform optimization</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 5: Call to Action */}
                <div className="mt-12 text-center">
                    <h1 className="text-2xl md:text-5xl font-Font1">
                        Start Your E-commerce Journey Today!
                    </h1>
                    <p className="md:w-[60%] mx-auto my-6">
                        Ready to launch your online store? Our expert e-commerce development team is here to help. Contact us today to discuss how our custom solutions can elevate your business!
                    </p>
                    <Link href="/contact" className="bg-black text-white px-8 py-3 rounded-3xl font-Font1 hover:bg-gray-800 transition-all">
                        Contact Us
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default EcommerceDevelopment;