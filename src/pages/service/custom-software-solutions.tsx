import Layout from '@/layout/index';
import Image from 'next/image';
import Link from 'next/link';

const CustomSoftwareSolutionsPage = () => {
    return (
        <Layout
            title="Custom Software Solutions & Development Services | Your Trusted Digital Partner"
            description="Get tailored software solutions designed specifically for your business needs. Our expert team delivers custom software development, enterprise solutions, mobile applications, and cloud-based systems."
            keywordContent="custom software development, bespoke software solutions, enterprise software development, custom application development, software consulting, business software solutions, custom CRM development, cloud software development, mobile app development, custom database solutions"
        >
            <div className="w-full max-w-screen-xl mx-auto mt-12 px-3 py-24">
                {/* Section 1: Introduction */}
                <span className="font-Font1 text-black px-3 py-1 rounded-2xl border-x-1 border-y-2 border-gray-200 bg-blue-50 text-base md:text-sm">
                    Custom Software Solutions
                </span>
                <h1 className="my-12 text-2xl md:text-5xl font-Font1 md:w-[60%]">
                    Expert Custom Software Development Solutions
                </h1>
                <p className="leading-7 md:w-[60%]">
                    As a leading software development company, we deliver custom solutions that transform your business operations. Our professional development team specializes in creating scalable, high-performance software tailored to your unique requirements.
                </p>

                {/* Section 2: Hero Image */}
                <div className="w-full relative mt-8">
                    <div className="w-full h-[300px] md:h-[500px] relative">
                        <Image
                            src="/images/CustomSoftwareSolutionsdetayl.jpg"
                            alt="Custom Software Solutions"
                            fill
                            className="object-cover rounded-2xl shadow-xl"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </div>

                {/* Section 3: Why Choose Us */}
                <div className="mt-12">
                    <h1 className="my-8 text-2xl md:text-5xl font-Font1">
                        Why Choose Our Custom Software Solutions?
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-3xl font-Font1">1. Expert Software Development</h2>
                            <p className="text-sm md:text-base my-4">
                                As a leading software development company, we offer:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Custom software solutions tailored to your business goals</li>
                                <li>Professional software design and development services</li>
                                <li>Top-rated software development expertise</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-3xl font-Font1">2. Professional Custom Solutions</h2>
                            <p className="text-sm md:text-base my-4">
                                Our premier software development services include:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Enterprise software development</li>
                                <li>Custom CRM and ERP solutions</li>
                                <li>Software modernization and redesign</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 4: Key Services */}
                <div className="mt-12">
                    <h1 className="my-8 text-2xl md:text-5xl font-Font1">
                        Key Software Development Services
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-2xl font-Font1">Custom Software Development</h2>
                            <ul className="list-disc pl-6 mt-4">
                                <li>Custom application development</li>
                                <li>Cloud-based software solutions</li>
                                <li>Mobile app development</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-2xl font-Font1">Enterprise Solutions</h2>
                            <ul className="list-disc pl-6 mt-4">
                                <li>Custom CRM and ERP systems</li>
                                <li>Business process automation</li>
                                <li>Data analytics and reporting</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-2xl font-Font1">Professional Development Process</h2>
                            <ul className="list-disc pl-6 mt-4">
                                <li>Agile development methodology</li>
                                <li>Comprehensive testing and QA</li>
                                <li>Ongoing software maintenance</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 5: Call to Action */}
                <div className="mt-12 text-center">
                    <h1 className="text-2xl md:text-5xl font-Font1">
                        Elevate Your Business Today!
                    </h1>
                    <p className="md:w-[60%] mx-auto my-6">
                        Ready to transform your business with custom software solutions? Our expert development team is here to help. Contact us today to discover how our custom software can enhance your operations and drive success!
                    </p>
                    <Link href="/contact" className="bg-black text-white px-8 py-3 rounded-3xl font-Font1 hover:bg-gray-800 transition-all">
                        Contact Us
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default CustomSoftwareSolutionsPage;