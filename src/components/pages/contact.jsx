// src/AboutMe.jsx
import React from 'react';
import Particles from '../magic-ui/particles';
import './contact.css';
import { MagicCard,MagicContainer } from '../magic-ui/magic-card';
import WordFadeIn from '../magic-ui/word-fade-in';

const Contact = () => {

  return (
    <div className='blog-container m-5 '>
      {/* <MagicCard className="flex flex-col md:flex-row items-start md:items-center justify-around overflow-hidden p-10 shadow-2xl z-10 max-w-5xl mx-auto"> */}
        <div className='flex flex-col items-center justify-center h-full gap-6 max-w-5xl mx-auto'>
            <WordFadeIn words="Contact" />
        </div>
        <MagicContainer className="w-full p-10">
        <MagicCard
            borderWidth={3}
            className="flex flex-col items-center md:flex-row justify-between overflow-hidden z-10 max-w-5xl mx-auto p-10 shadow-2xl"
        >
            <div className="flex flex-col md:flex-row items-center w-full justify-between">
            <div className="contact-card-content md:order-2 text-center md:text-left md:ml-4">
                <h1 className="text-4xl font-medium text-gray-800 dark:text-gray-200">Wanna work together?</h1>
                    <button className="contact-cta-button px-1 py-1 bg-gray-800 text-white rounded" >View Resume</button>
                    {/* <button onClick={() => window.location.href='mailto:your-email@gmail.com'} className="cta-button px-1 py-1 bg-gray-800 text-white rounded">your-email@gmail.com</button>
                    <button onClick={() => window.location.href='tel:+1234567890'} className="cta-button px-1 py-1 bg-gray-800 text-white rounded">+1 234-567-890</button> */}

            </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full text-center text-gray-500 text-s pb-4">
                PROMISE YOU THAT I'LL REPLY BACK WITHIN 24 HOURS.
            </div>
            </MagicCard>
        </MagicContainer>
        
        <Particles
          className="absolute inset-0 particles-container z-0"
          quantity={100}
          ease={80}
          color="#ffffff"
        />

    </div>
  );
};

export default Contact;
