import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";
import Like from "./pages/Like";
import Dislike from "./pages/Dislike";
import Hobby from "./pages/Hobby";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/Like" element={<Like />} />
        <Route path="/Dislike" element={<Dislike />} />
        <Route path="/Hobby" element={<Hobby />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
