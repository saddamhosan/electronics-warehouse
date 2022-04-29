import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
import banner3 from '../../images/banner3.jpg';
import banner4 from '../../images/banner4.jpg';
import banner5 from '../../images/banner5.jpg';
import banner6 from '../../images/banner6.jpg';

const Banner = () => {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    }
    return (
      <div className="mb-6">
        <Slider {...settings}>
          <div>
            <img className='h-[300px]' src={banner1} alt="" />
          </div>
          <div>
            <img className='h-[300px]' src={banner2} alt="" />
          </div>
          <div>
            <img className='h-[300px]' src={banner3} alt="" />
          </div>
          <div>
            <img className='h-[300px]' src={banner4} alt="" />
          </div>
          <div>
            <img className='h-[300px]' src={banner5} alt="" />
          </div>
          <div>
            <img className='h-[300px]' src={banner6} alt="" />
          </div>
        </Slider>
      </div>
    );
};

export default Banner;