import Layout from '@/layout/index';
import Image from 'next/image';
import Link from 'next/link';

const Strategy = () => {
    return (
        <Layout
            title="İçerik Üretim Stratejisi Hizmetleri | Güvenilir Dijital Ortağınız"
            description="Markanızı uzman içerik stratejilerimizle zirveye taşıyın. Hedef kitlenizi etkileyen, veriye dayalı içerikler üreterek işletmenizin büyümesini sağlıyoruz."
            keywordContent="içerik üretim stratejisi, içerik pazarlama, dijital içerik stratejisi, içerik planlama, SEO uyumlu içerik, marka hikayesi, sosyal medya içeriği, içerik optimizasyonu, içerik danışmanlığı, Türkiye içerik stratejisi"
        >
            <div className="w-full max-w-screen-xl mx-auto mt-12 px-3 py-24">
                {/* Bölüm 1: Giriş */}
                <span className="font-Font1 text-black px-3 py-1 rounded-2xl border-x-1 border-y-2 border-gray-200 bg-blue-50 text-base md:text-sm">
                    İçerik Üretim Stratejisi
                </span>
                <h1 className="my-12 text-2xl md:text-5xl font-Font1 md:w-[60%]">
                    Uzman İçerik Üretim Stratejisi Hizmetleri
                </h1>
                <p className="leading-7 md:w-[60%]">
                    İçerik stratejisi konusunda öncü bir hizmet sağlayıcı olarak, işletmelerin dikkat çeken, veriye dayalı içerikler üretmesine yardımcı oluyoruz. Özgün stratejilerimizle markanız dijital dünyada fark yaratır.
                </p>

                {/* Bölüm 2: Görsel */}
                <div className="w-full relative mt-8">
                    <div className="w-full h-[300px] md:h-[500px] relative">
                        <Image
                            src="/images/content-strategy.jpg"
                            alt="Uzman İçerik Üretim Stratejisi Hizmetleri"
                            fill
                            className="object-cover rounded-2xl shadow-xl"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </div>

                {/* Bölüm 3: Neden Bizi Tercih Etmelisiniz */}
                <div className="mt-12">
                    <h1 className="my-8 text-2xl md:text-5xl font-Font1">
                        Neden İçerik Stratejisi Hizmetlerimizi Tercih Etmelisiniz?
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-3xl font-Font1">1. Veriye Dayalı Stratejiler</h2>
                            <p className="text-sm md:text-base my-4">
                                Stratejilerimiz şu temellere dayanır:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Derinlemesine hedef kitle araştırması</li>
                                <li>SEO odaklı içerik planlaması</li>
                                <li>Performans takibi ve optimizasyon</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-3xl font-Font1">2. Yaratıcı Hikaye Anlatımı</h2>
                            <p className="text-sm md:text-base my-4">
                                Uzmanlık alanlarımız:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Marka hikayeleri oluşturma</li>
                                <li>Etkileyici sosyal medya içerikleri</li>
                                <li>Görsel ve multimedya anlatımı</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bölüm 4: Ana Hizmetler */}
                <div className="mt-12">
                    <h1 className="my-8 text-2xl md:text-5xl font-Font1">
                        Temel İçerik Stratejisi Hizmetlerimiz
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-2xl font-Font1">İçerik Planlama</h2>
                            <ul className="list-disc pl-6 mt-4">
                                <li>Hedef kitle araştırması ve persona oluşturma</li>
                                <li>İçerik takvimi hazırlama</li>
                                <li>SEO uyumlu içerik haritalama</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-2xl font-Font1">İçerik Üretimi</h2>
                            <ul className="list-disc pl-6 mt-4">
                                <li>Blog yazıları, makaleler ve raporlar</li>
                                <li>Sosyal medya içerikleri ve kampanyaları</li>
                                <li>Video ve multimedya içerik üretimi</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-2xl font-Font1">İçerik Optimizasyonu</h2>
                            <ul className="list-disc pl-6 mt-4">
                                <li>SEO ve anahtar kelime optimizasyonu</li>
                                <li>Performans analizleri ve raporlama</li>
                                <li>İçerik A/B testleri ve iyileştirme</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bölüm 5: Çağrı */}
                <div className="mt-12 text-center">
                    <h1 className="text-2xl md:text-5xl font-Font1">
                        İçerik Stratejinizi Bugün Güçlendirin!
                    </h1>
                    <p className="md:w-[60%] mx-auto my-6">
                        İçerik stratejinizi dönüştürmeye ve kitlenizle daha güçlü bağlar kurmaya hazır mısınız? Uzman ekibimizle tanışın, markanızı bir adım öne taşıyın.
                    </p>
                    <Link href="/bursa-web-tasarim-iletisim" className="bg-black text-white px-8 py-3 rounded-3xl font-Font1 hover:bg-gray-800 transition-all">
                        Bize Ulaşın
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default Strategy;
