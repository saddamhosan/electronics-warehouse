import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyItem = () => {
    const [user]=useAuthState(auth)
    const email=user?.email
    const [products,setProducts]=useState([])
    const navigate=useNavigate()

    useEffect(() => {
      (async () => {
        const url = `https://enigmatic-beach-29740.herokuapp.com/items?email=${email}`;
        try {
          const { data } = await axios.get(url, {
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          setProducts(data);
        } catch (error) {
          toast.error(error.message,{id:'error'});
          if (error.response.status === 401 || error.response.status === 403) {
            signOut(auth);
            navigate("/login");
          }
        }
      })();
    }, [email, navigate]);
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