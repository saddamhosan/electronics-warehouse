import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Footer from './Component/Shared/Footer';
import Header from './Component/Shared/Header';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
