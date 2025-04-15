import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
//import Price from '@/components/price'


export default function Footer() {

    const [activeIndex, setActiveIndex] = useState<number | null>();
    const faqData = [
        {
            question: "Bursa'da bir işletme için SEO sonuçları ne zaman görülmeye başlar?",
            answer: "SEO sabır isteyen bir süreçtir. Bursa'daki yerel işletmeler genellikle 2-4 ay içinde ilk sonuçları görmeye başlar. Rekabetin yoğun olduğu sektörlerde (tekstil, otomotiv gibi) 6-12 ay sürebilir. İlk 3 ayda teknik SEO optimizasyonları, sonrasında içerik stratejileri öne çıkar."
        },
        {
            question: "Bursa'da Google'da üst sıralara çıkmak için ne yapmalıyım?",
            answer: "Bursa'da Google sıralamaları için: 1) Google İşletmem Profilinizi eksiksiz doldurun 2) Bursa odaklı anahtar kelimeler (örn: 'Bursa web tasarım') kullanın 3) Yerel backlinkler (Bursa'daki sitelerden) edinin 4) Mobil uyumlu ve hızlı bir web sitesine sahip olun 5) Bursa ile ilgili blog içerikleri oluşturun."
        },
        {
            question: "Türkiye'de en önemli SEO faktörleri nelerdir? (2025 Güncel)",
            answer: "2025'te Türkiye için kritik SEO faktörleri: 1) Sayfa hızı (mobilde 2 saniyenin altı) 2) Yerel SEO optimizasyonları 3) E-A-T (Uzmanlık, Otorite, Güven) 4) Türkçe içerik kalitesi 5) Kullanıcı deneyimi (Core Web Vitals) 6) HTTPS güvenlik sertifikası 7) Yapılandırılmış veri işaretlemeleri."
        },
        {
            question: "Bursa'da yerel SEO için Google İşletmem Profili nasıl optimize edilir?",
            answer: "Bursa odaklı Google İşletmem optimizasyonu: 1) Tam ve tutarlı NAP bilgisi (İsim, Adres, Telefon) 2) Bursa ile ilgili anahtar kelimeler 3) Bursa'dan müşteri yorumları 4) Bursa fotoğrafları 5) Hizmet alanlarına 'Bursa' eklemek 6) Bursa'ya özel kampanyalar 7) Doğru kategori seçimi."
        },
        {
            question: "Türkiye'de web sitesi hızı için ideal yükleme süresi nedir?",
            answer: "Türkiye şartlarında ideal yükleme süreleri: Mobilde 2.5 saniyenin altı, masaüstünde 1.5 saniye. Türk kullanıcıların %53'ü 3 saniyeden yavaş açılan siteleri terk ediyor. Öneri: Yerel hosting kullanın, görselleri optimize edin, gereksiz eklentilerden kaçının."
        },
        {
            question: "Bursa'da bir işletme için backlink stratejisi nasıl olmalı?",
            answer: "Bursa odaklı backlink stratejisi: 1) Bursa'daki yerel portal ve rehberler 2) Bursa belediyesi ve Ticaret Odası siteleri 3) Bursa temalı bloglarda misafir yazılar 4) Bursa'daki üniversite siteleri 5) Bursa haber sitelerinde basın bültenleri 6) Bursa'daki sektörel dernek siteleri. Kaliteli ve doğal linkler hedefleyin."
        },
        {
            question: "Türkiye'de içerik uzunluğu ne olmalı? (2025 Trendleri)",
            answer: "2025 Türkiye verilerine göre: Bilgi amaçlı içeriklerde 1.500-2.500 kelime, ürün sayfalarında 600-800 kelime ideal. Ancak asıl önemli olan: 1) Türkçe dil kalitesi 2) Orijinal bilgi 3) Kullanıcı niyetini tam karşılama 4) Görsel ve video desteği 5) Bölümlendirilmiş yapı."
        },
        {
            question: "Bursa'da e-ticaret SEO'su için özel taktikler nelerdir?",
            answer: "Bursa'da e-ticaret SEO'su: 1) Ürün başlıklarında 'Bursa' vurgusu 2) Yerel teslimat bilgileri 3) Bursa'dan gerçek müşteri yorumları 4) Semt bazlı anahtar kelimeler (Örn: 'Nilüfer mobilya') 5) Bursa'daki alışveriş alışkanlıklarına uygun içerik 6) Yerel sosyal medya entegrasyonu."
        },
        {
            question: "Türkiye'de sesli aramalar için nasıl optimize edilir?",
            answer: "Türkçe sesli arama optimizasyonu: 1) Soru cümleleri hedefleyin ('Bursa'da en iyi web tasarım şirketi hangisi?') 2) Konuşma dilinde içerik 3) FAQ şeması kullanımı 4) Kısa ve net cevaplar 5) Yerel ifadeler ('Bursa'da yakınımdaki...') 6) Sesli arama uyumlu snippet'ler."
        },
        {
            question: "Bursa'da bir işletme için aylık SEO bütçesi ne olmalı?",
            answer: "Bursa'da SEO bütçesi: Başlangıç seviyesi 5.000-10.000 TL/ay (teknik optimizasyon + temel içerik), orta seviye 15.000-25.000 TL/ay (kapsamlı strateji), ileri seviye 30.000 TL+/ay (endüstri liderliği hedefi). Sektör rekabetine göre değişir."
        },
        {
            question: "Türkiye'de SEO için en iyi anahtar kelime araçları nelerdir?",
            answer: "Türkçe SEO araçları: 1) Google Keyword Planner (Ücretsiz) 2) SEMrush (Türkçe veri desteği) 3) Ahrefs (Backlink analizi) 4) Mynet Trendler 5) Google Trends Türkiye 6) Yandex Wordstat alternatifi 7) Türkçe içerik analiz araçları (Weborama gibi)."
        },
        {
            question: "Bursa'da bir restoran için SEO stratejisi nasıl olmalı?",
            answer: "Bursa'da restoran SEO'su: 1) 'Bursa [mutfak türü] restoran' anahtar kelimeleri 2) Menüde Bursa'ya özel yemekler 3) Google İşletme'de Bursa fotoğrafları 4) Bursa food blogger işbirlikleri 5) Yerel lezzet blogları 6) Bursa'ya özel kampanyalar 7) Online rezervasyon optimizasyonu."
        },
        {
            question: "Türkiye'de YouTube SEO'su nasıl yapılır?",
            answer: "Türkçe YouTube SEO: 1) Başlıkta '2025', 'Türkiye', 'Nasıl Yapılır' gibi kelimeler 2) Açıklamada 250+ kelime 3) Türkçe altyazı 4) Bölüm zaman damgaları 5) 'Bursa' gibi yerel etiketler 6) Kapak görselinde Türkçe metin 7) Yorum etkileşimi 8) Türk izleyici alışkanlıklarına uygun içerik."
        },
        {
            question: "Bursa'da mobilya sektörü için SEO taktikleri nelerdir?",
            answer: "Bursa mobilya SEO'su: 1) Semt bazlı anahtar kelimeler ('Osmangazi mobilya') 2) Ürün açıklamalarında Bursa vurgusu 3) Bursa'daki proje referansları 4) Yerel malzeme bilgisi (Bursa kaynaklı) 5) Bursa mobilya fuarı içerikleri 6) Bursa'nın mobilya üretim merkezi olduğunu vurgulayan bloglar."
        },
        {
            question: "Türkiye'de SEO için en kritik teknik ayarlar nelerdir?",
            answer: "Türkiye'de teknik SEO: 1) .com.tr alan adı 2) Türk sunucu lokasyonu 3) Türkçe dil etiketi 4) HTTPS zorunlu 5) Türkçe schema işaretlemeleri 6) Hreflang tag (tr-TR) 7) Türkçe URL yapısı 8) Breadcrumb navigasyon 9) Türkçe 404 sayfası 10) Resimlerde Türkçe alt text."
        },
        {
            question: "Bursa'da otomotiv sektörü için SEO nasıl yapılır?",
            answer: "Bursa otomotiv SEO'su: 1) 'Bursa oto galeri' gibi yerel anahtar kelimeler 2) Bursa'daki servis bilgileri 3) Yerel bayiliklerin vurgulanması 4) Bursa trafik verileri içeren bloglar 5) Bursa plaka bilgileri 6) Oto ekspertiz hizmeti varsa Bursa odaklı içerik 7) Bursa'daki otomotiv OSB'lerle işbirliği."
        },
        {
            question: "Türkiye'de AI ile üretilen içerikler SEO'yu olumsuz etkiler mi?",
            answer: "Google Türkçe AI içerikleri şu şekilde değerlendiriyor: 1) Tamamen AI içerikler sıralamalarda tutunamıyor 2) AI çıktılarını Türk uzmanlar denetlemeli 3) Yerel veriler (Bursa istatistikleri gibi) eklenmeli 4) Türk kültürüne uyarlama şart 5) Orijinal araştırma ve insan dokunuşu olmalı. Önerimiz: AI'yı destekleyici olarak kullanın, temel içerik üreticisi olarak değil."
        },
        {
            question: "Bursa'da sağlık sektörü için SEO'da nelere dikkat edilmeli?",
            answer: "Bursa'da sağlık SEO'su: 1) YDUS kurallarına uygun içerik 2) Hekim bilgilerinin eksiksiz olması 3) 'Bursa [uzmanlık] doktor' anahtar kelimeleri 4) Bursa'daki hastanelerle işbirliği 5) Tıbbi bilgilerde güncel kaynaklar 6) Yerel sağlık etkinlikleri 7) Hasta yorumları (YDUS kuralları çerçevesinde) 8) Bursa'ya özel sağlık rehberleri."
        }
    ];

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            {/*  <Price /> */}

            <div className="my-12 max-w-screen-xl mx-auto px-3">
                {faqData.map((item, index) => (
                    <div key={index} onClick={() => toggleAccordion(index)} className="p-6 bg-gray-50 rounded-xl mt-3 cursor-pointer shadow-lg">
                        <div className="flex items-center justify-between">
                            <h1 className="md:text-xl text-base font-Font1">{item.question}</h1>
                            <span className="bg-white p-4 text-sm md:text-xl rounded-full">{activeIndex === index ? <IoMdClose /> : <FaPlus />}</span>
                        </div>
                        <div className={`transition-all overflow-hidden duration-500 ${activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                            {activeIndex === index && (
                                <h2 className="mt-4 text-sm md:text-base text-gray-600">
                                    {item.answer}
                                </h2>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full max-w-screen-xl mx-auto md:p-28 py-16 px-4 text-center bg-[url(/images/bgimage.jpg)] bg-black bg-opacity-80 bg-blend-overlay md:rounded-3xl bg-cover'>
                <h1 className='text-white font-Font1 text-xl md:text-5xl'>
                    Vizyonunuz, Uzmanlığımız Mükemmel Sonuçlar
                    İnovasyonun güvenilir web çözümleriyle buluştuğu yer
                </h1>
                <p className='md:my-4 my-6 text-sm md:text-base text-white'>Gizli ücretler olmadan basit, şeffaf fiyatlandırma.</p>
                <Link href="/bursa-web-tasarım-iletişim" className='text-center text-[#00BFFF] md:px-12 md:py-3 px-6 py-2 border-2 border-[#00BFFF] rounded-2xl'>Şimdi İletişime Geç</Link>
            </div>

            <div className="bg-[rgb(247,247,247)]">
                <div className="w-full max-w-screen-xl mx-auto px-3">
                    <div className="flex md:flex-row flex-col w-full py-24">
                        <div className="md:w-1/3 w-full flex flex-col items-center md:items-start">
                            <Link className="font-Font1  text-5xl" href="/" aria-label="go to homepage">-TWS-</Link>
                            <h1 className="font-Font1 mt-2">Texsas Web Solutions</h1>
                        </div>
                        <div className="md:w-2/3 w-full flex flex-col gap-y-16 mt-12 md:mt-0 md:flex-row">
                            <div className="md:w-1/3 w-full">
                                <h1 className="font-Font1 text-2xl md:text-base my-4">Hızlı Erişim</h1>
                                <ul className="flex flex-col gap-y-6">
                                    <Link className="text-gray-800 font-medium text-xl md:text-sm" href={"/"} >Ana Sayfa</Link>
                                    <Link className="text-gray-800 font-medium text-xl md:text-sm" href={"/hakkimizda"} >Hakkimizda</Link>
                                    <Link className="text-gray-800 font-medium text-xl md:text-sm" href={"/bursa-web-hizmeti"} >Hizmetler</Link>
                                    <Link className="text-gray-800 font-medium text-xl md:text-sm" href={"/yorumlar"} >Yorumlar</Link>
                                    <Link className="text-gray-800 font-medium text-xl md:text-sm" href={"/bursa-web-tasarim-iletisim"} >İletişim</Link>
                                </ul>
                            </div>
                            <div className=" md:w-1/3 w-full ">
                                <h1 className="font-Font1 text-2xl md:text-base my-4">Bizimle İletişime Geç</h1>
                                <ul className="flex flex-col gap-y-6">
                                    <div><b className="text-sm">Email: </b><Link className="text-gray-800 font-medium text-xl md:text-sm" href="mailto:texsaswebsolutions@gmail.com">texsaswebsolutions@gmail.com</Link></div>
                                    <div><b className="text-sm">Whatsapp: </b><Link className="text-gray-800 font-medium text-xl md:text-sm" href="https://wa.me/+905315278986">Whatsapp</Link></div>
                                </ul>
                            </div>
                            <div className="md:w-1/3 w-full">
                                <h1 className="font-Font1 my-4">Sosyal Medya</h1>
                                <ul className="flex flex-col gap-y-6">
                                    <Link className="text-gray-800 font-medium text-xl md:text-sm" target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/company/texas-web-solutions/?viewAsMember=true"} >Linkedin</Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-center py-8 border-t-2 text-[12px] font-semibold  border-gray-200">Copyright © 2025 <b>Texas Web Solutions.</b> All rights reserved.</h2>
                </div>
            </div>

        </div>
    )
}