import * as React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const bestSellers = [{
    imgSrc: 'https://m.media-amazon.com/images/I/71CX11nGhWL._AC_SY400_.jpg'
}, {
    imgSrc: 'https://m.media-amazon.com/images/I/81FS3wyevDL._AC_SY400_.jpg'
}, {
    imgSrc: 'https://m.media-amazon.com/images/I/71nKtAPngQL._AC_SY400_.jpg'
}, {
    imgSrc: 'https://m.media-amazon.com/images/I/81RrEEMiOCL._AC_SY400_.jpg'
}, {
    imgSrc: 'https://m.media-amazon.com/images/I/81uQRVpi2UL._AC_SY400_.jpg'
}, {
    imgSrc: 'https://m.media-amazon.com/images/I/81YkqyaFVEL._AC_SY400_.jpg'
}, {
    imgSrc: 'https://m.media-amazon.com/images/I/917Bc9C1MlL._AC_SY400_.jpg'
}, {
    imgSrc: 'https://m.media-amazon.com/images/I/71PFp5FWpHL._AC_SY400_.jpg'
}, {
    imgSrc: 'https://m.media-amazon.com/images/I/61XUtQ7NTgL._AC_SY400_.jpg'
}, {
    imgSrc: 'https://m.media-amazon.com/images/I/71hwUY5ZmxL._AC_SY400_.jpg'
}]

const CardCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1
      };
  return (
    
    <div className="card-container">
        <h1>Best Sellers in Books</h1>
        <Slider {...settings}>
            {bestSellers.map(image => 
            <div className="card-wrapper">
                <img src={image.imgSrc} />
            </div>
        )}
        </Slider>
    </div>
  )
}

export default CardCarousel