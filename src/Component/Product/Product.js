import "animate.css";
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const navigate=useNavigate()
    const {_id, img, name, supplier, price, quantity, description } = product;

    const handleUpdate=(id)=>{
        navigate(`/inventory/${id}`);
    }

    return (
      <div className="shadow-2xl rounded-xl relative">
        <div className="">
          <img
            className="h-[250px] w-full rounded-xl rounded-b-none"
            src={img}
            alt=""
          />
        </div>
        <div className="my-6 px-6 ">
          <p className="text-center text-3xl animate__animated animate__rubberBand text-blue-500 hover:text-blue-900 font-bold font-serif">
            {name}
          </p>
          <p className="text-lg text-gray-500 my-2">{description}</p>
          <p className="text-xl font-bold">
            Supplier:{" "}
            <span className="text-xl text-gray-600 font-bold">{supplier}</span>
          </p>
          <p className="text-xl font-bold">
            Quantity:{" "}
            <span className="text-xl text-gray-600 font-bold">{quantity}</span>
          </p>
          <p className="text-xl font-bold pb-10">
            Price:{" "}
            <span className="text-xl text-gray-600 font-bold">$ {price}</span>
          </p>
          <button
            onClick={() => handleUpdate(_id)}
            className="absolute bottom-4 bg-blue-600 text-white font-bold px-5 py-2 mt-2 rounded-xl"
          >
            Update
          </button>
        </div>
      </div>
    );
};

export default Product;