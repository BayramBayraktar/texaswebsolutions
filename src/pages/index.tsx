"use-client"
import Image from 'next/image'
//components
import Layout from '../layout/'
import WeCreatedSlider from '../components/weCreated'
import Reviews from '../components/reviews';
import LandingDemoSlider from '@/components/landingdemoslider';

export default function Home() {


  return (

    <Layout
      title="Bursa Web Tasarım | Profesyonel Web Sitesi & SEO Çözümleri | Şirket Adı"
      description='Bursa da profesyonel web tasarım ve geliştirme hizmetleri.Mobil uyumlu, hızlı yüklenen ve SEO optimizasyonlu web siteleri ile dijital varlığınızı güçlendirin.'
      keywordContent='Bursa web tasarım, Bursa web sitesi, Bursa SEO, profesyonel web tasarım, e-ticaret sitesi, kurumsal web tasarım, Bursa dijital ajans' >

      <div className='bg-[#032127]'>
        <div className='px-4 max-w-screen-xl mx-auto pt-28 flex items-start'>
          <div className='md:w-[50%] w-full'>
            <span className='font-Font1 text-white px-3 py-1 rounded-2xl border-x-1 border-y-2 text-sm border-[rgba(126,214,223,.25)] bg-[rgba(126,214,233,.15)] animate__animated animate__fadeInDown'>Bursa nın Öncü Web Ajansı</span>

            <h1 className='font-Font1 my-6 text-white md:text-4xl text-2xl w-full max-w-[1200px] mx-auto animate__animated animate__fadeInDown tracking-wide leading-tight'>
              {" Bursa'da Dijital Varlığınızı Güçlendirin: Profesyonel Web Tasarım ile Rakiplerin Önüne Geçin!"}
            </h1>
            <p className='text-white font-sans text-sm md:text-xl max-w-[1200px] mx-auto opacity-95 animate__animated animate__fadeInUp leading-relaxed mb-8'>
              {"Bursa'da işletmeniz için özel tasarlanmış, mobil uyumlu ve SEO dostu web siteleriyle dijital dünyada fark yaratın. Yeni başlayanlar, büyümek isteyenler veya sektör liderliğini korumak isteyenler: Bursa'nın en iyi web tasarım çözümleri burada!"}
            </p>
            <div className="trustpilot-widget" data-locale="tr-TR" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="67ac62b18525b99cf909d19c" data-style-height="52px" data-style-width="100%">
              <a href="https://www.trustpilot.com/review/sirketadiniz.com" target="_blank" rel="noopener">Trustpilot</a>
            </div>
          </div>
          <div className='md:w-[50%] hidden md:block right-0 absolute mt-0 -z-0'>
            <LandingDemoSlider />
          </div>
        </div>
        <div className='md:mt-16 w-[100%] mx-auto md:w-full h-[150px] md:h-[530px] flex justify-center relative animate__animated animate__fadeInUp'>
          <Image layout='fill' objectFit="contain" className='z-20 mt-[50px] md:mt-0' quality={100} src='./images/landingpagegraph.svg' alt='Bursa web tasarım ajansı' />
          <div className="absolute -bottom-24 mb-2 left-0 w-full h-1/2 z-0 bg-white"></div>
          <div className="absolute -bottom-24 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-white z-20"></div>
        </div>
      </div>
      <div className='relative w-full max-w-screen-2xl mx-auto overflow-hidden my-24 '>
        <WeCreatedSlider />
      </div>
      <div className='w-full max-w-screen-xl mx-auto my-24 px-2'>
        <div className='mb-8'>
          <h1 className='text-black text-center text-3xl md:text-6xl'>Neden Bizi Tercih Etmelisiniz?</h1>
          <p className='text-center mt-4 font-semibold font-sans text-sm md:text-base text-gray-500'>Bursa da profesyonel web tasarım, geliştirme ve SEO hizmetleriyle işletmenizi dijital dünyada öne çıkarıyoruz.</p>
        </div>
        <div className='flex flex-col gap-8'>
          <div className='flex md:flex-row  gap-4 md:gap-0 flex-col-reverse p-6 md:p-10 md:pb-0 md:pr-0 bg-cyan-50 rounded-2xl'>
            <div className='w-full max-w-[100%] md:max-w-[50%]'>
              <h2 className='text-black font-semibold font-Font1 text-xl md:text-3xl mb-3'>Bursa ya Özel SEO Optimizasyonu</h2>
              <p className='text-black opacity-80 text-sm md:text-base'>Bursa da faaliyet gösteren işletmeler için lokal SEO stratejileri geliştiriyoruz. Rakipletin önüne geçmek için doğru anahtar kelimelerle markanızı dijital dünyada öne çıkarıyoruz!</p>
            </div>
            <div className='w-full  overflow-hidden'>
              <div className='w-full aspect-video md:rounded-tl-2xl float-none md:mx-0 mx-auto md:float-end shadow-2xl relative'>
                <Image
                  src="/images/grap-1.png"
                  alt='Bursa SEO grafikleri'
                  fill
                  className=''
                />
              </div>
            </div>
          </div>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
            <div className='flex flex-col gap-6 p-10 bg-cyan-100 rounded-2xl'>
              <div className='w-full'>
                <h1 className='text-black font-Font1 text-3xl mb-3'>%100 Güvenli</h1>
                <h1 className='text-black font-Font1 text-xl'>Güvenli ve Stabil Web Siteleri</h1>
                <p className='text-black text-sm my-2'>Bursa da geliştirdiğimiz web siteleri yüksek güvenlik standartlarına sahiptir. Modern teknolojilerle oluşturduğumuz platformlar, siber tehditlere karşı koruma sağlar.</p>
              </div>
            </div>

            <div className='flex flex-col gap-6 p-10 bg-green-200 rounded-2xl'>
              <div className='w-full'>
                <h1 className='text-black font-Font1 text-3xl mb-3'>Özel Tasarım</h1>
                <h1 className='text-black font-Font1 text-xl'>Bursa ya Özel Tasarım Çözümleri</h1>
                <p className='text-black text-sm my-2'>Bursa nın yerel dinamiklerine uygun, işletmenizin ihtiyaçlarına özel tasarımlar geliştiriyoruz. Marka kimliğinize uygun, benzersiz web siteleri oluşturuyoruz.</p>
              </div>
            </div>

            <div className='flex flex-col gap-6 p-10 bg-green-200 rounded-2xl'>
              <div className='w-full'>
                <h1 className='text-black font-Font1 text-3xl mb-3'>Yüksek Hız</h1>
                <h1 className='text-black font-Font1 text-xl'>100/100 PageSpeed Skoru</h1>
                <p className='text-black text-sm my-2'>Bursa da geliştirdiğimiz web siteleri Google ın performans testlerinden tam puan alır. Hızlı yüklenen sitelerle kullanıcı deneyimini maksimuma çıkarıyoruz.</p>
              </div>
            </div>

            <div className='flex flex-col gap-6 p-10 bg-teal-200 rounded-2xl'>
              <div className='w-full'>
                <h1 className='text-black font-Font1 text-3xl mb-3'>Para İade Garantisi</h1>
                <h1 className='text-black font-Font1 text-xl'>Memnuniyet Garantisi</h1>
                <p className='text-black text-sm my-2'>Bursa da hizmet verdiğimiz tüm müşterilerimize memnun kalmazsanız para iade garantisi sunuyoruz. Kaliteye olan inancımızın bir göstergesidir.</p>
              </div>
            </div>

            <div className='flex flex-col gap-6 p-10 bg-teal-200 rounded-2xl'>
              <div className='w-full'>
                <h1 className='text-black font-Font1 text-3xl mb-3'>7/24 Destek</h1>
                <h1 className='text-black font-Font1 text-xl'>Bursa da Yerel Destek</h1>
                <p className='text-black text-sm my-2'>Bursa da ofisimizle size yakınız. Telefon açtığınızda direkt olarak yetkiliyle görüşürsünüz. Robotlarla değil, gerçek insanlarla iletişim kurarsınız.</p>
              </div>
            </div>

            <div className='flex flex-col gap-6 p-10 bg-green-200 rounded-2xl'>
              <div className='w-full'>
                <h1 className='text-black font-Font1 text-3xl mb-3'>SEO Uzmanlığı</h1>
                <h1 className='text-black font-Font1 text-xl'>Bursa da SEO Çözümleri</h1>
                <p className='text-black text-sm my-2'>Bursa da Google aramalarında üst sıralara çıkmanız için etkili SEO stratejileri geliştiriyoruz. Şeffaf raporlama ile çalışmalarımızı takip edebilirsiniz.</p>
              </div>
            </div>

            <div className='flex flex-col gap-6 p-10 bg-purple-100 rounded-2xl'>
              <div className='w-full'>
                <h1 className='text-black font-Font1 text-3xl mb-3'>Mobil Uyum</h1>
                <h1 className='text-black font-Font1 text-xl'>Tüm Cihazlarda Mükemmel Görünüm</h1>
                <p className='text-black text-sm my-2'>Bursa da geliştirdiğimiz web siteleri tüm cihazlarda kusursuz çalışır. Mobil-first yaklaşımıyla akıllı telefon ve tabletlerde mükemmel kullanıcı deneyimi sunar.</p>
              </div>
            </div>

            <div className='flex flex-col gap-6 p-10 bg-orange-100 rounded-2xl'>
              <div className='w-full'>
                <h1 className='text-black font-Font1 text-3xl mb-3'>Şeffaf Fiyat</h1>
                <h1 className='text-black font-Font1 text-xl'>Net ve Uygun Fiyat Politikası</h1>
                <p className='text-black text-sm my-2'>Bursa da web tasarım hizmetlerimizde şeffaf fiyat politikası izliyoruz. Önceden belirlenmiş paket fiyatlarımızla sürpriz maliyetlerle karşılaşmazsınız.</p>
              </div>
            </div>

            <div className='flex flex-col gap-6 p-10 bg-pink-100 rounded-2xl'>
              <div className='w-full'>
                <h1 className='text-black font-Font1 text-3xl mb-3'>Referanslar</h1>
                <h1 className='text-black font-Font1 text-xl'>Bursa da Kanıtlanmış Başarı</h1>
                <p className='text-black text-sm my-2'>Bursa da yüzlerce mutlu müşterimiz ve başarılı projemizle sektörde öncüyüz. Referanslarımız ve portfolyomuz çalışmalarımızın kalitesinin kanıtıdır.</p>
              </div>
            </div>

            <div className='flex flex-col gap-6 p-10 bg-yellow-100 rounded-2xl'>
              <div className='w-full'>
                <h1 className='text-black font-Font1 text-3xl mb-3'>Kolay Yönetim</h1>
                <h1 className='text-black font-Font1 text-xl'>Kullanıcı Dostu Yönetim Paneli</h1>
                <p className='text-black text-sm my-2'>Bursa da geliştirdiğimiz web sitelerini kolayca yönetebilirsiniz. Teknik bilgi gerektirmeyen admin paneli ile içeriklerinizi rahatça güncelleyebilirsiniz.</p>
              </div>
            </div>

            <div className='flex flex-col gap-6 p-10 bg-blue-100 rounded-2xl'>
              <div className='w-full'>
                <h1 className='text-black font-Font1 text-3xl mb-3'>Sosyal Medya</h1>
                <h1 className='text-black font-Font1 text-xl'>Sosyal Medya Entegrasyonu</h1>
                <p className='text-black text-sm my-2'>Bursa da web sitenizi sosyal medya hesaplarınızla entegre ediyoruz. Dijital varlığınızı güçlendirerek müşteri etkileşiminizi artırıyoruz.</p>
              </div>
            </div>

            <div className='flex flex-col gap-6 p-10 bg-red-100 rounded-2xl'>
              <div className='w-full'>
                <h1 className='text-black font-Font1 text-3xl mb-3'>Analiz Raporları</h1>
                <h1 className='text-black font-Font1 text-xl'>Detaylı Performans Analizi</h1>
                <p className='text-black text-sm my-2'>Bursa da geliştirdiğimiz web siteleri için detaylı analiz raporları sunuyoruz. Veriye dayalı kararlar alarak işletmenizin büyümesine katkı sağlıyoruz.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Reviews />
    </Layout >

  )
}