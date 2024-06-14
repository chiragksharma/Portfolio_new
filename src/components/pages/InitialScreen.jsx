// InitialScreen.js
import React, { useEffect, useState } from 'react';
import WordFadeIn from '../magic-ui/word-fade-in';
import './InitialScreen.css'; // Ensure you have appropriate styling

const quotes = [
  "The important thing is not to stop questioning. – Albert Einstein",
  "Be less curious about people and more curious about ideas. – Marie Curie",
  "The best in business have boundless curiosity and open minds. – Ken Robinson",
  "I have no special talents. I am only passionately curious. – Albert Einstein"
];

const InitialScreen = ({ onClose }) => {
  const [quote, setQuote] = useState('');
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
    
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1900); 

    const closeTimer = setTimeout(() => {
      onClose();
    }, 5000); 

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(closeTimer);
    };
  }, [onClose]);

  return (
    <div className={`quote-overlay ${fadeOut ? 'fade-out' : ''}`}>
      <div className="quote-modal">
        <WordFadeIn words={quote} className="quote-text" />
      </div>
    </div>
  );
};

export default InitialScreen;
