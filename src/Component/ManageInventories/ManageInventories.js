import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageInventories = () => {
  const [page,setPage]=useState(0)
  const [limit,setLimit]=useState(10)
  const [totalPage,setTotalPage]=useState(0)
  const navigate=useNavigate()
    const [products, setProducts] = useState([]);

    useEffect(() => {
      (async () => {
        const { data } = await axios.get(
          `https://enigmatic-beach-29740.herokuapp.com/products?limit=${limit}&page=${page}`
        );
        setProducts(data.result);
        setTotalPage(Math.ceil(data?.count / limit));
      })();
    }, [limit,page]);

    const handleDeleteProduct=(id)=>{
       Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }

        if (result.isConfirmed) {
          const url = `https://enigmatic-beach-29740.herokuapp.com/product/${id}`;
          fetch(url, {
            method: "delete",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                const rest = products.filter((product) => product._id !== id);
                setProducts(rest);
              }
            });
        }
      });
    }
    
    

    const handleUpdate = (id) => {
      navigate(`/inventory/${id}`);
    };
    return (
      <div>
        <Helmet>
          <title>Manage Inventories - E warehouse</title>
        </Helmet>
        <h1 className="animate__animated animate__rubberBand text-center text-3xl text-blue-500 font-serif font-bold pt-10 ">
          Manage Inventories
        </h1>
        <div className="flex justify-center ">
          <button
            onClick={() => navigate("/addItem")}
            className="rounded-xl bg-blue-500 my-10 text-white text-xl font-bold px-6 py-2"
          >
            Add New Item
          </button>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
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
                <th scope="col" className="px-6 py-3">
                  Update
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                const { _id, img, name, supplier, price, quantity } = product;
                
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
                    <td className="px-6 py-4"> {supplier} </td>
                    <td className="px-6 py-4">
                      {quantity ? quantity : <span className='text-orange-500 font-bold'>Sold Out</span>}
                    </td>
                    <td className="px-6 py-4">$ {price}</td>
                    <td className="px-6 py-4">
                      <img className="w-24" src={img} alt="" />
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleUpdate(_id)}
                        className="bg-blue-600 text-white font-bold px-5 py-2 mt-2 rounded-xl"
                      >
                        Update
                      </button>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => handleDeleteProduct(product._id)}
                        className="font-bold text-2xl text-red-600  hover:underline"
                      >
                        <RiDeleteBin5Line />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end py-5 mx-10">
          {[...Array(totalPage).keys()].map((num) => (
            <button
              onClick={() => setPage(num)}
              className={`mx-3 border px-3 py-1  ${
                page === num ? "border-2 text-white bg-black font-bold" : ""
              }`}
            >
              {num + 1}
            </button>
          ))}
          <select
            defaultValue={limit}
            onChange={(e) => setLimit(e.target.value)}
            className="bg-black text-white px-3 "
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>
      </div>
    );
};

export default ManageInventories;