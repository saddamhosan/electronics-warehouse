import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
      <div className='flex justify-between mx-12'>
        <div>
          <h1>Electronics</h1>
        </div>
        <ul className='flex space-x-8'>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/manageItems">Manage Items</NavLink>
          </li>
          <li>
            <NavLink to="/addItem">Add Item</NavLink>
          </li>
          <li>
            <NavLink to="/myItems">My Items</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </div>
    );
};

export default Header;