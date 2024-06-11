import logo from './logo.svg';
import React,{useEffect,useState} from 'react';
import './App.css';
import Profile from './components/profile';
import Experience from './components/experience';
import Education from './components/Education';
import Projects from './components/pages/projects';
import BlogHome from './components/pages/blogs';
import Interests from './components/Interests';
import Contact from './components/pages/contact';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

import AboutMe from './components/pages/about-me';
import HeroSection from './components/hero'; // Import the HeroSection component
import HeroCard from './components/HeroCard';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/pages/home';
import Navbar from './components/Navbar'; // Import the Navbar component
import { BentoCard, BentoGrid } from "./components/magic-ui/bento-grid"; // Ensure the path is correct

function App() {
 

  return (
    <div className='app-container'>
      <div className='navbar-container'>
          <Navbar />
      </div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path='/projects' element ={<Projects/>}/>
        <Route path='/blog-home' element ={<BlogHome/>}/>
        <Route path='/contact' element ={<Contact/>}/>
    </Routes>
    </div>

    
    
  );
}

export default App;
