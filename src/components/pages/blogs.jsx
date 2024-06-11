// src/AboutMe.jsx
import React from 'react';
import Particles from '../magic-ui/particles';
import './blog.css';
import { MagicCard,MagicContainer } from '../magic-ui/magic-card';
import WordFadeIn from '../magic-ui/word-fade-in';

const BlogHome = () => {

  return (
    <div className='blog-container m-5 '>
      {/* <MagicCard className="flex flex-col md:flex-row items-start md:items-center justify-around overflow-hidden p-10 shadow-2xl z-10 max-w-5xl mx-auto"> */}
        <div className='flex flex-col items-center justify-center h-full gap-6 max-w-5xl mx-auto'>
            <img src="/waiting_memoji_2.svg" alt="smiling memoji" className="w-42 h-42" />
            <WordFadeIn words="Welcome to my knowledge garden 🪴" />
            <p className="text-gray-400">Coming soon....</p>
        </div>
        <Particles
          className="absolute inset-0 particles-container z-0"
          quantity={100}
          ease={80}
          color="#ffffff"
        />

    </div>
  );
};

export default BlogHome;
