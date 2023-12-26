import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear"
      };
  return (
    <div className="image-wrapper">
        <Slider {...settings}>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4f9ffd5f11a2a4b9.jpg?q=20" />
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/d1e2c6399c50f2f9.jpg?q=20" />
        </Slider>
    </div>
  )
}

export default Carousel