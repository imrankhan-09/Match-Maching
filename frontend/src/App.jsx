// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import MeshHome from "./Componetns/MeshHome";
import './App.css'
import Profile from "./Componetns/Profile";
import RegisterForm from "./Componetns/UserData/ResisterForm";
import Login from "./Componetns/UserData/Login";


function App() {
  return (
    <Routes>
      <Route path="/home" element={<MeshHome/>} />
      <Route path="/" element={<MeshHome />} /> {/* optional default route */}
      <Route path='/profile' element={<Profile/>}/>
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={< Login/>} />
    
    
    </Routes>
  );
}

export default App;

