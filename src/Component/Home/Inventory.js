import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Product from "../Product/Product";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const navigate=useNavigate()

  useEffect(() => {
    const url = "https://enigmatic-beach-29740.herokuapp.com/products";
    // (async () => {
    //   const { data } = await axios.get("https://enigmatic-beach-29740.herokuapp.com/products");
    //   setProducts(data.result);
    // })();
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data.result));
  }, []);

  return (
    <div>
      <h1 className="text-center text-3xl text-blue-500 font-serif font-bold">
        Inventory
      </h1>
      <div className="grid md:grid-cols-3 gap-10 m-10">
        {products.slice(0,6).map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <div className="flex justify-center">
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

export default Inventory;
