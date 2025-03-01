import React from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function LandingDemoSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000
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
            <div className="slider-wrapper relative">
                <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-[#032127] to-transparent"></div>
                
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
