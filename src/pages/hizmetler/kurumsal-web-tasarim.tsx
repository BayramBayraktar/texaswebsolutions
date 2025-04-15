import Layout from '@/layout/index';
import Image from 'next/image';
import Link from 'next/link';

const KurumsalYazilimCozumleri = () => {
    return (
        <Layout
            title="Bursa Kurumsal Web Tasarım & Yazılım Çözümleri | Profesyonel Dijital Ajans"
            description="Bursa merkezli kurumsal web tasarım ve özel yazılım geliştirme hizmetleri. Türkiye genelinde işletmelere profesyonel dijital çözümler sunuyoruz."
            keywordContent="Bursa web tasarım, kurumsal yazılım çözümleri, özel yazılım geliştirme, Bursa dijital ajans, kurumsal web sitesi, Bursa yazılım şirketi, ERP yazılımı, CRM çözümleri, e-ticaret yazılımı, Türkiye yazılım geliştirme"
        >
            <div className="w-full max-w-screen-xl mx-auto mt-12 px-3 py-24">
                {/* Section 1: Introduction */}
                <span className="font-Font1 text-black px-3 py-1 rounded-2xl border-x-1 border-y-2 border-gray-200 bg-blue-50 text-base md:text-sm">
                    Bursa da Profesyonel Çözümler
                </span>
                <h1 className="my-12 text-2xl md:text-5xl font-Font1 md:w-[60%]">
                    Bursa nın Öncü Kurumsal Yazılım & Web Tasarım Ekibi
                </h1>
                <p className="leading-7 md:w-[60%]">
                    Bursa merkezli olarak Türkiye genelindeki işletmelere özel yazılım çözümleri ve kurumsal web tasarım hizmetleri sunuyoruz. İş süreçlerinizi dijitalleştirerek verimliliğinizi artırıyoruz.
                </p>

                {/* Section 2: Hero Image */}
                <div className="w-full relative mt-8">
                    <div className="w-full h-[300px] md:h-[500px] relative">
                        <Image
                            src="/images/CustomSoftwareSolutionsdetayl.jpg"
                            alt="Bursa Kurumsal Web Tasarım ve Yazılım Çözümleri"
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
                            <h2 className="text-xl md:text-3xl font-Font1">1. Kurumsal Web Tasarım Uzmanlığı</h2>
                            <p className="text-sm md:text-base my-4">
                                Bursa da sunduğumuz profesyonel web tasarım hizmetleri:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Kurumsal kimliğinize uygun modern tasarımlar</li>
                                <li>Mobil uyumlu (responsive) web siteleri</li>
                                <li>Arama motoru optimizasyonu (SEO) uyumlu yapı</li>
                                <li>Bursa daki sektörünüze özel çözümler</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-3xl font-Font1">2. Özel Yazılım Geliştirme</h2>
                            <p className="text-sm md:text-base my-4">
                                Türkiye genelinde verdiğimiz yazılım hizmetleri:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Kurumsal ERP ve CRM sistemleri</li>
                                <li>İş süreçlerinize özel yazılım çözümleri</li>
                                <li>Bulut tabanlı yazılım geliştirme</li>
                                <li>Mobil uygulama geliştirme</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 4: Key Services */}
                <div className="mt-12">
                    <h1 className="my-8 text-2xl md:text-5xl font-Font1">
                        Bursa ve Türkiye ye Özel Hizmetlerimiz
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-2xl font-Font1">Kurumsal Web Tasarım</h2>
                            <ul className="list-disc pl-6 mt-4">
                                <li>Bursa ya özel kurumsal web sitesi tasarımı</li>
                                <li>Sektörel web tasarım çözümleri</li>
                                <li>WordPress ve özel CMS sistemleri</li>
                                <li>Türkiye SEO uyumlu web tasarım</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-2xl font-Font1">Yazılım Geliştirme</h2>
                            <ul className="list-disc pl-6 mt-4">
                                <li>Bursa daki fabrikalar için ERP çözümleri</li>
                                <li>Perakende sektörüne özel POS yazılımları</li>
                                <li>Türkiye de kullanılan muhasebe entegrasyonları</li>
                                <li>E-ticaret yazılım geliştirme</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-2xl font-Font1">Dijital Dönüşüm</h2>
                            <ul className="list-disc pl-6 mt-4">
                                <li>İşletmenizin dijital dönüşüm süreçleri</li>
                                <li>Bursa sanayi için IoT çözümleri</li>
                                <li>Yapay zeka destekli yazılımlar</li>
                                <li>Büyük veri analiz sistemleri</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 5: Call to Action */}
                <div className="mt-12 text-center">
                    <h1 className="text-2xl md:text-5xl font-Font1">
                        Kurumsal Dijital Çözümlerle Fark Yaratın!
                    </h1>
                    <p className="md:w-[60%] mx-auto my-6">
                        Bursa ve Türkiye genelindeki işletmeler için profesyonel web tasarım ve yazılım çözümleri sunuyoruz. Dijital dönüşüm yolculuğunuzda yanınızdayız!
                    </p>
                    <Link href="/bursa-web-tasarim-iletisim" className="bg-black text-white px-8 py-3 rounded-3xl font-Font1 hover:bg-gray-800 transition-all">
                        Ücretsiz Danışmanlık Alın
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default KurumsalYazilimCozumleri;