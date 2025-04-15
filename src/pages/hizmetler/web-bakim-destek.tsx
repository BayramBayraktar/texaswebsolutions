import Layout from '@/layout/index';
import Image from 'next/image';
import Link from 'next/link';

const BakimDestekHizmetleri = () => {
    return (
        <Layout
            title="Bursa IT Bakım & Teknik Destek Hizmetleri | Profesyonel Yazılım Desteği"
            description="Bursa ve Türkiye genelinde 7/24 IT bakım ve teknik destek hizmetleri. Yazılım güncelleme, sistem bakımı ve acil müdahale çözümleri sunuyoruz."
            keywordContent="Bursa IT destek, teknik bakım hizmetleri, yazılım güncelleme, sistem yönetimi, Bursa bilgisayar servisi, network destek, sunucu bakımı, uzaktan destek, IT çözüm ortaklığı, Türkiye IT hizmetleri"
        >
            <div className="w-full max-w-screen-xl mx-auto mt-12 px-3 py-24">
                {/* Section 1: Introduction */}
                <span className="font-Font1 text-black px-3 py-1 rounded-2xl border-x-1 border-y-2 border-gray-200 bg-blue-50 text-base md:text-sm">
                    Profesyonel Destek Hizmetleri
                </span>
                <h1 className="my-12 text-2xl md:text-5xl font-Font1 md:w-[60%]">
                    Bursa&apos;nın Önde Gelen IT Bakım ve Destek Ekibi
                </h1>
                <p className="leading-7 md:w-[60%]">
                    Bursa merkezli olarak Türkiye genelindeki işletmelere profesyonel IT bakım ve teknik destek hizmetleri sunuyoruz. Sistemlerinizin kesintisiz çalışması için 7/24 yanınızdayız.
                </p>

                {/* Section 2: Hero Image */}
                <div className="w-full relative mt-8">
                    <div className="w-full h-[300px] md:h-[500px] relative">
                        <Image
                            src="/images/support.jpg"
                            alt="Bursa IT Bakım ve Teknik Destek Hizmetleri"
                            fill
                            className="object-cover rounded-2xl shadow-xl"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </div>

                {/* Section 3: Why Choose Us */}
                <div className="mt-12">
                    <h1 className="my-8 text-2xl md:text-5xl font-Font1">
                        Neden Bizimle Çalışmalısınız?
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-3xl font-Font1">1. Kapsamlı IT Bakım Hizmetleri</h2>
                            <p className="text-sm md:text-base my-4">
                                Bursa&apos;da sunduğumuz bakım hizmetleri:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Düzenli yazılım güncelleme ve yama yönetimi</li>
                                <li>Donanım bakımı ve performans optimizasyonu</li>
                                <li>Proaktif sistem izleme ve sorun önleme</li>
                                <li>Bursa&apos;daki işletmelere özel bakım planları</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-3xl font-Font1">2. Güvenilir Teknik Destek</h2>
                            <p className="text-sm md:text-base my-4">
                                Türkiye genelinde sağladığımız destek:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>7/24 acil teknik destek hattı</li>
                                <li>Hızlı müdahale ve sorun çözümü</li>
                                <li>Uzaktan erişim ile anında destek</li>
                                <li>Yerinde teknik servis hizmetleri</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 4: Key Services */}
                <div className="mt-12">
                    <h1 className="my-8 text-2xl md:text-5xl font-Font1">
                        Temel Hizmetlerimiz
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-2xl font-Font1">Sistem Bakımı</h2>
                            <ul className="list-disc pl-6 mt-4">
                                <li>Düzenli sistem denetimleri</li>
                                <li>Yazılım güncelleme yönetimi</li>
                                <li>Sunucu ve ağ altyapısı bakımı</li>
                                <li>Bursa&apos;daki firmalar için özel bakım paketleri</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-2xl font-Font1">Teknik Destek</h2>
                            <ul className="list-disc pl-6 mt-4">
                                <li>7/24 teknik destek hattı</li>
                                <li>Uzaktan ve yerinde destek seçenekleri</li>
                                <li>Acil müdahale ekipleri</li>
                                <li>Türkiye geneli servis ağı</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-2xl font-Font1">Danışmanlık</h2>
                            <ul className="list-disc pl-6 mt-4">
                                <li>IT altyapı danışmanlığı</li>
                                <li>Olağanüstü durum kurtarma planlaması</li>
                                <li>İş sürekliliği çözümleri</li>
                                <li>Bursa sanayisine özel IT stratejileri</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 5: Call to Action */}
                <div className="mt-12 text-center">
                    <h1 className="text-2xl md:text-5xl font-Font1">
                        Sistemleriniz Profesyonel Ellerde Emin Olsun!
                    </h1>
                    <p className="md:w-[60%] mx-auto my-6">
                        Bursa ve Türkiye&apos;nin güvenilir IT destek ekibiyle çalışmak için hemen iletişime geçin. Kesintisiz iş operasyonları için profesyonel çözümler sunuyoruz.
                    </p>
                    <Link
                        href="/bursa-web-tasarim-iletisim"
                        className="bg-black text-white px-8 py-3 rounded-3xl font-Font1 hover:bg-gray-800 transition-all"
                    >
                        Ücretsiz Danışmanlık Alın
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default BakimDestekHizmetleri;