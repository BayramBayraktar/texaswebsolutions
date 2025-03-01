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
        rtl:true,
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
            text: "This agency transformed our online presence! Their SEO strategies tripled our website traffic, and we're now ranking on the first page of Google. Our sales have never been this high!",
            name: "Michael R.",
            position: "E-commerce Store Owner"
        },
        {
            text: "Our website was outdated, but this team not only redesigned it but also optimized it for SEO. We've seen a 200% increase in leads within just 3 months. Highly recommend their services!",
            name: "Laura B.",
            position: "Marketing Manager"
        },
        {
            text: "Thanks to their expertise in SEO and web design, our online bookings have doubled. They truly understand how to make a website work for your business!",
            name: "David K.",
            position: "Tourism Business Owner"
        },
        {
            text: "We were struggling to stand out online, but this agency changed everything. Their SEO and content strategies helped us dominate our local market. Our revenue has grown by 150%!",
            name: "Sophie W.",
            position: "Cafe Owner"
        },
        {
            text: "Our website was invisible on Google, but after working with this team, we're now ranking for all our target keywords. The results speak for themselves – our business has grown exponentially!",
            name: "Ethan T.",
            position: "Fitness Studio Owner"
        },
        {
            text: "The SEO and digital marketing strategies they implemented have been a game-changer for us. Our website traffic has quadrupled, and we're converting more leads than ever before!",
            name: "Olivia M.",
            position: "Interior Design Firm Owner"
        },
        {
            text: "We went from zero online presence to dominating our niche, all thanks to this agency. Their SEO and web design services are worth every penny. Our business has never been better!",
            name: "Daniel H.",
            position: "Tech Startup Founder"
        },
        {
            text: "Our website is now a lead-generating machine! The SEO optimizations and modern design have helped us attract more clients and close deals faster. This team is simply the best!",
            name: "Rachel L.",
            position: "Real Estate Agent"
        }
    ];

    return (
        <div className='bg-[#032127]'>
            <div className='w-full max-w-screen-xl mx-auto px-3 py-24'>
                <div className='mb-12'>
                    <h1 className='text-white text-center font-Font1 text-3xl md:text-6xl'>
                        What Our <span className='text-[#FFA500]'>Clients</span> Say <br /> About Us
                    </h1>
                    <h2 className='text-white text-center font-sans text-base md:text-lg mt-4'>
                        Hear It Straight from Those Who Matter Most – Our Valued Clients
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