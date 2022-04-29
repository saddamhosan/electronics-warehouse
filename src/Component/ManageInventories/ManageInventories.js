import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageInventories = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      (async () => {
        const { data } = await axios.get(
          "https://enigmatic-beach-29740.herokuapp.com/products"
        );
        setProducts(data);
      })();
    }, []);
    return (
      
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            
            {
              products.map(product=>{
                  return (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
                      <td className="px-6 py-4 text-right">
                        <button className="font-bold text-2xl text-red-600  hover:underline">
                          X
                        </button>
                      </td>
                    </tr>
                  );
              })
         }
          </tbody>
        </table>
      </div>
    );
};

export default ManageInventories;