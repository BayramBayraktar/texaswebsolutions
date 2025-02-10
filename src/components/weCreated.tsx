import React from "react";
import Slider from "react-slick";

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


    return (
        <div>
            <p className='text-center my-8 font-Font1 text-sm md:text-xl text-gray-500'>Our Portfolio – Innovative Web Solutions</p>
            <div className='slider-wrapper'>
                <Slider className="custom_slider" {...settings}>
                    <div className="overflow-hidden px-2">
                        <img className="w-full h-auto object-cover" src="./images/Resturant.png" alt="" />
                    </div>
                    <div className="overflow-hidden px-2">
                        <img className="w-full h-auto object-cover" src="./images/plumber.png" alt="" />
                    </div>
                    <div className="overflow-hidden px-2">
                        <img className="w-full h-auto object-cover" src="./images/medical.png" alt="" />
                    </div>
                    <div className="overflow-hidden px-2">
                        <img className="w-full h-auto object-cover" src="./images/logistic.png" alt="" />
                    </div>
                    <div className="overflow-hidden px-2">
                        <img className="w-full h-auto object-cover" src="./images/learning.png" alt="" />
                    </div>
                    <div className="overflow-hidden px-2">
                        <img className="w-full h-auto object-cover" src="./images/garden.png" alt="" />
                    </div>
                    <div className="overflow-hidden px-2">
                        <img className="w-full h-auto object-cover" src="./images/Corporate.png" alt="" />
                    </div>
                    <div className="overflow-hidden px-2">
                        <img className="w-full h-auto object-cover" src="./images/carafto.png" alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    );
}