import Layout from '@/layout/index';
import Image from 'next/image';
import Link from 'next/link';

const ServiceDetail = () => {
    return (
        <Layout
            title="Bursa'da Profesyonel Web Tasarım & Geliştirme Hizmetleri | Güvenilir Dijital İş Ortağınız"
            description="Bursa'da en iyi web tasarım ve geliştirme hizmetleri sunuyoruz. Her boyuttaki işletme için özel, duyarlı ve yüksek performanslı web siteleri oluşturuyoruz. Çevrimiçi varlığınızı bizimle güçlendirin!"
            keywordContent="bursa web tasarım hizmetleri, bursa web geliştirme hizmetleri, özel website tasarımı bursa, küçük işletme web geliştirme türkiye, profesyonel web tasarım bursa, seo optimizasyonlu websitesi bursa, e-ticaret geliştirme türkiye"
        >
            <div className="w-full max-w-screen-xl mx-auto mt-12 px-3 py-24">
                {/* Section 1: Introduction */}
                <span className="font-Font1 text-black px-3 py-1 rounded-2xl border-x-1 border-y-2 text-base md:text-sm border-[rgba(126,214,223,.25)] bg-[rgba(126,214,233,.15)]">
                    Web Tasarım & Geliştirme Hizmeti
                </span>
                <h1 className="my-12 text-2xl md:text-5xl font-Font1 md:w-[60%]">
                    Bursa&apos;da Profesyonel Web Tasarım & Geliştirme Hizmetleri
                </h1>
                <p className="leading-7 w-full md:w-[60%]">
                    Günümüz dijital dünyasında, profesyonel olarak tasarlanmış bir web sitesine sahip olmak işletme büyümesi için vazgeçilmezdir. Web tasarım ve geliştirme hizmetlerimiz, kullanıcı deneyimini artıran ve dönüşümleri artıran özel, yüksek performanslı web siteleri oluşturmaya odaklanır. İster bir startup, ister kurulu bir şirket, ister bir ajans olun, Bursa ve tüm Türkiye&apos;de ihtiyaçlarınızı karşılayacak özel çözümler sunuyoruz.
                </p>

                {/* Section 2: Hero Image */}
                <div className="w-full relative mt-8">
                    <div className="w-full h-[300px] md:h-[500px] relative">
                        <Image
                            src="/images/designservice.jpg"
                            alt="Bursa'da Web Tasarım ve Geliştirme Hizmetleri"
                            fill
                            className="object-cover rounded-2xl shadow-xl"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </div>

                {/* Section 3: Why Choose Us */}
                <div className="mt-12">
                    <h1 className="my-8 text-2xl md:text-5xl font-Font1">
                        Neden Bursa&apos;daki Web Tasarım & Geliştirme Hizmetlerimizi Tercih Etmelisiniz?
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-[rgba(126,214,233,.15)] p-6 rounded-2xl">
                            <h2 className="text-xl md:text-3xl font-Font1">1. Özel Web Tasarım & Geliştirme</h2>
                            <p className="text-sm md:text-base my-4">
                                Bursa&apos;nın önde gelen web geliştirme şirketi olarak, işletme hedeflerinizle uyumlu özel çözümlerde uzmanlaşıyoruz. Uzmanlık alanlarımız şunları içerir:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Markanıza özel web sitesi tasarımı</li>
                                <li>Sorunsuz performans için üst düzey web geliştirme</li>
                                <li>Arama sıralamalarını artırmak için SEO optimize edilmiş web siteleri</li>
                            </ul>
                        </div>
                        <div className="bg-[rgba(126,214,233,.15)] p-6 rounded-2xl">
                            <h2 className="text-xl md:text-3xl font-Font1">2. Kapsamlı Geliştirme Çözümleri</h2>
                            <p className="text-sm md:text-base my-4">
                                Hizmetlerimiz Türkiye&apos;deki her boyuttaki işletmeye hitap eder. İster kurumsal bir web sitesi, ister e-ticaret platformu, ister yazılım geliştirme ihtiyacınız olsun, sorunsuz ve verimli bir süreç sağlıyoruz.
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Benzersiz işletme ihtiyaçları için özel web geliştirme</li>
                                <li>En son teknolojilerle tam yığın geliştirme</li>
                                <li>Büyümeyi destekleyecek ölçeklenebilir yazılım çözümleri</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 4: Key Services */}
                <div className="mt-12">
                    <h1 className="my-8 text-2xl md:text-5xl font-Font1">
                        Bursa&apos;da Sunduğumuz Temel Hizmetler
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-[rgba(126,214,233,.15)] p-6 rounded-2xl">
                            <h2 className="text-xl md:text-2xl font-Font1">Website Geliştirme</h2>
                            <ul className="list-disc pl-6 mt-4">
                                <li>Özel web sitesi geliştirme</li>
                                <li>SEO dostu geliştirme</li>
                                <li>E-ticaret çözümleri</li>
                            </ul>
                        </div>
                        <div className="bg-[rgba(126,214,233,.15)] p-6 rounded-2xl">
                            <h2 className="text-xl md:text-2xl font-Font1">Web Tasarım</h2>
                            <ul className="list-disc pl-6 mt-4">
                                <li>Profesyonel web tasarımı</li>
                                <li>Kullanıcı odaklı UI/UX tasarımı</li>
                                <li>Tüm cihazlar için duyarlı tasarım</li>
                            </ul>
                        </div>
                        <div className="bg-[rgba(126,214,233,.15)] p-6 rounded-2xl">
                            <h2 className="text-xl md:text-2xl font-Font1">SEO & Dijital Pazarlama</h2>
                            <ul className="list-disc pl-6 mt-4">
                                <li>SEO optimizasyonu</li>
                                <li>Dijital pazarlama stratejileri</li>
                                <li>Pazar analizi ve danışmanlık</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 5: Call to Action */}
                <div className="mt-12 text-center">
                    <h1 className="text-2xl md:text-5xl font-Font1">
                        Bugün Başlayın!
                    </h1>
                    <p className="md:w-[60%] mx-auto my-6">
                        Bursa&apos;daki en iyi web tasarım ve geliştirme hizmetlerini mi arıyorsunuz? Ekibimiz vizyonunuzu gerçeğe dönüştürmek için burada. Bugün bizimle iletişime geçin ve olağanüstü bir çevrimiçi varlık için ilk adımı atın!
                    </p>
                    <Link href="/bursa-web-tasarim-iletisim" className="bg-black text-white px-8 py-3 rounded-3xl font-Font1 hover:bg-gray-800 transition-all">
                        Bizimle İletişime Geçin
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default ServiceDetail;