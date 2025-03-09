import React from "react";
import Home from "./screen/Home";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
<BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />}></Route>
    {/* <Route path="/about" element={<About />}></Route> */}
    <Route path="/contact" element={<ContactForm />}></Route>
    {/* <Route path="/login" element={<Login />}></Route> */}
   </Routes>
</BrowserRouter>
  )
};

export default App;
