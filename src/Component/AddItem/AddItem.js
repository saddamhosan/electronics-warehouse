import axios from "axios";
import React from "react";

const AddItem = () => {
  const handleAddItem = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const img = e.target.img.value;
    const description = e.target.description.value;
    const supplier = e.target.supplier.value;
    const quantity = e.target.quantity.value;
    const price = e.target.price.value;
    const newItem = { name, img, description, supplier, quantity, price };
    console.log(newItem);
    axios.post("https://enigmatic-beach-29740.herokuapp.com/product", newItem).then((result) => {
      if (result.status === 200) {
        console.log("Added successfully");
        e.target.reset();
      }
    });
  };

  return (
    <div className="w-2/3 mx-auto border my-20 py-10 rounded-2xl">
      <form onSubmit={handleAddItem}>
        <input
          className="block border w-10/12 my-3 p-2 rounded-xl mx-auto"
          required
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="block border w-10/12 my-3 p-2 rounded-xl mx-auto"
          required
          type="text"
          name="img"
          placeholder="Image"
        />
        <input
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
  );
};

export default AddItem;
