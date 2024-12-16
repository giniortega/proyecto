import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Process from './pages/Process';
import Products from './pages/Products';
import Sustainability from './pages/Sustainability';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/process" element={<Process />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      
      <Footer /> 
    </Router>
    


  );

 


}

export default App;