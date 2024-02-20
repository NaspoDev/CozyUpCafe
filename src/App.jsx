import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import "./css/App.css";
import { useEffect } from "react";

function App() {
  const location = useLocation(); // react-router-dom hook to get the current location.

  // Scroll to top of page when navigating to a new page.
  useEffect(() => {
    // behavior: "instant" scrolls to the top instantly (without animation).
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
