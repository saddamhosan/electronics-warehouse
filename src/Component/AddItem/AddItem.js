import axios from "axios";
import React from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const AddItem = () => {
    const [user]=useAuthState(auth)
    const navigate=useNavigate()
  const handleAddItem = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email=e.target.email.value
    const img = e.target.img.value;
    const description = e.target.description.value;
    const supplier = e.target.supplier.value;
    const quantity = e.target.quantity.value;
    const price = e.target.price.value;
    const newItem = { name,email, img, description, supplier, quantity, price };
    console.log(newItem);
    axios.post("https://enigmatic-beach-29740.herokuapp.com/product", newItem).then((result) => {
      if (result.status === 200) {
        toast.success("Added successfully",{id:'add'});
        e.target.reset();
        navigate('/myItems')
      }
    });
  };

  return (
    <div className=" bg-slate-100 py-10">
      <div className="w-11/12 md:w-2/3 mx-auto border border-black py-10 rounded-2xl font-serif">
        <p className="text-center text-3xl text-blue-500 font-bold mb-4">
          Add new product
        </p>
        <form onSubmit={handleAddItem}>
          <input
            className="block border w-10/12 my-3 p-2 rounded-xl mx-auto"
            required
            type="text"
            name="name"
            placeholder="Product Name"
          />
          <input
            className="block border w-10/12 my-3 p-2 rounded-xl mx-auto"
            required
            type="email"
            name="email"
            placeholder="Email"
            value={user?.email}
            readOnly
            disabled
          />
          <input
            className="block border w-10/12 my-3 p-2 rounded-xl mx-auto"
            required
            type="text"
            name="img"
            placeholder="Product Image url"
          />
          <textarea
            className="block border w-10/12 my-3 p-2 rounded-xl mx-auto"
            required
            type="text"
            name="description"
            placeholder="Description"
          />
          <input
            className="block border w-10/12 my-3 p-2 rounded-xl mx-auto"
            required
            type="text"
            name="supplier"
            placeholder="Supplier"
          />
          <input
            className="block border w-10/12 my-3 p-2 rounded-xl mx-auto"
            required
            type="number"
            name="quantity"
            placeholder="Quantity"
          />
          <input
            className="block border w-10/12 my-3 p-2 rounded-xl mx-auto"
            required
            type="number"
            name="price"
            placeholder="Price"
          />
          <div className="flex justify-center pt-4">
            <input
              className="rounded-xl bg-blue-500 text-white text-xl font-bold px-6 py-2"
              type="submit"
              value="Add New Item"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
