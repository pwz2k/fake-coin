import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import "./fonts.css";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const contentHeight = answerRef.current.scrollHeight;
      answerRef.current.style.maxHeight = `${contentHeight}px`;
    } else {
      // Set max-height to a larger value when closing
      answerRef.current.style.maxHeight = "500px"; // You can adjust this value
      // Delay setting maxHeight to 0 to allow smooth transition
      setTimeout(() => {
        answerRef.current.style.maxHeight = "0";
      }, 0);
    }
  }, [isOpen]);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-item ${isOpen ? "active" : ""}`}>
      <div
        className={`faq-question ${isOpen ? "active" : ""}`}
        onClick={toggleAnswer}
      >
        {question}
        <span className={`toggle-sign ${isOpen ? "active" : ""}`}>
          {isOpen ? "-" : "+"}
        </span>
      </div>
      <div
        ref={answerRef}
        className={`faq-answer ${isOpen ? "active" : ""}`}
        style={{ transition: "max-height 0.5s ease-in-out" }}
      >
        {answer}
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="faq-container">
      <div className="faq-main">
        <div className="faq-title">
          <p>FAQ</p>
        </div>
        <FaqItem
          question="What is $CMCDOGE ?"
          answer="fake is a token on the Binance Smart Chain that never stops growing through TRUE deflationary techniques and further income generation for its ecosystem."
        />
        <FaqItem
          question="What are the tokenomics ?"
          answer="fake is a token on the Binance Smart Chain that never stops growing through TRUE deflationary techniques and further income generation for its ecosystem."
        />
        <FaqItem
          question="What are the long-term goals of Fakecoin ?"
          answer="fake is a token on the Binance Smart Chain that never stops growing through TRUE deflationary techniques and further income generation for its ecosystem."
        />
        <FaqItem
          question="When did $Fakecoin launch ?"
          answer="fake is a token on the Binance Smart Chain that never stops growing through TRUE deflationary techniques and further income generation for its ecosystem."
        />
        <FaqItem
          question="Is $Fakecoin safe ?"
          answer="fake is a token on the Binance Smart Chain that never stops growing through TRUE deflationary techniques and further income generation for its ecosystem."
        />
        <FaqItem
          question="What is the $Fakecoin contract address ?"
          answer="fake is a token on the Binance Smart Chain that never stops growing through TRUE deflationary techniques and further income generation for its ecosystem."
        />
        {/* Add more FAQ items as needed */}
      </div>
    </div>
  );
};

export default FAQ;
