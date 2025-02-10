import React from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function WeCreatedSlider() {
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
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

    const images = [
        { src: "/images/Resturant.png", alt: "Restaurant Website" },
        { src: "/images/plumber.png", alt: "Plumber Website" },
        { src: "/images/medical.png", alt: "Medical Website" },
        { src: "/images/logistic.png", alt: "Logistics Website" },
        { src: "/images/learning.png", alt: "Learning Platform" },
        { src: "/images/garden.png", alt: "Garden Services Website" },
        { src: "/images/Corporate.png", alt: "Corporate Website" },
        { src: "/images/carafto.png", alt: "Crafts Website" }
    ];

    return (
        <div>
            <p className='text-center my-8 font-Font1 text-sm md:text-xl text-gray-500'>
                Our Portfolio – Innovative Web Solutions
            </p>
            <div className='slider-wrapper'>
                <Slider className="custom_slider" {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className="overflow-hidden px-2">
                            <div className="relative w-full aspect-square">
                                <Image 
                                    src={image.src} 
                                    alt={image.alt} 
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}