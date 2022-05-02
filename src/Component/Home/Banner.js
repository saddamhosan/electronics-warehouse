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
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 4000,
      cssEase: "linear"
    }
    return (
      <div className="mb-6 px-7 bg-slate-200">
        <Slider {...settings}>
          <div>
            <img className="h-[40vh] md:h-[80vh] w-full" src={banner1} alt="" />
            {/* <h1 className='absolute top-24 '>woman watch  </h1> */}
          </div>
          <div>
            <img
              className=" md:h-[80vh] h-[40vh] w-full"
              src={banner2}
              alt=""
            />
          </div>
          <div>
            <img className="md:h-[80vh] h-[40vh] w-full" src={banner3} alt="" />
          </div>
          <div>
            <img className="md:h-[80vh] h-[40vh] w-full" src={banner4} alt="" />
          </div>
          <div>
            <img className="md:h-[80vh] h-[40vh] w-full" src={banner5} alt="" />
          </div>
          <div>
            <img className="md:h-[80vh] w-full h-[40vh]" src={banner6} alt="" />
          </div>
        </Slider>
      </div>
    );
};

export default Banner;