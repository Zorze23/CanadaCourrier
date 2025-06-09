import React from "react";
import "./AboutUs.css";
import ImageAboutUs from "../assets/CanadianCourrierLogo.png";

export default function AboutUs() {
  return (
    <section className="about section" id="about">
      <div className="about-content">
        <img
          src={ImageAboutUs}
          alt="Canadian Courrier logo"
          className="about-placeholder"
        />

        <div className="about-text-block">
          <h2 className="about-heading">About Us</h2>
          <p className="about-text">
            Canada Courrier is an online shipping label printing. No more waiting in line, you can now
            start the journey of your shipment from the comfort of your home. We are partners with Canada Post
            with the sole purpose of facilitating postal services for canadians. Through our quick and easy
            website you can purchase your shipping labels, print it and attach it to your parcel or
             letter, before going to any Canada Post to drop it off to deliver.
            steps!
          </p>
        </div>
      </div>
    </section>
  );
}
