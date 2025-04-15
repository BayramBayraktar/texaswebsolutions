import Layout from '@/layout/index';
import Image from 'next/image';
import Link from 'next/link';

const EcommerceDevelopment = () => {
    return (
        <Layout
            title="Bursa E-Ticaret Web Sitesi Geliştirme Hizmetleri | Profesyonel Dijital Çözümler"
            description="Bursa'da güvenli, ölçeklenebilir ve kullanıcı dostu e-ticaret siteleri geliştiriyoruz. Ödeme entegrasyonlu, profesyonel online mağaza çözümleri sunuyoruz."
            keywordContent="Bursa e-ticaret sitesi, Bursa e-ticaret yazılımı, e-ticaret sitesi kurulumu, online mağaza tasarımı, alışveriş sitesi yapımı, Bursa e-ticaret ajansı, ödeme entegrasyonu, WooCommerce Bursa, Shopify Bursa, B2B e-ticaret çözümleri"
        >
            <div className="w-full max-w-screen-xl mx-auto mt-12 px-3 py-24">
                {/* Section 1: Introduction */}
                <span className="font-Font1 text-black px-3 py-1 rounded-2xl border-x-1 border-y-2 border-gray-200 bg-blue-50 text-base md:text-sm">
                    Bursa E-Ticaret Çözümleri
                </span>
                <h1 className="my-12 text-2xl md:text-5xl font-Font1 md:w-[60%]">
                    Bursa nın Profesyonel E-Ticaret Geliştirme Ekibi
                </h1>
                <p className="leading-7 md:w-[60%]">
                    Bursa da faaliyet gösteren işletmeler için özel e-ticaret çözümleri sunuyoruz. Online satışlarınızı artıracak, yüksek performanslı ve güvenli e-ticaret platformları geliştiriyoruz.
                </p>

                {/* Section 2: Hero Image */}
                <div className="w-full relative mt-8">
                    <div className="w-full h-[300px] md:h-[500px] relative">
                        <Image
                            src="/images/ecommercedetail.jpg"
                            alt="Bursa E-Ticaret Sitesi Geliştirme Hizmetleri"
                            fill
                            className="object-cover rounded-2xl shadow-xl"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </div>

                {/* Section 3: Why Choose Us */}
                <div className="mt-12">
                    <h1 className="my-8 text-2xl md:text-5xl font-Font1">
                        Neden Bursa da Bizimle Çalışmalısınız?
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-3xl font-Font1">1. Bursa ya Özel E-Ticaret Çözümleri</h2>
                            <p className="text-sm md:text-base my-4">
                                Bursa daki işletmelere özel sunduğumuz hizmetler:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Bursa pazarına uygun e-ticaret stratejileri</li>
                                <li>Yerel işletmelere özel tasarım çözümleri</li>
                                <li>Bursa nın ticari ihtiyaçlarına yönelik geliştirmeler</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-3xl font-Font1">2. Profesyonel E-Ticaret Geliştirme</h2>
                            <p className="text-sm md:text-base my-4">
                                Bursa da sunduğumuz e-ticaret hizmetleri:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Özel alışveriş sepeti entegrasyonu</li>
                                <li>Güvenli ödeme sistemleri (BKM Express, PayTR, iyzico)</li>
                                <li>Bursa daki nakliye firmaları ile entegrasyon</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 4: Key Services */}
                <div className="mt-12">
                    <h1 className="my-8 text-2xl md:text-5xl font-Font1">
                        Bursa E-Ticaret Hizmetlerimiz
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-2xl font-Font1">E-Ticaret Sitesi Kurulumu</h2>
                            <ul className="list-disc pl-6 mt-4">
                                <li>Bursa ya özel e-ticaret sitesi tasarımı</li>
                                <li>Mobil uyumlu responsive tasarım</li>
                                <li>Hızlı yükleme süreleri için optimizasyon</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-2xl font-Font1">E-Ticaret Çözümleri</h2>
                            <ul className="list-disc pl-6 mt-4">
                                <li>Bursa daki kargo firmaları ile entegrasyon</li>
                                <li>Yerel ödeme sistemleri entegrasyonu</li>
                                <li>Stok ve envanter yönetim sistemleri</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-2xl font-Font1">Özel Geliştirmeler</h2>
                            <ul className="list-disc pl-6 mt-4">
                                <li>Bursa pazarına özel modüller</li>
                                <li>ERP ve muhasebe yazılım entegrasyonları</li>
                                <li>E-ticaret sitesi performans optimizasyonu</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 5: Call to Action */}
                <div className="mt-12 text-center">
                    <h1 className="text-2xl md:text-5xl font-Font1">
                        Bursa da E-Ticaret Sitesi Kurmak İçin Doğru Adres!
                    </h1>
                    <p className="md:w-[60%] mx-auto my-6">
                        Bursa da online mağazanızı açmaya hazır mısınız? Profesyonel e-ticaret ekibimiz, Bursa daki işletmeniz için en uygun çözümleri sunmak için hazır. Hemen iletişime geçin!
                    </p>
                    <Link href="/bursa-web-tasarim-iletisim" className="bg-black text-white px-8 py-3 rounded-3xl font-Font1 hover:bg-gray-800 transition-all">
                        Teklif Alın
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default EcommerceDevelopment;