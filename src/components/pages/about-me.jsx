// src/AboutMe.jsx
import React from 'react';
import Particles from '../magic-ui/particles';
import './about-me.css';
import { MagicCard,MagicContainer } from '../magic-ui/magic-card';
import ShinyButton from '../magic-ui/shiny-button';

const AboutMe = () => {

  return (
    <div className='about-me-page-container'>
      {/* <MagicCard className="flex flex-col md:flex-row items-start md:items-center justify-around overflow-hidden p-10 shadow-2xl z-10 max-w-5xl mx-auto"> */}
      <MagicContainer className="w-full p-10">
      <MagicCard
        borderWidth={3}
        className="flex flex-col items-start md:flex-row md:items-center justify-around overflow-hidden z-10 max-w-5xl mx-auto p-4 shadow-2xl"
      >

        <div className="about-me-card-content">
          <div className="text-content">
            <div className='text-content-container'>
                <h1 className="text-4xl font-medium  text-gray-200">About Me</h1>
                <p className="text-gray-400">I'm Chirag Sharma, an AI engineer with a passion for creating things online,I love diving into the world of large language models (LLMs) and integrating them into web apps.
                Always updating myself with the latest in AI, I'm here to make tech more intuitive and fun. </p>
            </div>
            {/* <button className="cta-button mt-4 px-4 py-2 bg-purple-500 text-white rounded">Get Started</button> */}
            <a href="https://drive.google.com/file/d/1imeCPTNySYHwWdYCDhBqGRLMMV9D0azA/view?usp=sharing" target='_blank'>
              <ShinyButton text="Resume" className="mt-4 resume-shiny-button" />;
            </a>
          </div>
          <div className="image-content mt-10 md:mt-0 rounded-md ">
            <img src="/card-images/about_me_image_2.jpeg" alt="Company Logo" className="company-logo w-full md:w-4/5 h-60 md:h-80 rounded-md" />
          </div>
        </div>
      </MagicCard>
      </MagicContainer>
      {/* <h1>About Me</h1>
      <p>This is the about me page. Here you can include information about yourself.</p>
      Add more content as needed */}
        <Particles
          className="absolute inset-0 particles-container z-0"
          quantity={100}
          ease={80}
          color="#ffffff"
        />

    </div>
  );
};

export default AboutMe;
