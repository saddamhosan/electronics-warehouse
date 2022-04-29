import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Inventory = () => {
const [products,setProducts]=useState([])

useEffect(()=>{
    (async()=>{
        const { data } = await axios.get(
          "https://enigmatic-beach-29740.herokuapp.com/products"
        );
        setProducts(data);
    })()
},[])

    return (
      <div>
          <h1 className='text-center text-3xl text-blue-500 font-serif font-bold'>Inventory</h1>
        <div className="grid grid-cols-3 gap-10 m-10">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    );
};

export default Inventory