import React from 'react';
import Slider from "react-slick";
import apple from '../../images/apple.png';
import casio from '../../images/casio.png';
import hp from '../../images/hp.png';
import intel from '../../images/intel.png';
import kinnex from '../../images/kinnex.png';
import lg from '../../images/lg.png';
import rolex from '../../images/rolex.png';
import samsung from '../../images/samsung.png';
import sony from '../../images/sony.png';

const Brands = () => {
    const settings = {
    //   dots: true,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div className="mt-10 mb-20 font-serif bg-slate-100 py-5">
        <h4 className="text-center text-2xl">In our warehouse you will find</h4>
        <h1 className="text-center text-4xl font-bold text-cyan-400">
          Only the best brands
        </h1>
        <div className="my-8 px-7">
          <Slider {...settings}>
            <div>
              <img className="px-6" src={lg} alt="" />
            </div>
            <div>
              <img className="px-3" src={casio} alt="" />
            </div>
            <div>
              <img className="px-3" src={hp} alt="" />
            </div>
            <div>
              <img className="px-3" src={intel} alt="" />
            </div>
            <div>
              <img className="px-3" src={apple} alt="" />
            </div>
            <div>
              <img className="px-3" src={rolex} alt="" />
            </div>
            <div>
              <img className="px-3" src={samsung} alt="" />
            </div>
            <div>
              <img className="px-3" src={sony} alt="" />
            </div>
            <div>
              <img className="px-3" src={kinnex} alt="" />
            </div>
          </Slider>
        </div>
        <p className="text-center md:px-20 px-6">
          Whether you're a Technician, Musician, Professional or Hobbyist we
          here at Electronics Warehouse are here to help.Come in, ask your
          questions and get helpful answers. Electronics Warehouse. For products
          you need and service you expect.A/V Cables - Batteries - Capacitors -
          Chemicals - Fuses/Breakers - Heat Shrink - LED Lighting - Networking -
          Resistors - Semiconductors - Soldering Irons Surveillance - Switches -
          Terminals & Connectors - Test Equipment - Tools - Transformers -
          Wire/Cable and much much more. . .
        </p>
      </div>
    );
};

export default Brands;