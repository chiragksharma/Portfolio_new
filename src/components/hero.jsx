import React from 'react';
import './HeroSection.css'; // Make sure to create appropriate CSS for styling
import GridPattern from './magic-ui/grid-pattern';
import AnimatedGradientTextDemo from './SayHi';
import { NeonGradientCard } from "./magic-ui/neon-gradient-card";
import { cn } from '../lib/utils';
import WordFadeIn from './magic-ui/word-fade-in';

const HeroSection = ({ title, description, imagePath }) => {
  return (
    <header className="hero-section">
      <div className="hero-image-container">
        <NeonGradientCard className="inline-block ">
            <img src='/chirag_portfolio_image.jpeg' alt="Hero" className="hero-image" />
        </NeonGradientCard>
      </div>
      <div className="hero-content">
        {/* <h1>Welcome</h1> */}
        <WordFadeIn words="Welcome" delay={0.35}/>
        <p> Hola 👋🏻, I'm Chirag Sharma.<br/> Welcome to my personal space.</p>
      </div>
      <AnimatedGradientTextDemo/>
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
        ) }
    />
    </header>
  );
};

export default HeroSection;
