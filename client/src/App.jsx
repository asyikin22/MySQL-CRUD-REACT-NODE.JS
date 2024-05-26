import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./pages/Books";
import Insert from "./pages/Insert";
import Update from "./pages/Update";

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/insert" element={<Insert />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>  
    </div>
  )
  
}

export default App

