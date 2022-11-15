import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import NFT from "./components/NFT";
import './App.css';


function App() {
  return (
    <>
    <Routes>
      <Route  path='/' element={<Home />} />
      <Route path="/NFT" element={<NFT />} />
    </Routes>
    </>
  );
}

export default App;
