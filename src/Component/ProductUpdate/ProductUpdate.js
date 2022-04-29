import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductUpdate = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://enigmatic-beach-29740.herokuapp.com/product/${id}`
      );
      setProduct(data);
    })();
  }, [id]);
  const { img, name, supplier, price, quantity, description } = product;
  return (
    <div>
      <div>
        <img className="h-[250px]" src={img} alt="" />
      </div>
      <div>
        <p>{name}</p>
        <p>{description}</p>
        <p>Supplier: {supplier}</p>
        <p>Quantity: {quantity}</p>
        <p>$ {price}</p>
        <button className="bg-blue-600 text-white font-bold px-5 py-2 mt-2 rounded-xl">
          Delivered
        </button>
      </div>
    </div>
  );
};

export default ProductUpdate;
