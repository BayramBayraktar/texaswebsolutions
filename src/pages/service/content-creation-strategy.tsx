import Layout from '@/layout/index';
import Image from 'next/image';
import Link from 'next/link';

const Strategy = () => {
    return (
        <Layout
            title="Content Creation Strategy Services | Your Trusted Digital Partner"
            description="Elevate your brand with our expert content creation strategies. We craft compelling, data-driven content that engages your audience and drives business growth."
            keywordContent="content creation strategy, content marketing, digital content strategy, content planning, SEO content creation, brand storytelling, social media content, content optimization, content consulting, UK content strategy"
        >
            <div className="w-full max-w-screen-xl mx-auto mt-12 px-3 py-24">
                {/* Section 1: Introduction */}
                <span className="font-Font1 text-black px-3 py-1 rounded-2xl border-x-1 border-y-2 border-gray-200 bg-blue-50 text-base md:text-sm">
                    Content Creation Strategy
                </span>
                <h1 className="my-12 text-2xl md:text-5xl font-Font1 md:w-[60%]">
                    Expert Content Creation Strategy Services
                </h1>
                <p className="leading-7 md:w-[60%]">
                    As a leading provider of content creation strategies, we help businesses craft compelling, data-driven content that engages audiences and drives growth. Our tailored strategies ensure your brand stands out in a competitive digital landscape.
                </p>

                {/* Section 2: Hero Image */}
                <div className="w-full relative mt-8">
                    <div className="w-full h-[300px] md:h-[500px] relative">
                        <Image
                            src="/images/content-strategy.jpg"
                            alt="Expert Content Creation Strategy Services"
                            fill
                            className="object-cover rounded-2xl shadow-xl"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </div>

                {/* Section 3: Why Choose Us */}
                <div className="mt-12">
                    <h1 className="my-8 text-2xl md:text-5xl font-Font1">
                        Why Choose Our Content Creation Strategy Services?
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-3xl font-Font1">1. Data-Driven Strategies</h2>
                            <p className="text-sm md:text-base my-4">
                                Our content strategies are built on:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>In-depth audience research and analysis</li>
                                <li>SEO-driven content planning</li>
                                <li>Performance tracking and optimization</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-3xl font-Font1">2. Creative Storytelling</h2>
                            <p className="text-sm md:text-base my-4">
                                We specialize in:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Crafting compelling brand narratives</li>
                                <li>Engaging social media content creation</li>
                                <li>Visual and multimedia storytelling</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 4: Key Services */}
                <div className="mt-12">
                    <h1 className="my-8 text-2xl md:text-5xl font-Font1">
                        Key Content Creation Strategy Services
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-2xl font-Font1">Content Planning</h2>
                            <ul className="list-disc pl-6 mt-4">
                                <li>Audience research and persona development</li>
                                <li>Content calendar creation</li>
                                <li>SEO-driven content mapping</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-2xl font-Font1">Content Creation</h2>
                            <ul className="list-disc pl-6 mt-4">
                                <li>Blog posts, articles, and whitepapers</li>
                                <li>Social media content and campaigns</li>
                                <li>Video and multimedia content production</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-2xl font-Font1">Content Optimization</h2>
                            <ul className="list-disc pl-6 mt-4">
                                <li>SEO and keyword optimization</li>
                                <li>Performance analytics and reporting</li>
                                <li>Content A/B testing and refinement</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 5: Call to Action */}
                <div className="mt-12 text-center">
                    <h1 className="text-2xl md:text-5xl font-Font1">
                        Elevate Your Content Strategy Today!
                    </h1>
                    <p className="md:w-[60%] mx-auto my-6">
                        Ready to transform your content strategy and engage your audience like never before? Contact us today to learn how our expert services can drive your business growth.
                    </p>
                    <Link href="/contact" className="bg-black text-white px-8 py-3 rounded-3xl font-Font1 hover:bg-gray-800 transition-all">
                        Contact Us
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default Strategy;