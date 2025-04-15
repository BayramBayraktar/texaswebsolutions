import React from 'react';
import Link from 'next/link';
import Layout from '@/layout/index';
import Image from 'next/image';

import Reviews from '@/components/reviews'
import Portofolio from '@/components/weCreated'

const Service = () => {
    return (
        <Layout
            title="Bursa'da Uzman Web Tasarım & Geliştirme Hizmetleri | Güvenilir Dijital Çözüm Ortağınız"
            description="Bursa ve tüm Türkiye'de özel web geliştirme, duyarlı tasarım, e-ticaret çözümleri ve SEO optimizasyonu dahil kapsamlı web hizmetlerimizi keşfedin. Profesyonel web hizmetlerimizle işletmenizi dönüştürün."
            keywordContent="bursa web tasarım hizmetleri, bursa web sitesi geliştirme, türkiye e-ticaret geliştirme, bursa responsive web tasarım, bursa seo hizmetleri, web bakım hizmetleri türkiye, özel web çözümleri bursa, işletme web sitesi hizmetleri bursa, profesyonel web ajansı bursa, web danışmanlık hizmetleri türkiye"
        >
            <div className='w-full max-w-screen-xl mx-auto mt-12 px-3 py-24'>
                <span className='font-Font1 text-black px-3 py-1 rounded-2xl border-x-1 border-y-2 text-xl md:text-sm border-[rgba(126,214,223,.25)] bg-[rgba(126,214,233,.15)]'>
                    Hizmetlerimiz
                </span>
                <h1 className='my-12 md:w-[60%] font-Font1 text-2xl md:text-6xl'>
                    Bursa da Başarınızı Kolaylaştıran Hizmetlerimizi Keşfedin
                </h1>
                <p className='leading-7 md:w-[60%]'>
                    {"Bursa ve Türkiye genelindeki işletmeler için özel olarak tasarlanmış uzman web tasarımı, SEO optimizasyonu ve web geliştirme hizmetlerimizle çevrimiçi varlığınızı dönüştürün. Benzersiz ihtiyaçlarınızı karşılamak için tasarlanmış hızlı, duyarlı ve kullanıcı dostu web siteleri oluşturuyoruz. Arama motorlarında görünürlüğünüzü artırın ve işinizi en son teknoloji çözümlerimizle büyütün. Birlikte harika bir şeyler inşa edelim."}
                </p>

                <div className='w-full mt-8 grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {/* Web Tasarım & Geliştirme */}
                    <div className='bg-[rgb(247,247,247)] flex flex-col justify-between hover:bg-[rgb(237,250,250)] p-6 shadow-lg overflow-hidden rounded-2xl'>
                        <div className='relative w-full h-[320px]'>
                            <Image
                                src="/images/webdesigner.jpg"
                                alt="Bursa'da Web Tasarım & Geliştirme"
                                fill
                                className='object-cover rounded-2xl'
                            />
                        </div>
                        <div className='mt-4 flex flex-col justify-between'>
                            <h1 className='text-2xl'>Web Tasarım & Geliştirme</h1>
                            <p className='text-sm opacity-80 my-2'>
                                Bursa daki her ölçekteki işletme için güçlü bir çevrimiçi varlık ve sorunsuz kullanıcı deneyimi sağlayan özel, duyarlı ve kullanıcı dostu web siteleri oluşturuyoruz.
                            </p>
                            <Link href={"/hizmetler/web-tasarim-gelistirme-hizmeti"} className='py-3 text-sm block rounded-2xl mt-4 bg-black text-white text-center hover:bg-gray-800 transition-all'>
                                Daha Fazla Bilgi
                            </Link>
                        </div>
                    </div>

                    {/* SEO & Dijital Pazarlama */}
                    <div className='bg-[rgb(247,247,247)] flex flex-col justify-between hover:bg-[rgb(237,250,250)] p-6 shadow-lg overflow-hidden rounded-2xl'>
                        <div className='relative w-full h-[320px]'>
                            <Image
                                src="/images/seoMarketing.png"
                                alt="Bursa'da SEO & Dijital Pazarlama"
                                fill
                                className='object-cover rounded-2xl'
                            />
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-2xl'>SEO & Dijital Pazarlama</h1>
                            <p className='text-sm opacity-80 my-2'>
                                Bursa pazarı için özel olarak tasarlanmış SEO stratejilerimiz, yerel optimizasyon ve veri odaklı dijital pazarlama çözümlerimizle arama sıralamalarınızı yükseltin ve daha fazla müşteri çekin.
                            </p>
                            <Link href={"/hizmetler/seo-dijital-pazarlama"} className='py-3 block text-sm rounded-2xl mt-4 bg-black text-white text-center hover:bg-gray-800 transition-all'>
                                Daha Fazla Bilgi
                            </Link>
                        </div>
                    </div>

                    {/* E-Ticaret Geliştirme */}
                    <div className='bg-[rgb(247,247,247)] flex flex-col justify-between hover:bg-[rgb(237,250,250)] p-6 shadow-lg overflow-hidden rounded-2xl'>
                        <div className='relative w-full h-[320px]'>
                            <Image
                                src="/images/eCommerce.png"
                                alt="Bursa'da E-Ticaret Geliştirme"
                                fill
                                className='object-cover rounded-2xl'
                            />
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-2xl'>E-Ticaret Geliştirme</h1>
                            <p className='text-sm opacity-80 my-2'>
                                Bursa daki işletmeler için özel olarak tasarlanmış, güvenli ödeme entegrasyonu, mobil uyumlu tasarımlar ve gelişmiş ürün yönetimi içeren uzman e-ticaret geliştirme hizmetimizle çevrimiçi mağazanızı başlatın ve büyütün.
                            </p>
                            <Link href={"/hizmetler/e-ticaret-gelistirme"} className='py-3 text-sm block rounded-2xl mt-4 bg-black text-white text-center hover:bg-gray-800 transition-all'>
                                Daha Fazla Bilgi
                            </Link>
                        </div>
                    </div>

                    {/* Özel Yazılım Çözümleri */}
                    <div className='bg-[rgb(247,247,247)] flex flex-col justify-between hover:bg-[rgb(237,250,250)] p-6 shadow-lg overflow-hidden rounded-2xl'>
                        <div className='relative w-full h-[320px]'>
                            <Image
                                src="/images/Customsoftwaresolutions.jpg"
                                alt="Bursa'da Kururmsal web tasarım"
                                fill
                                className='object-cover rounded-2xl'
                            />
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-2xl'>Kurumsal Web Tasarım</h1>
                            <p className='text-sm opacity-80 my-2'>
                                İşletmenizin ihtiyaçlarına göre ölçeklenebilir ve yüksek performanslı yazılımlar geliştirerek Bursa daki operasyonlarınızı kolaylaştırmanıza ve sektörünüzde öne çıkmanıza yardımcı oluyoruz.
                            </p>
                            <Link href={"/hizmetler/kurumsal-web-tasarim"} className='py-3 text-sm block rounded-2xl mt-4 bg-black text-white text-center hover:bg-gray-800 transition-all'>
                                Daha Fazla Bilgi
                            </Link>
                        </div>
                    </div>

                    {/* Web Bakım & Destek */}
                    <div className='bg-[rgb(247,247,247)] flex flex-col justify-between hover:bg-[rgb(237,250,250)] p-6 shadow-lg overflow-hidden rounded-2xl'>
                        <div className='relative w-full h-[320px]'>
                            <Image
                                src="/images/webMaintenance.jpg"
                                alt="Bursa'da Web Bakım & Destek"
                                fill
                                className='object-cover rounded-2xl'
                            />
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-2xl'>Web Bakım & Destek</h1>
                            <p className='text-sm opacity-80 my-2'>
                                Kapsamlı bakım ve destek hizmetlerimizle web sitenizin sorunsuz çalışmasını sağlayın. Güncellemelerden güvenlik yamalarına kadar, sitenizin güvenli ve güncel kalmasını sağlıyoruz.
                            </p>
                            <Link href={"/hizmetler/web-bakim-destek"} className='py-3 text-sm block rounded-2xl mt-4 bg-black text-white text-center hover:bg-gray-800 transition-all'>
                                Daha Fazla Bilgi
                            </Link>
                        </div>
                    </div>

                    {/* İçerik Oluşturma & Strateji */}
                    <div className='bg-[rgb(247,247,247)] flex flex-col justify-between hover:bg-[rgb(237,250,250)] p-6 shadow-lg overflow-hidden rounded-2xl'>
                        <div className='relative w-full h-[320px]'>
                            <Image
                                src="/images/contentCreation.jpg"
                                alt="Bursa'da İçerik Oluşturma & Strateji"
                                fill
                                className='object-cover rounded-2xl'
                            />
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-2xl'>İçerik Oluşturma & Strateji</h1>
                            <p className='text-sm opacity-80 my-2'>
                                Markanıza özel yüksek kaliteli içeriklerle hedef kitlenizi etkileyin. İçerik oluşturma ve strateji hizmetlerimiz, müşterilerinizle bağlantı kurmanıza ve dönüşümleri artırmanıza yardımcı olur.
                            </p>
                            <Link href={"/hizmetler/icerik-olusturma-strateji"} className='py-3 text-sm block rounded-2xl mt-4 bg-black text-white text-center hover:bg-gray-800 transition-all'>
                                Daha Fazla Bilgi
                            </Link>
                        </div>
                    </div>
                </div>
                <Portofolio />
            </div>
            <Reviews />
        </Layout>
    );
};

export default Service;