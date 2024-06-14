import React, { useEffect, useState, useRef } from 'react';
import './home.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HeroSection from '../hero'; // Import the HeroSection component
import HeroCard from '../HeroCard';
import { BentoCard, BentoGrid } from '../magic-ui/bento-grid'; // Ensure the path is correct
import InitialScreen from './InitialScreen';

function Home() {
    const [data, setData] = useState(null);
    const [heroContent, setHeroContent] = useState({
        title: "Welcome",
        description: "Hola 👋🏼, I'm Chirag Sharma, Welcome to my personal space. On the interweb.",
        imagePath: "/chirag_portfolio_image.jpeg",
        buttonText: 'Resume',
        path: '/about-me',
    });
    const heroSectionRef = useRef(null);
    const [isClicked, setIsClicked] = useState(false);
    const [showInitialScreen, setShowInitialScreen] = useState(true);

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => setData(data));

        const timer = setTimeout(() => {
            setShowInitialScreen(false);
        }, 10000); // 10 seconds

        return () => clearTimeout(timer);
    }, []);

    if (!data) return <div>Loading...</div>;

    const renderCard = (title, description, imgSrc, path, isExternal = false) => {
        if (isExternal) {
            return (
                <a href="https://drive.google.com/file/d/1imeCPTNySYHwWdYCDhBqGRLMMV9D0azA/view?usp=sharing"  target="_blank" rel="noopener noreferrer" className="card">
                    <div className='card-content'>
                        <img src={imgSrc} alt={title} />
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                </a>
            );
        }
    
        return (
            <Link to={path} className="card">
                <div className='card-content'>
                    <img src={imgSrc} alt={title} />
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </Link>
        );
    };

    return (
        <div className='home-container'>
            {showInitialScreen && <InitialScreen onClose={() => setShowInitialScreen(false)} />}

            <div ref={heroSectionRef} className={`hero-container-section ${isClicked ? 'visible' : ''}`}>
                <HeroSection 
                    title={heroContent.title} 
                    description={heroContent.description} 
                    imagePath={heroContent.imagePath} 
                />
            </div>

            <div className="container">
                {renderCard(
                    "About Me",
                    "I'm a curious developer who likes to build things on the internet ",
                    "/about_me.svg",
                    "/about-me"
                )}
                {renderCard(
                    "Projects",
                    "I created projects related to full stack webapps and AI apps.",
                    "/projects-icon.svg",
                    "/projects"
                )}
                {renderCard(
                "Experience",
                "I have experience in making full stack webapps and in AI/ML as well",
                "/experience_icon.svg",
                "/experience",
                true
                )}

            </div>
        </div>
    );
}

export default Home;
