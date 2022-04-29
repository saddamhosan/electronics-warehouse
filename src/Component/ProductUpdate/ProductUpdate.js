import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductUpdate = () => {
  const navigate=useNavigate()
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

const handleQuantity=(e)=>{
  e.preventDefault()
  const quantity=e.target.quantity.value
  const newQuantity = product?.quantity + parseInt(quantity);


fetch(`https://enigmatic-beach-29740.herokuapp.com/product/${id}`, {
  method: "PUT",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({ newQuantity }),
})
  .then((res) => res.json())
  .then((data) => {
    if (data.modifiedCount > 0) {
      console.log("Added Successfully ");
      navigate("/");
    }
  });
}

const handleDelivered=()=>{
const newQuantity = product?.quantity - 1

fetch(`https://enigmatic-beach-29740.herokuapp.com/product/${id}`, {
  method: "PUT",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({ newQuantity }),
})
  .then((res) => res.json())
  .then((data) => {
    if (data.modifiedCount > 0) {
      console.log("successfully delivered");
      navigate("/");
    }
  });
}

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
        <button onClick={handleDelivered} className="bg-blue-600 text-white font-bold px-5 py-2 mt-2 rounded-xl">
          Delivered
        </button>
        <form onSubmit={handleQuantity}>
          <input type="number" name="quantity" placeholder="Add Quantity" required/>
          <input type="submit" value="Add" />
        </form>
      </div>
    </div>
  );
};

export default ProductUpdate;
