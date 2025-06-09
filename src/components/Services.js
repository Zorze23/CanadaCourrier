import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

import truck from "../assets/truck.png";

export default function Services() {
  const services = [
    { label: "Here", img: truck, to: "/info" },
  ];

  return (
    <section className="services section" id="services">
      <div className="services-container">
        {services.map(({ label, img, to }) => (
          <Link key={label} to={to} className="service-link">
            <div className="service">
              <img src={img} alt={label} className="service-img" />
              <div className="service-label">{label}</div>
            </div>
          </Link>
        ))}
      </div>
      <div class="text" id="journey">
Send your package on it's journey! Click here to continue.  </div>
    </section>
  );
}
