import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ManageInventories = () => {
  const navigate=useNavigate()
    const [products, setProducts] = useState([]);

    useEffect(() => {
      (async () => {
        const { data } = await axios.get(
          "https://enigmatic-beach-29740.herokuapp.com/products"
        );
        setProducts(data);
      })();
    }, []);

    const handleDeleteProduct=(id)=>{
      const confirm=window.confirm('are you sure you want to delete')
      if(confirm){
        const url = `https://enigmatic-beach-29740.herokuapp.com/product/${id}`;
        fetch(url, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const rest = products.filter((product) => product._id !== id);
              setProducts(rest);
              console.log("delete successfully");
            }
          });
      }
      
    }
    return (
      <div>
        <div className="flex justify-center">
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
                <th scope="col" className="px-6 py-3 text-center">
                  Delate
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <tr key={product._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {product.name}
                    </th>
                    <td className="px-6 py-4"> {product.supplier} </td>
                    <td className="px-6 py-4">{product.quantity}</td>
                    <td className="px-6 py-4">$ {product.price}</td>
                    <td className="px-6 py-4">
                      <img className="w-24" src={product.img} alt="" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => handleDeleteProduct(product._id)}
                        className="font-bold text-2xl text-red-600  hover:underline"
                      >
                        X
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

export default ManageInventories;