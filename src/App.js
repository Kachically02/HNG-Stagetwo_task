import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import Landingpage from './Pages/Landingpage';
import Cartpage from './Pages/Cartpage';
import Checkoutpage from './Pages/Checkoutpage';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
    <Router>
    <Navigation />
    <Routes>
      <Route path="/" exact element={<Landingpage />} />
      <Route path="/order" exact element={<Cartpage/>} />
      <Route path='/checkout' exact element={<Checkoutpage/>}/>
    </Routes>
    <Footer/>
  </Router>
    </div>
  );
}

export default App;
