import React from "react";
import Home from "./screen/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./screen/Contact";

const App = () => {
  return (
<BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/contact" element={<ContactPage />}></Route>
   </Routes>
</BrowserRouter>
  )
};

export default App;
