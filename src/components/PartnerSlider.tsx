import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 8000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: false,
        pauseOnFocus: false,
    };


    return (
        <Slider {...settings}>
            <div>
                <h3 className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus ipsa autem, cumque pariatur explicabo illo quisquam odit doloribus eaque, nobis, exercitationem eveniet? Id temporibus, sapiente vel numquam voluptates et!</h3>
            </div>
            <div>
                <h3 className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus ipsa autem, cumque pariatur explicabo illo quisquam odit doloribus eaque, nobis, exercitationem eveniet? Id temporibus, sapiente vel numquam voluptates et!</h3>
            </div>
            <div>
                <h3 className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus ipsa autem, cumque pariatur explicabo illo quisquam odit doloribus eaque, nobis, exercitationem eveniet? Id temporibus, sapiente vel numquam voluptates et!</h3>
            </div>
            <div>
                <h3 className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus ipsa autem, cumque pariatur explicabo illo quisquam odit doloribus eaque, nobis, exercitationem eveniet? Id temporibus, sapiente vel numquam voluptates et!</h3>
            </div>
            <div>
                <h3 className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus ipsa autem, cumque pariatur explicabo illo quisquam odit doloribus eaque, nobis, exercitationem eveniet? Id temporibus, sapiente vel numquam voluptates et!</h3>
            </div>
            <div>
                <h3 className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus ipsa autem, cumque pariatur explicabo illo quisquam odit doloribus eaque, nobis, exercitationem eveniet? Id temporibus, sapiente vel numquam voluptates et!</h3>
            </div>
        </Slider>
    );
}