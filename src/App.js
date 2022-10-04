import React from 'react';
import { Outlet } from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        {/* <ImagesContainer /> */}
        <Outlet />

      </div>

      <Footer />
    </div>
  );
}

export default App;
