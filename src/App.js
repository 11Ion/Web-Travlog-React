import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home";
import Page404 from "./pages/page404";
import "./style/style.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<Page404/>} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
