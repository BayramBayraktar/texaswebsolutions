import Layout from '@/layout/index';
import Image from 'next/image';
import Link from 'next/link';


const SeoDigitalMarketing = () => {
    return (
        <Layout
            title="Bursa SEO & Dijital Pazarlama Hizmetleri | Güvenilir Dijital İş Ortağınız"
            description="Uzman SEO ve dijital pazarlama hizmetlerimizle çevrimiçi görünürlüğünüzü artırın. Her boyuttaki işletme için özel arama motoru optimizasyonu, sosyal medya pazarlaması, içerik stratejisi ve tıklama başına ödeme kampanyaları sunuyoruz."
            keywordContent="bursa seo hizmetleri, bursa dijital pazarlama ajansı, bursa yerel seo hizmetleri, türkiye sosyal medya pazarlaması, içerik pazarlama stratejisi bursa, PPC yönetimi, arama motoru optimizasyonu bursa, çevrimiçi pazarlama hizmetleri, dijital reklam bursa, seo danışmanı türkiye"
        >
            <div className="w-full max-w-screen-xl mx-auto mt-12 px-3 py-24">
                {/* Section 1: Introduction */}
                <span className="font-Font1 text-black px-3 py-1 rounded-2xl border-x-1 border-y-2 border-gray-200 bg-blue-50 text-base md:text-sm">
                    SEO & Dijital Pazarlama Hizmetleri
                </span>
                <h1 className="my-12 text-2xl md:text-5xl font-Font1 md:w-[60%]">
                    Bursa&apos;da Uzman SEO & Dijital Pazarlama Hizmetleri
                </h1>
                <p className="leading-7 md:w-[60%]">
                    Önde gelen bir dijital pazarlama ajansı olarak, gerçek iş sonuçları sağlayan kapsamlı SEO ve pazar analizi hizmetleri sunuyoruz. Özel dijital pazarlama çözümlerimiz, çevrimiçi varlığınızı güçlendirmek ve tüm büyük platformlardaki arama sıralamalarınızı iyileştirmek için tasarlanmıştır.
                </p>

                {/* Section 2: Hero Image */}
                <div className="w-full relative mt-8">
                    <div className="w-full h-[300px] md:h-[500px] relative">
                        <Image
                            src="/images/seodetailpage.jpg"
                            alt="Bursa'da Uzman SEO ve Dijital Pazarlama Hizmetleri"
                            fill
                            className="object-cover rounded-2xl shadow-xl"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </div>

                {/* Section 3: Why Choose Us */}
                <div className="mt-12">
                    <h1 className="my-8 text-2xl md:text-5xl font-Font1">
                        Neden Dijital Pazarlama Hizmetlerimizi Tercih Etmelisiniz?
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-3xl font-Font1">1. Özel Dijital Pazarlama Stratejileri</h2>
                            <p className="text-sm md:text-base my-4">
                                Bursa&apos;nın önde gelen dijital pazarlama ajansı olarak şunlarda uzmanlaşıyoruz:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>İhtiyaçlarınıza özel dijital pazarlama stratejileri</li>
                                <li>Gelişmiş arama görünürlüğü için kapsamlı SEO hizmetleri</li>
                                <li>Veri odaklı pazar analizi ve performans takibi</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-3xl font-Font1">2. En İyi SEO Hizmetleri</h2>
                            <p className="text-sm md:text-base my-4">
                                SEO hizmet tekliflerimiz şunları içerir:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Daha yüksek arama sıralamaları için özel SEO stratejileri</li>
                                <li>Daha iyi website performansı için teknik SEO optimizasyonu</li>
                                <li>Bursa ve çevresinde pazar alanınızda öne çıkmanızı sağlayan yerel SEO hizmetleri</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 4: Key Services */}
                <div className="mt-12">
                    <h1 className="my-8 text-2xl md:text-5xl font-Font1">
                        Temel Dijital Pazarlama Hizmetlerimiz
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-2xl font-Font1">SEO Hizmetleri</h2>
                            <ul className="list-disc pl-6 mt-4">
                                <li>Daha iyi sıralamalar için gelişmiş SEO stratejileri</li>
                                <li>Yerel pazarda öne çıkmak için yerel SEO optimizasyonu</li>
                                <li>Website performansı için teknik SEO iyileştirmeleri</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-2xl font-Font1">Dijital Pazarlama Stratejisi</h2>
                            <ul className="list-disc pl-6 mt-4">
                                <li>Özel dijital pazarlama planları</li>
                                <li>Pazar analizi ve rakip araştırması</li>
                                <li>ROI odaklı pazarlama kampanyaları</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h2 className="text-xl md:text-2xl font-Font1">Pazarlama Analitiği & Raporlama</h2>
                            <ul className="list-disc pl-6 mt-4">
                                <li>Kapsamlı pazar performans takibi</li>
                                <li>Dijital pazarlama ROI analizi</li>
                                <li>Özel raporlama ve içgörüler</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 5: Call to Action */}
                <div className="mt-12 text-center">
                    <h1 className="text-2xl md:text-5xl font-Font1">
                        Dijital Başarınız İçin Bugün Başlayın!
                    </h1>
                    <p className="md:w-[60%] mx-auto my-6">
                        Dijital varlığınızı dönüştürmeye hazır mısınız? Bursa&apos;nın en iyi dijital pazarlama ajansı size yardımcı olmak için burada. Özel SEO ve dijital pazarlama hizmetlerimizin işletmenizin büyümesini nasıl hızlandırabileceğini görüşmek için bugün bizimle iletişime geçin!
                    </p>
                    <Link href="/bursa-web-tasarim-iletisim" className="bg-black text-white px-8 py-3 rounded-3xl font-Font1 hover:bg-gray-800 transition-all">
                        Bizimle İletişime Geçin
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default SeoDigitalMarketing;