import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./Global/NavBar";
import Footer from "./Global/Footer";
import SignUp from "./Global/SignUp";
import Analytics from "./Analytics/Analytics";
import LinkyByUsername from "./LinkyByUsername/LinkyByUsername";
import { Toaster } from "./components/ui/Sonner";

function App() {
  // const domain = /https:\/\/[^/]+/;
  // const basename = process.env.PUBLIC_URL.replace(domain, "");
  return (
    <div className="bg-[#F3F3F1] ">
      <Toaster />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path=":username" element={<LinkyByUsername />} />
          <Route path="analytics" element={<Analytics />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
