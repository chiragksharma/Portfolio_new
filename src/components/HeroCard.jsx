import React from 'react';
import './HeroCard.css'; // Make sure to create appropriate CSS for styling
import { useNavigate } from 'react-router-dom';
import ShineBorder from './magic-ui/shine-border';

const HeroCard = ({ title, description, image, buttonText, path }) => {
    const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(path);
  };
    return (
    <div className="hero-card">
      <div className="hero-card-content">
        <h1>{title}</h1>
        <p>{description}</p>
        <button className="cta-button" onClick={handleButtonClick}>{buttonText}</button>
      </div>
      <div className="hero-card-image">
        <img src={image} alt="Hero" />
      </div>
    </div>

  );
};

export default HeroCard;
