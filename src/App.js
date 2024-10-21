import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from './components/Create/Create';

function App() {
  return (
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="*" element={<h1>Página não encontrada!</h1>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
