import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './Component/AddItem/AddItem';
import Blogs from './Component/Blogs/Blogs';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import ManageInventories from './Component/ManageInventories/ManageInventories';
import MyItem from './Component/MyItem/MyItem';
import NotFound from './Component/NotFound/NotFound';
import ProductUpdate from './Component/ProductUpdate/ProductUpdate';
import RequireAuth from './Component/RequireAuth/RequireAuth';
import Services from './Component/Services/Services';
import Footer from './Component/Shared/Footer';
import Header from './Component/Shared/Header';
import SignOut from './Component/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <ProductUpdate />
            </RequireAuth>
          }
        />
        <Route
          path="/manageInventories"
          element={
            <RequireAuth>
              <ManageInventories />
            </RequireAuth>
          }
        />
        <Route
          path="/addItem"
          element={
            <RequireAuth>
              <AddItem />
            </RequireAuth>
          }
        />
        <Route
          path="/myItems"
          element={
            <RequireAuth>
              <MyItem />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignOut />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
