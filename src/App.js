import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Metabnb from "./components/Metabnb";
import './App.css';


function App() {
  return (
    <>
    <Routes>
      <Route  path='/' element={<Home />} />
      <Route path="/metabnb" element={<Metabnb />} />
    </Routes>
    </>
  );
}

export default App;
