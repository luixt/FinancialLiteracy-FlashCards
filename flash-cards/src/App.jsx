import { useState } from 'react'
import Card from './components/Card';
import './App.css'

const cardData = [
  // Easy Questions
  { question: "An ____ is a collection of assets traded on stock exchanges.", answer: "ETF", color: "yellowgreen" },
  { question: "What do we call the profit share from a company?", answer: "Dividend", color: "yellowgreen" },
  { question: "A loan security is known as a ____.", answer: "Bond", color: "yellowgreen" },
  { question: "Ownership in a company is called a ____.", answer: "Stock", color: "yellowgreen" },
  { question: "ROI stands for ____.", answer: "Return on Investment", color: "yellowgreen" },

  // Medium Questions
  { question: "The trend of rising prices is a ____ market.", answer: "Bull", color: "rgb(251, 251, 113)" },
  { question: "A fund pooling money for investment is a ____ fund.", answer: "Mutual", color: "rgb(251, 251, 113)" },
  { question: "What type of interest is calculated on both principal and accumulated interest?", answer: "Compound", color: "rgb(251, 251, 113)" },
  { question: "An investment fund designed to track an index is an ____ fund.", answer: "Index", color: "rgb(251, 251, 113)" },
  { question: "A numerical measure of creditworthiness is called a ____ score.", answer: "Credit", color: "rgb(251, 251, 113)" },

  // Hard Questions
  { question: "The concept where prices reflect all available information is ____.", answer: "EMH", color: "lightcoral" },
  { question: "A financial contract linked to an asset's price is a ____.", answer: "Derivative", color: "lightcoral" },
  { question: "Funds using leverage for high returns are ____ funds.", answer: "Hedge", color: "lightcoral" },
  { question: "The model to determine expected return based on risk is called ____.", answer: "CAPM", color: "lightcoral" },
  { question: "Using borrowed capital to increase returns is called ____ leverage.", answer: "Financial", color: "lightcoral" }
];

function App() {

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [shuffledCards, setShuffledCards] = useState(cardData);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const shuffleArray = (array) => {
    return array.slice().sort(() => Math.random() - 0.5);
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % shuffledCards.length);
    setUserInput('');
    setFeedback('');
  };

  const handlePreviousCard = () => {
    setCurrentCardIndex((prevIndex) => 
      (prevIndex === 0 ? shuffledCards.length - 1 : prevIndex - 1)
    );
    setUserInput('');
    setFeedback('');
  };

  const handleShuffleCard = () => {
    const shuffledArray = shuffleArray(cardData);
    setShuffledCards(shuffledArray);
    setCurrentCardIndex(0);
    setUserInput('');
    setFeedback('');
  };

  const handleChange = (e) => {
    setUserInput(e.target.value); // Update user input
  };

  const onCheckAnswer = () => {
    const correctAnswer = shuffledCards[currentCardIndex].answer.toLowerCase();
    if (userInput.trim().toLowerCase() === correctAnswer) {
      setFeedback('Correct! 🎉');
      setCurrentStreak((prev) => {
        const newStreak = prev + 1;
        setLongestStreak((prevLongest) => Math.max(prevLongest, newStreak));
        return newStreak;
      });
    } else if (userInput.trim() === '') {
      setFeedback('Please enter your guess before submitting!');
    } else {
      setFeedback('Incorrect! Try Again!');
      setCurrentStreak(0);
    }
  };

  return (
    <div className="set">
      <div className="title">
        <h1>Financial Literacy Ultimate Quiz!</h1>
        <h3>Learn the common concepts involved in the finance and accounting field! Are your ready to be a Business Owner?</h3>
        <h4>Number of flash cards: {cardData.length}</h4>
        <div className='streaks'>
          <h4>Current Streak: {currentStreak}</h4>
          <h4>Longest Streak: {longestStreak}</h4>
        </div>
      </div>
      <br></br>
      <Card 
      question={shuffledCards[currentCardIndex].question} 
      answer={shuffledCards[currentCardIndex].answer}
      color={shuffledCards[currentCardIndex].color}
      />
      <br></br>
      <div className="buttons">
        <button onClick={handlePreviousCard} type="prev">⭠</button>
        <button onClick={handleNextCard} type="next">⭢</button>
      </div>

      <div className="input-section">
        <input
          type="text"
          value={userInput}
          placeholder="Enter your guess..."
          onChange={handleChange}
          className="textbox"
        />
        <button onClick={onCheckAnswer} className="submit-button">Submit</button>
      </div>

      <div className="feedback">
        {feedback}
      </div>

      <button id="shuffle-button" onClick={handleShuffleCard} type="shuffle">🔀 Shuffle 🤡</button>
      
    </div>
  )
}

export default App
