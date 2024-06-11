import React,{useEffect,useState} from 'react';
import './home.css';

import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

import HeroSection from '../hero'; // Import the HeroSection component
import HeroCard from '../HeroCard';
import { BrowserRouter } from 'react-router-dom';
import { BentoCard,BentoGrid } from '../magic-ui/bento-grid'; // Ensure the path is correct


function Home() {
    const [data, setData] = useState(null);
    const [heroContent, setHeroContent] = useState({ 
      title: "Welcome", 
      description: "Hey 👋🏼, I'm Chirag Sharma, Full stack AI developer", 
      imagePath: "/chirag_portfolio_image.jpeg",
      buttonText: 'Resume',
      path: '/about-me',
    });
    const [isHovered, setIsHovered] = useState(false);
  
  
    useEffect(() => {
      fetch('/data.json')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);
  
    if (!data) return <div>Loading...</div>;
  
    const handleCardHover = (title, description, imagePath,buttonText,path) => {
      setHeroContent({ title, description, imagePath,buttonText,path });
      setIsHovered(true);
    };
  
    const handleCardMouseLeave = () => {
      setIsHovered(false);
    };
    const renderBentoCard = (name, className, background, Icon, description, href, cta,path) => (
      <div 
        // onMouseEnter={() => handleCardHover(name, description, href)}
        // onMouseLeave={handleCardMouseLeave}
        onClick={() => handleCardHover(name, description, href,cta,path)}
        className='bento-card-container hover:shadow-xl transition-shadow duration-300 ease-in-out ${className} rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out'
        style={{ height: 'fit-content' }}
     >
      <BentoCard
        name={name}
        className={className}
        background={background}
        Icon={Icon}
        description={description}
        href={href}
        cta={cta}
      />
      </div>
  
    );
  
    return (
      <div className='home-container'>
       
        <div className='hero-container-section'>
        {isHovered ? (
          <HeroCard 
            title={heroContent.title}
            description={heroContent.description}
            image={heroContent.imagePath}
            buttonText={heroContent.buttonText}
            path={heroContent.path}
            className="visible"
  
          />
        ) : (
          <HeroSection 
            title={heroContent.title} 
            description={heroContent.description} 
            imagePath={heroContent.image} 
          />
        )}
        </div>
        
        <BentoGrid className='bento-grid-container'>
         {renderBentoCard(
          "About Me",
          "additional-class-names",
          <div style={{ backgroundColor: 'lightblue', height: '100%' }}></div>,
          () => <img src="/about_me.svg" className='bento-card-icon' alt="Icon" />,
          "Hey there, I'm Chirag, a Full stack devloper who likes to build things on the internet. ",
          "/card-images/about_me_image_2.jpeg",
          "Resume",
          "/about-me"
        )}
        {renderBentoCard(
          "Projects",
          "additional-class-names",
          <div style={{ backgroundColor: 'lightcoral', height: '100%' }}></div>,
          () => <img src="/projects-icon.svg" className='bento-card-icon' alt="Profile Icon" />,
          "I created projects Related to Full stack apps and ai apps",
          "/card-images/apollo_projects_2.png",
          "View Projects",
          "/projects"
        )}
        {renderBentoCard(
          "Experience",
          "additional-class-names",
          <div style={{ backgroundColor: 'lightgreen', height: '100%' }}></div>,
          () => <img src="/experience_icon.svg" className='bento-card-icon' alt="Experience icon" />,
          "I have experience of making full stack apps and expierence as a ML engineer",
          "/card-images/apollo_experience_3.png",
          "Experience",
          "/experience"
        )}
      </BentoGrid>
     
      
      </div>
      
    );
  }
  
  export default Home;