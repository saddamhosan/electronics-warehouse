import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);
    return (
      <div className="flex justify-between mx-12">
        <div>
          <h1>Electronics</h1>
        </div>
        <ul className="flex space-x-8">
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
            {user?.uid ? (
              <>
                <button onClick={() => signOut(auth)}>Logout</button>
                <span className="ml-4">{user.displayName}</span>
              </>
            ) : (
              <NavLink to="/login">login</NavLink>
            )}
          </li>
        </ul>
      </div>
    );
};

export default Header;