import { useState } from 'react'
import Card from './components/Card';
import './App.css'

const cardData = [
  // Easy Questions
  { question: "What is a Stock in the Market?", answer: "A stock represents a share in the ownership of a company.", color: "yellowgreen" },
  { question: "What is an ETF?", answer: "An ETF is a collection of assets traded on stock exchanges, similar to stocks.", color: "yellowgreen" },
  { question: "What is a Dividend?", answer: "A dividend is a portion of a company's earnings distributed to shareholders.", color: "yellowgreen" },
  { question: "What is a Bond?", answer: "A bond is a fixed income investment where an investor loans money to an entity at a fixed interest rate.", color: "yellowgreen" },
  { question: "What does ROI stand for?", answer: "ROI stands for Return on Investment, a measure of the profitability of an investment.", color: "yellowgreen" },

  // Medium Questions
  { question: "What is the difference between a Bull Market and a Bear Market?", answer: "A bull market is characterized by rising prices, while a bear market is marked by declining prices.", color: "rgb(251, 251, 113)" },
  { question: "What is a Mutual Fund?", answer: "A mutual fund pools money from investors to invest in a diversified portfolio of stocks, bonds, or other securities.", color: "rgb(251, 251, 113)" },
  { question: "What is Compound Interest?", answer: "Compound interest is the interest on both the initial principal and the accumulated interest.", color: "rgb(251, 251, 113)" },
  { question: "What is an Index Fund?", answer: "An index fund is a mutual fund or ETF designed to track a specified index.", color: "rgb(251, 251, 113)" },
  { question: "What is a Credit Score?", answer: "A credit score is a numerical representation of a person's creditworthiness, based on their credit history.", color: "rgb(251, 251, 113)" },

  // Hard Questions
  { question: "What is the Efficient Market Hypothesis (EMH)?", answer: "EMH suggests that asset prices reflect all available information, making it impossible to consistently achieve higher returns than the average market.", color: "lightcoral" },
  { question: "What is a Derivative?", answer: "A derivative is a financial contract whose value is linked to the price of an underlying asset, such as stocks or bonds.", color: "lightcoral" },
  { question: "What are Hedge Funds?", answer: "Hedge funds are investment funds that employ strategies to produce high returns, often using leverage and short-selling.", color: "lightcoral" },
  { question: "What is a Capital Asset Pricing Model (CAPM)?", answer: "CAPM is a model used to determine the expected return on an investment based on its risk compared to the overall market.", color: "lightcoral" },
  { question: "What is Financial Leverage?", answer: "Financial leverage refers to the use of borrowed capital to increase the potential return of an investment.", color: "lightcoral" }
];

function App() {

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  return (
    <div className="set">
      <div className="title">
        <h1>Financial Literacy Ultimate Quiz!</h1>
        <h3>Learn the common concepts involved in the finance and accounting field! Are your ready to be a Business Owner?</h3>
        <h4>Number of flash cards: {cardData.length}</h4>
      </div>
      <Card 
      question={cardData[currentCardIndex].question} 
      answer={cardData[currentCardIndex].answer}
      color={cardData[currentCardIndex].color} 
      />
      <br></br>
      <button onClick={handleNextCard} type="next">⭢</button>
    </div>
  )
}

export default App
