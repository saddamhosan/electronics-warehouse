import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {
    const [user]=useAuthState(auth)
    const email=user?.email
    const [products,setProducts]=useState([])

    useEffect(()=>{
        fetch(
          `https://enigmatic-beach-29740.herokuapp.com/items?email=${email}`
        )
          .then((res) => res.json())
          .then((data) => {
            setProducts(data);
          });
    },[email])
    return (
        <div>
            <h1>Total my item: {products.length}</h1>
            {
                products.map(product=><p key={product._id}>{product.name} :: {product.email}</p>)
            }
        </div>
    );
};

export default MyItem;