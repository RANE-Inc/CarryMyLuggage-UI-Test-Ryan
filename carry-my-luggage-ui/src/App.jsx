import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Dashboard from './assets/Dashboard';
import Home from './assets/Home';
import Login from './assets/Login';
import Signup from './assets/Signup';
import Locations from './assets/Locations';
import Cart from './assets/Cart';
import './App.css';


function App() {

  return (

    <BrowserRouter>

      <div>

        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/Login" element = {<Login/>} />
          <Route path="/Signup" element = {<Signup/>} />
          <Route path="/Locations" element = {<Locations/>} />
          <Route path="/Dashboard" element = {<Dashboard/>} />
          <Route path="/Cart" element = {<Cart/>} />
        </Routes>

      </div>

    </BrowserRouter> 

  )
}

export default App
