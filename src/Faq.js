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
          question="Is this for real?"
          answer="Yes, you fucking idiot. Why else would we spend our time, money & brain power on this shitty idea for a meme coin to not get paid from it."
        />
        <FaqItem
          question="Why should I invest in Blondie when there’s thousands of other meme coins?"
          answer="First off, screw every fuckface that created a meme coin that is distracting you from wanting to invest into Blondie’s coin. Our goal is to gather hundreds of thousands of clueless investors and create a new generation of millionaires, with each rich Blondie becoming a great philanthropist with their gains and putting these old money millionaires and billionaires assholes to shame with their greediness. No other coin shares our mission. They all sit behind some phony whitepaper and act like they’re changing the world to try and convince you they’re worth your dollar. The reality is crypto investors want to make money. Do you want to be lied to or do you want to join an army of people whose only goal is to make money?"
        />
        <FaqItem
          question="Why don’t I just invest in Doge and Shiba Inu?"
          answer="If you’re okay with making 1% gains or losing all your money then yeah, invest in them. Those are dying coins no matter how their team tries to spin it. Meme coins are a joke. Don’t treat a meme coin like it’s an actual serious project that is life changing technology. You ride the coin before it gets major. Once every media outlet talks about it then you’re most likely already too late to invest and see the big gains that everyone else experienced. Get in, ride it out for a year, cash out and find another shitty coin. "
        />
        <FaqItem
          question="Why should I trust you?"
          answer="Don’t trust me. Trust the logic. If every person who visits this website or hears about this meme coin bands together for the remainder of 2024 and just invests whatever they can then there will be gains for everyone. We are talking about a minimum of 100k+ people who will have heard of this coin. But if you keep sitting on the sidelines complaining about every damn shit coin that exists then this coin will never do the magic that it can easily do. How did Doge have insane gains? Because a bunch of idiots invested in it after Musk and celebrities started supporting it. How did Shiba Inu make dumb gains within one year? Because they spammed the hell out of Twitter and hijacked every Elon Musk/Doge post and everyone decided to jump in on it. The same can happen with Blondie’s coin if you pull up your panties, wipe the cheeto stains off your fingers and buy a few of our coins instead of criticizing our wild goal of making people rich."
        />
        <FaqItem
          question="What’s your name? I don’t feel safe investing into something without knowing who you are."
          answer="If I were someone of importance I would attach my name. However, if you knew my name you still wouldn’t know me. I have no idea who you are either. And don’t bullshit me. Just because you have my name does not mean you will invest into this project. You're just nosey and looking for any reason to be a cranky naysayer. I am only willing to reveal my identity to whales, celebrities and Fortune 500 companies that want to invest and partner with Blondie’s coin. "
        />
        <FaqItem
          question="Can you promise me you won’t rug pull me?"
          answer=" pinky swear I won’t even think about a rug pull, let alone take action on doing it. In 2021  alone crypto rug pulls resulted in a loss of $2.8 billion. The crypto world is a gamble as it’s filled with a bunch of anonymous people. All those pricks who ran off with investors' money will have major karma. They can be smiling now while walking on the beach in their speedos but some major shit is going to happen to them one day. You haven’t seen a project that is as honest and upfront as Blondie’s coin. Shiba Inu was said to be a rug pull in the early stages on but then they started getting media attention and smarten the fuck up. I am already smart, I know the potential if us retards stick together and invest into one single coin."
        />
         <FaqItem
          question="Where’s your whitepaper?"
          answer="We don’t have one. We don’t need one. How much more fucking reading can you do? We are a meme coin. Our goal is to make people rich and make large charitable donations. Let’s not make this more difficult than it needs to be. Pony the fuck up, invest in what you’re willing to lose, be patient and HOLD until you see astronomical gains."
        />
        {/* Add more FAQ items as needed */}
      </div>
    </div>
  );
};

export default FAQ;
