import React from "react";
import "./HowItWorks.css";
import Step1Img from "../assets/step1CC.png";
import Step2Img from "../assets/step2.png";
import Step3Img from "../assets/step3.png";

export default function HowItWorks() {
  const steps = [
    { src: Step1Img, alt: "Person packing a box", label: "Pack your item" },
    { src: Step2Img, alt: "Computer purchasing a label", label: "Purchase and print your label" },
    { src: Step3Img, alt: "Attaching label and dropping off", label: "Attach the label & drop off" },
  ];

  return (
    <section className="howitworks section" id="howitworks">
      <h2 className="section-header">How It Works</h2>
      <div className="steps-container">
        {steps.map((step, idx) => (
          <div className="step" key={idx}>
            <img
              src={step.src}
              alt={step.alt}
              className="step-image"
            />
            <div className="step-label">
              Step {idx + 1}: {step.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
