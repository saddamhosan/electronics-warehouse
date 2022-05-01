import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { RiDeleteBin5Line } from "react-icons/ri";
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

const handleDeleteProduct = (id) => {
  const confirm = window.confirm("are you sure you want to delete");
  if (confirm) {
    const url = `https://enigmatic-beach-29740.herokuapp.com/product/${id}`;
    fetch(url, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const rest = products.filter((product) => product._id !== id);
          setProducts(rest);
          toast.success("delete successfully", { id: "delete" });
        }
      });
  }
};


    return (
      <div className='font-serif'>
        <h1 className='text-3xl text-blue-500 text-center font-bold my-4'>Total my item: {products.length}</h1>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Supplier
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>

                <th scope="col" className="px-6 py-3 text-center">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                const {_id, email, img, name, supplier, price, quantity } = product;
                return (
                  <tr
                    key={product._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {name}
                    </th>
                    <td className="px-6 py-4"> {email} </td>
                    <td className="px-6 py-4"> {supplier} </td>
                    <td className="px-6 py-4">{quantity}</td>
                    <td className="px-6 py-4">$ {price}</td>
                    <td className="px-6 py-4">
                      <img className="w-24" src={img} alt="" />
                    </td>

                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => handleDeleteProduct(_id)}
                        className="font-bold text-2xl text-red-600  hover:underline"
                      >
                        <RiDeleteBin5Line/>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyItem;