import React from "react";
import Slider from "react-slick";

export default function ReviewsSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const settingstwo = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        rtl: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };



    const reviews = [
        {
            text: "Bu ajans dijital varlığımızı tamamen değiştirdi! SEO stratejileriyle web sitemizin trafiği 3 kat arttı ve Google'da ilk sayfadayız. Satışlarımız hiç bu kadar iyi olmamıştı!",
            name: "Ahmet Y.",
            position: "Bursa E-ticaret Mağazası Sahibi"
        },
        {
            text: "Eski kalan web sitemizi yenileyip SEO optimizasyonu yaptılar. Sadece 3 ayda %200 daha fazla müşteri adayı elde ettik. Kesinlikle tavsiye ederim!",
            name: "Elif K.",
            position: "Bursa Pazarlama Müdürü"
        },
        {
            text: "SEO ve web tasarım uzmanlıkları sayesinde online rezervasyonlarımız ikiye katlandı. İşletmemize değer katmayı gerçekten çok iyi biliyorlar!",
            name: "Mehmet D.",
            position: "Bursa Otel İşletmecisi"
        },
        {
            text: "Online ortamda sıradan bir işletmeydik ama bu ajans her şeyi değiştirdi. SEO ve içerik stratejileriyle Bursa pazarında lider olduk. Ciromuz %150 arttı!",
            name: "Ayşe T.",
            position: "Bursa Kafe İşletmecisi"
        },
        {
            text: "Web sitemiz Google'da görünmüyordu ama bu ekip sayesinde tüm hedef kelimelerde üst sıralardayız. Sonuçlar ortada - işletmemiz katlanarak büyüdü!",
            name: "Can B.",
            position: "Bursa Spor Salonu Sahibi"
        },
        {
            text: "Uyguladıkları SEO ve dijital pazarlama stratejileri bizim için dönüm noktası oldu. Web trafiğimiz 4 kat arttı ve çok daha fazla müşteriye ulaşıyoruz!",
            name: "Zeynep A.",
            position: "Bursa Mobilya Tasarım Atölyesi Sahibi"
        },
        {
            text: "Sıfır online varlıkla başladığımız işimizde, bu ajans sayesinde sektörümüzde öne çıktık. SEO ve web tasarım hizmetleri her kuruşa değer. İşletmemiz zirvede!",
            name: "Burak K.",
            position: "Bursa Yazılım Şirketi Kurucusu"
        },
        {
            text: "Web sitemiz artık müşteri çeken bir makine! SEO optimizasyonları ve modern tasarım sayesinde daha çok müşteriye ulaşıp daha hızlı satış yapıyoruz. Bu ekip harika!",
            name: "Deniz Ö.",
            position: "Bursa Emlak Danışmanı"
        }
    ];

    return (
        <div className='bg-[#032127]'>
            <div className='w-full max-w-screen-xl mx-auto px-3 py-24'>
                <div className='mb-12'>
                    <h1 className='text-white text-center font-Font1 text-3xl md:text-6xl'>
                        Müşteriler <span className='text-[#FFA500]'>Bizim </span>Hakkımızda <br />  Neler söyledi
                    </h1>
                    <h2 className='text-white text-center font-sans text-base md:text-lg mt-4'>
                        Doğrudan En Önemli Kişilerden Dinleyin - Değerli Müşterilerimiz
                    </h2>
                </div>


                <div className="slider-wrapper mb-4">
                    <Slider {...settings}>
                        {reviews.slice(0, 3).map((review, index) => (
                            <div key={index} className="px-2">
                                <div className="p-6 bg-[rgba(126,214,223,.15)] rounded-3xl border h-64 flex flex-col justify-between">
                                    <p className="text-white">{review.text}</p>
                                    <div className='flex items-center gap-4'>
                                        <div>
                                            <p className='text-white text-sm'>{review.name}</p>
                                            <p className='text-white text-sm'>{review.position}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="slider-wrapper mb-4">
                    <Slider {...settingstwo}>
                        {reviews.slice(3, 6).map((review, index) => (
                            <div key={index} className="px-2">
                                <div className="p-6 bg-[rgba(126,214,223,.15)] rounded-3xl border h-64 flex flex-col justify-between">
                                    <p className="text-white">{review.text}</p>
                                    <div className='flex items-center gap-4'>
                                        <div>
                                            <p className='text-white text-sm'>{review.name}</p>
                                            <p className='text-white text-sm'>{review.position}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="slider-wrapper">
                    <Slider {...settings}>
                        {reviews.slice(6, 9).map((review, index) => (
                            <div key={index} className="px-2">
                                <div className="p-6 bg-[rgba(126,214,223,.15)] rounded-3xl border h-64 flex flex-col justify-between">
                                    <p className="text-white">{review.text}</p>
                                    <div className='flex items-center gap-4'>
                                        <div>
                                            <p className='text-white text-sm'>{review.name}</p>
                                            <p className='text-white text-sm'>{review.position}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}