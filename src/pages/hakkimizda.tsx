import React from 'react';
import Layout from '../layout/index';
import WeCreatedSlider from '@/components/weCreated';
import Image from 'next/image';
import Link from 'next/link';
import Reviews from '@/components/reviews'

const About = () => {
    return (
        <Layout
            title="Bursa Web Tasarım Ajansı | Profesyonel Dijital Çözümler | Şirket Adı"
            description="Bursa'nın önde gelen web tasarım ve dijital çözümler ajansıyız. Mobil uyumlu, SEO dostu web siteleri ve e-ticaret çözümleriyle işletmenizi dijital dünyada öne çıkarıyoruz."
            keywordContent="Bursa web tasarım, Bursa dijital ajans, Bursa SEO, profesyonel web sitesi, e-ticaret çözümleri Bursa, Bursa kurumsal web tasarım"
        >
            <div className='w-full max-w-screen-xl mx-auto px-3 md:py-24'>
                {/* Bölüm 1: Tanıtım */}
                <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-8'>
                    <div className='my-12 md:my-24 md:w-[55%]'>
                        <span className='font-Font1 text-black px-3 py-1 rounded-2xl border-x-1 border-y-2 text-2xl md:text-sm border-[rgba(126,214,223,.25)] bg-[rgba(126,214,233,.15)]'>
                            Hakkımızda
                        </span>
                        <h1 className='my-8 text-3xl md:text-5xl font-Font1'>
                            Bursa nın Öncü Web Tasarım ve Dijital Çözümler Ajansı
                        </h1>
                        <p className='leading-7 text-gray-700'>
                            Bursa merkezli ajansımız, işletmelerin dijital dünyada güçlü bir varlık göstermesi için profesyonel çözümler sunuyor. Özel tasarım web siteleri, SEO optimizasyonu ve e-ticaret çözümleriyle Bursa nın yerel işletmelerini dijital çağa taşıyoruz. Tecrübeli ekibimizle, markanızın ihtiyaçlarına özel çözümler üretiyor ve online görünürlüğünüzü maksimum seviyeye çıkarıyoruz.
                        </p>
                        <div className='mt-6'>
                            <Link href="/bursa-web-tasarim-iletişim" className='bg-black text-white px-8 py-3 rounded-3xl font-Font1 hover:bg-gray-800 transition-all'>
                                Ücretsiz Danışmanlık Alın
                            </Link>
                        </div>
                    </div>

                    <div className='w-full h-[400px] md:h-[500px] relative'>
                        <Image
                            src="/images/about2.jpg"
                            alt='Bursa web tasarım ajansı - Profesyonel dijital çözümler'
                            className='rounded-3xl object-cover shadow-2xl border'
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </div>
                </div>


                {/* Bölüm 2: Neden Biz? */}
                <div className='flex flex-col md:flex-row justify-between items-center gap-8 mt-24'>
                    <div className='w-full h-[400px] md:h-[500px] relative'>
                        <Image
                            src="/images/aboutimage.jpg"
                            alt='Bursa dijital ajans - Neden bizi tercih etmelisiniz?'
                            className='rounded-3xl object-cover shadow-2xl border'
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>

                    <div className='my-12 md:my-24 md:w-[55%]'>
                        <h2 className='font-Font1 mb-4 text-3xl md:text-4xl'>
                            Bursa da Neden Web Tasarım İçin Bizi Tercih Etmelisiniz?
                        </h2>
                        <p className='leading-7 text-gray-700'>
                            Bursa da web tasarım ve dijital çözümler denince akla gelen ilk isim olmamızın birçok nedeni var. Yaratıcı tasarımlarımız, teknik uzmanlığımız ve sektör trendlerine hakimiyetimizle, sadece güzel değil aynı zamanda yüksek performanslı web siteleri geliştiriyoruz. Bursa nın yerel pazar dinamiklerini iyi analiz ederek, işletmenize özel stratejiler belirliyoruz.
                        </p>
                        <ul className='mt-6 list-disc pl-6 text-gray-700'>
                            <li>Bursa nın yerel işletmelerine özel çözümler</li>
                            <li>Google da üst sıralar için SEO optimizasyonu</li>
                            <li>Mobil uyumlu ve hızlı yüklenen tasarımlar</li>
                            <li>Şeffaf fiyat politikası ve kesintisiz destek</li>
                            <li>Bursa da yerel ofis avantajı</li>
                        </ul>
                    </div>
                </div>

                {/* Bölüm 3: Uzmanlık Alanlarımız */}
                <div className='mt-24'>
                    <h2 className='font-Font1 mb-8 text-3xl md:text-4xl text-center'>
                        Bursa da Sunduğumuz Dijital Çözümler
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className='bg-[rgba(126,214,233,.15)] p-6 rounded-2xl'>
                            <h3 className='font-Font1 text-2xl mb-4'>Özel Web Tasarım</h3>
                            <p className='leading-7 text-gray-700'>
                                Bursa daki işletmeniz için tamamen özel tasarlanmış, marka kimliğinize uygun web siteleri geliştiriyoruz. Kullanıcı dostu arayüzler ve etkileyici tasarımlarla dijital varlığınızı güçlendiriyoruz.
                            </p>
                        </div>
                        <div className='bg-[rgba(126,214,233,.15)] p-6 rounded-2xl'>
                            <h3 className='font-Font1 text-2xl mb-4'>E-Ticaret Çözümleri</h3>
                            <p className='leading-7 text-gray-700'>
                                Bursa da online satışlarınızı artıracak profesyonel e-ticaret siteleri tasarlıyoruz. Güvenli ödeme sistemleri, kolay ürün yönetimi ve Bursa ya özel kargo entegrasyonlarıyla e-ticaret sitenizi güçlendiriyoruz.
                            </p>
                        </div>
                        <div className='bg-[rgba(126,214,233,.15)] p-6 rounded-2xl'>
                            <h3 className='font-Font1 text-2xl mb-4'>Bursa SEO Hizmetleri</h3>
                            <p className='leading-7 text-gray-700'>
                                Bursa da Google aramalarında üst sıralara çıkmanız için lokal SEO stratejileri geliştiriyoruz. Bursa web tasarım gibi anahtar kelimelerde sizi öne çıkarıyoruz.
                            </p>
                        </div>
                        <div className='bg-[rgba(126,214,233,.15)] p-6 rounded-2xl'>
                            <h3 className='font-Font1 text-2xl mb-4'>Dijital Pazarlama</h3>
                            <p className='leading-7 text-gray-700'>
                                Bursa daki hedef kitlenize ulaşmak için etkili dijital pazarlama kampanyaları oluşturuyoruz. Sosyal medya yönetimi, Google reklamları ve içerik pazarlamasıyla marka bilinirliğinizi artırıyoruz.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bölüm 4: Eylem Çağrısı */}
                <div className='mt-24 text-center'>
                    <h1 className='text-3xl md:text-5xl font-Font1 mb-8'>
                        Bursa da Dijital Başarı Hikayenize Ortak Olalım
                    </h1>
                    <p className='leading-7 text-gray-700 max-w-2xl mx-auto mb-8'>
                        Dijital varlığınızı güçlendirmeye hazır mısınız? Bursa nın önde gelen web tasarım ajansıyla çalışmanın farkını yaşayın. Siz de yüzlerce mutlu müşterimiz arasına katılın ve işletmenizi dijital dünyada hak ettiği yere taşıyalım.
                    </p>
                    <Link href="/bursa-web-tasarim-iletişim" className='bg-black text-white px-8 py-3 rounded-3xl font-Font1 hover:bg-gray-800 transition-all'>
                        Hemen Teklif Alın
                    </Link>
                </div>

                {/* Slider Bölümü */}
                <WeCreatedSlider />
            </div>
            <Reviews />
        </Layout>
    );
};

export default About;