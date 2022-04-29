import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Footer from './Component/Shared/Footer';
import Header from './Component/Shared/Header';
import SignOut from './Component/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignOut />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
