import Layout from '@/layout/index';
import Image from 'next/image';
import Link from 'next/link';

const MaintenanceSupport = () => {
    return (
        <Layout
            title="Professional Maintenance Support Services | Your Trusted IT Partner"
            description="Ensure the smooth operation of your systems with our expert maintenance and support services. We provide reliable, scalable, and efficient solutions tailored to your business needs."
            keywordContent="maintenance support, IT maintenance, system support, technical support services, IT infrastructure management, software maintenance, hardware maintenance, IT consulting, business continuity support, IT support UK"
        >
            <div className="w-full max-w-screen-xl mx-auto mt-12 px-3 py-24">
                {/* Section 1: Introduction */}
                <span className="font-Font1 text-black px-3 py-1 rounded-2xl border-x-1 border-y-2 border-gray-200 bg-blue-50 text-base md:text-sm">
                    Maintenance & Support Services
                </span>
                <h1 className="my-12 text-2xl md:text-5xl font-Font1 md:w-[60%]">
                    Expert Maintenance & Support Services
                </h1>
                <p className="leading-7 md:w-[60%]">
                    As a leading provider of maintenance and support services, we ensure your IT systems run smoothly and efficiently. Our team offers reliable, scalable, and tailored solutions to meet your business needs.
                </p>

                {/* Section 2: Hero Image */}
                <div className="w-full relative mt-8">
                    <div className="w-full h-[300px] md:h-[500px] relative">
                        <Image
                            src="/images/support.jpg"
                            alt="Expert Maintenance & Support Services"
                            fill
                            className="object-cover rounded-2xl shadow-xl"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </div>

                {/* Section 3: Why Choose Us */}
                <div className="mt-12">
                    <h1 className="my-8 text-2xl md:text-5xl font-Font1">
                        Why Choose Our Maintenance & Support Services?
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-3xl font-Font1">1. Comprehensive IT Maintenance</h2>
                            <p className="text-sm md:text-base my-4">
                                Our maintenance services include:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Regular system updates and patches</li>
                                <li>Hardware and software maintenance</li>
                                <li>Proactive monitoring and issue resolution</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-3xl font-Font1">2. Reliable Technical Support</h2>
                            <p className="text-sm md:text-base my-4">
                                Our support services ensure:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>24/7 technical support availability</li>
                                <li>Quick response times and issue resolution</li>
                                <li>Expert advice and consulting services</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 4: Key Services */}
                <div className="mt-12">
                    <h1 className="my-8 text-2xl md:text-5xl font-Font1">
                        Key Maintenance & Support Services
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-2xl font-Font1">System Maintenance</h2>
                            <ul className="list-disc pl-6 mt-4">
                                <li>Regular system health checks</li>
                                <li>Software updates and patch management</li>
                                <li>Hardware maintenance and upgrades</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-2xl font-Font1">Technical Support</h2>
                            <ul className="list-disc pl-6 mt-4">
                                <li>24/7 technical support services</li>
                                <li>Remote and on-site support options</li>
                                <li>Incident management and resolution</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-2xl font-Font1">Consulting & Advisory</h2>
                            <ul className="list-disc pl-6 mt-4">
                                <li>IT infrastructure consulting</li>
                                <li>Business continuity planning</li>
                                <li>Custom IT solutions and strategies</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 5: Call to Action */}
                <div className="mt-12 text-center">
                    <h1 className="text-2xl md:text-5xl font-Font1">
                        Ensure Your Systems Run Smoothly!
                    </h1>
                    <p className="md:w-[60%] mx-auto my-6">
                        Ready to enhance your IT systems with reliable maintenance and support? Contact us today to learn how our expert services can keep your business running smoothly.
                    </p>
                    <Link href="/contact" className="bg-black text-white px-8 py-3 rounded-3xl font-Font1 hover:bg-gray-800 transition-all">
                        Contact Us
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default MaintenanceSupport;