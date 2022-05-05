import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
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
  const newQuantity = parseInt(product?.quantity) + parseInt(quantity);


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
      toast.success(`Added ${quantity} product Successfully `,{id:'add pd'});
      navigate("/manageInventories");
    }
  });
}

const handleDelivered=()=>{
  if (product?.quantity > 0) {
    const newQuantity = product?.quantity - 1;

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
          toast.success("successfully delivered", { id: "deliver" });
          navigate("/manageInventories");
        }
      });
  } else {
    toast.error('Product not enough for delivered ',{id:'pd no'})
  }
}

  const { img, name, supplier, price, quantity, description } = product;
  return (
    <div>
      <Helmet>
        <title>Update Product - E warehouse</title>
      </Helmet>
      <div className="md:flex justify-evenly my-10 items-center mx-10">
        <div className="md:w-1/2">
          <img className="h-[350px]" src={img} alt="" />
        </div>
        <div className="md:w-1/2 font-serif text-center">
          <p className="text-3xl font-bold text-center text-blue-600 mb-3">
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
          <p className="text-xl font-bold">
            Price:{" "}
            <span className="text-xl text-gray-600 font-bold">$ {price}</span>
          </p>
          <div className=" md:flex justify-evenly mt-3">
            <button
              onClick={handleDelivered}
              className="bg-blue-600 text-white font-bold px-6 py-2 mt-2 rounded-lg my-2"
            >
              Delivered
            </button>
            <form onSubmit={handleQuantity}>
              <input
                className="w-32 p-2 rounded-r-none rounded-lg border"
                type="number"
                name="quantity"
                placeholder="Add Quantity"
                required
              />
              <input
                className="bg-blue-600 text-white rounded-l-none border border-blue-500 font-bold px-5 py-2 mt-2 rounded-lg"
                type="submit"
                value="Add"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-8">
        <button
          onClick={() => navigate("/manageInventories")}
          className="rounded-xl bg-blue-500 text-white text-xl font-bold px-6 py-2"
        >
          Manage Inventories
        </button>
      </div>
    </div>
  );
};

export default ProductUpdate;
