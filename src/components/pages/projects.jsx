// src/Projects.jsx
import React from 'react';
import Particles from '../magic-ui/particles';
import './projects.css';
import { MagicCard, MagicContainer } from '../magic-ui/magic-card';
import { Sparkles, SquareArrowOutUpRight } from 'lucide-react';
import ShinyButton from '../magic-ui/shiny-button';

const Projects = () => {
  return (
    <div className='about-me-page-container m-5'>
      <MagicContainer className="w-full p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MagicCard
            borderWidth={3}
            className="flex flex-col cursor-pointer justify-between overflow-visible z-10 max-w-full p-4 shadow-2xl transition-transform transform hover:scale-105"
          >
            <a href="https://easeai.site/en/" target="_blank" rel="noopener noreferrer" className="flex flex-col justify-between h-full">
              <div className="flex items-center justify-start gap-4">
                <h1 className="text-2xl font-medium text-white">Ease AI</h1>
                <Sparkles fill="#850dfd" color="#850dfd" strokeWidth={1.5} absoluteStrokeWidth />
              </div>
              <p className="text-white mt-2">
                This is a description for card 1. Here you can include additional information.
              </p>
              <div className="relative mt-4">
                <img
                  src="/projects-images/ease_ai_project1.png"
                  alt="Card 1"
                  className="w-full h-64 object-cover rounded-xl transition-transform transform hover:scale-100"
                />
              </div>
            </a>
          </MagicCard>
          <MagicCard
            borderWidth={3}
            className="flex flex-col cursor-pointer justify-between overflow-visible z-10 max-w-full p-4 shadow-2xl transition-transform transform hover:scale-105"
          >
            <a href="https://github.com/chiragksharma/chat-with-pdfs" target="_blank" rel="noopener noreferrer" className="flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-start gap-4">
                  <h1 className="text-2xl font-medium text-white">Pdf Summarizer</h1>
                  <SquareArrowOutUpRight color="white" />
                </div>
                <p className="text-white mt-2">
                  This is a description for card 2. Here you can include additional information.
                </p>
              </div>
              <img
                src="/projects-images/pdf_summarizer_poject2.png"
                alt="Card 2"
                className="w-full h-64 object-cover rounded-xl transition-transform transform hover:scale-100"
              />
            </a>
          </MagicCard>
          <MagicCard
            borderWidth={3}
            className="flex flex-col cursor-pointer justify-between overflow-visible z-10 max-w-full p-4 shadow-2xl transition-transform transform hover:scale-105"
          >
            <a href="https://vibrant-new.vercel.app" target="_blank" rel="noopener noreferrer" className="flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-start gap-4">
                  <h1 className="text-2xl font-medium text-white">Vibrant Ecommerce store</h1>
                  <SquareArrowOutUpRight color="white" />
                </div>
                <p className="text-white mt-2">
                  This is a description for card 3. Here you can include additional information.
                </p>
              </div>
              <img
                src="/projects-images/ecommerce_project3.png"
                alt="Card 3"
                className="w-full h-64 object-cover rounded-xl transition-transform transform hover:scale-100"
              />
            </a>
          </MagicCard>
          <MagicCard
            borderWidth={3}
            className="flex flex-col cursor-pointer justify-between overflow-visible z-10 max-w-full p-4 shadow-2xl transition-transform transform hover:scale-105"
          >
            <a href="https://chiragksharma-stock-prediction-app-2r6lp8.streamlit.app" target="_blank" rel="noopener noreferrer" className="flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-start gap-4">
                  <h1 className="text-2xl font-medium text-white">Stock Prediction webapp</h1>
                  <SquareArrowOutUpRight color="white" />
                </div>
                <p className="text-white mt-2">
                  This is a description for card 4. Here you can include additional information.
                </p>
              </div>
              <img
                src="/projects-images/stock_prediction_project4.png"
                alt="Card 4"
                className="w-full h-64 object-cover rounded-xl transition-transform transform hover:scale-100"
              />
            </a>
          </MagicCard>
          <MagicCard
            borderWidth={3}
            className="flex flex-col cursor-pointer justify-between overflow-visible z-10 max-w-full p-4 shadow-2xl transition-transform transform hover:scale-105"
          >
            <a href="https://github.com/chiragksharma/QR_Code_SD" target="_blank" rel="noopener noreferrer" className="flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-start gap-4">
                  <h1 className="text-2xl font-medium text-white">AI QR code generator</h1>
                  <SquareArrowOutUpRight color="white" />
                </div>
                <p className="text-white mt-2">
                  This is a description for card 5. Here you can include additional information.
                </p>
              </div>
              <img
                src="/projects-images/qrcode_ai_project5.jpg"
                alt="Card 5"
                className="w-full h-64 object-cover rounded-xl transition-transform transform hover:scale-100"
              />
            </a>
          </MagicCard>
          <MagicCard
            borderWidth={3}
            className="flex flex-col cursor-pointer justify-between overflow-visible z-10 max-w-full p-4 shadow-2xl transition-transform transform hover:scale-105"
          >
            <a href="https://github.com/chiragksharma/Book-recomendation-system" target="_blank" rel="noopener noreferrer" className="flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-start gap-4">
                  <h1 className="text-2xl font-medium text-white">Book Recommend System</h1>
                  <SquareArrowOutUpRight color="white" />
                </div>
                <p className="text-white mt-2">
                  This is a description for card 6. Here you can include additional information.
                </p>
              </div>
              <img
                src="/projects-images/Book_recommendation_project6.png"
                alt="Card 6"
                className="w-full h-64 object-cover rounded-xl transition-transform transform hover:scale-100"
              />
            </a>
          </MagicCard>
        </div>
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

export default Projects;
