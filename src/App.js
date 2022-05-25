import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import ImagesContainer from './Images/ImagesContainer';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>

        <Routes>
          <Route path="/images" element={<ImagesContainer />} /> 
        </Routes>
        
      </div>

      <Footer />
    </div>
  );
}

export default App;
