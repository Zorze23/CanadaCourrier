import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar      from "./components/Navbar";
import Hero        from "./components/Hero";
import AboutUs     from "./components/AboutUs";
import HowItWorks  from "./components/HowItWorks";
import Services    from "./components/Services";

import Info        from "./pages/Info";
import Payment     from "./pages/Payment";
import Completion  from "./Completion";
import Contact from "./components/contact";

function App() {
  return (
    <Router>
      

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar/>
              <Hero />
              <AboutUs />
              <HowItWorks />
              <Services />
              <Contact/>

            </>
          }
        />

        <Route path="/info" element={<Info/>} />

        <Route path="/payment" element={<Payment />} />

        <Route path="/completion" element={<Completion />} />
      </Routes>
    </Router>
  );
}


export default App;