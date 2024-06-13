// src/AboutMe.jsx
import React from 'react';
import Particles from '../magic-ui/particles';
import './contact.css';
import { MagicCard,MagicContainer } from '../magic-ui/magic-card';
import WordFadeIn from '../magic-ui/word-fade-in';
import { SlSocialLinkedin } from 'react-icons/sl';
import { FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import 'react-toastify/dist/ReactToastify.css';



const Contact = () => {
    const handleCopy = () => {
        console.log("Copied successfuly")
        toast.success('Email copied to clipboard', {
            position: "bottom-right",
            autoClose: 900,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        
    };
  return (
    <div className='blog-container m-5 '>
      {/* <MagicCard className="flex flex-col md:flex-row items-start md:items-center justify-around overflow-hidden p-10 shadow-2xl z-10 max-w-5xl mx-auto"> */}
        <div className='flex flex-col items-center  gap-6 max-w-5xl mx-auto'>
            <WordFadeIn words="Contact" />
        </div>
        <MagicContainer className="w-full p-4 md:p-10">
        <MagicCard
        borderWidth={3}
        className="flex flex-col md:flex-row items-center justify-between overflow-hidden z-10 max-w-5xl mx-auto p-4 md:p-10 shadow-2xl"
    >
        <div className="flex flex-col md:flex-row items-center w-full justify-between">
            <div className="contact-card-content flex flex-col md:flex-row text-center md:text-left md:ml-4 mt-4 md:mt-0">
                <h1 className="text-2xl md:text-4xl font-medium text-gray-800 dark:text-gray-200">Wanna work together?</h1>
                <div className="flex mt-4 md:mt-2 space-x-4 gap-4">
                    <a href="https://www.linkedin.com/in/chirag-kumar-sharma-5286b51b8/" target="_blank" className="outline-icon">
                        <SlSocialLinkedin className="w-6 h-6 text-gray-800 dark:text-gray-200" />
                    </a>
                    <a href="https://x.com/chirags93395286" target="_blank" className="outline-icon">
                        <FaTwitter className="w-6 h-6 text-gray-800 dark:text-gray-200" />
                    </a>
                    <CopyToClipboard text="chiragksharma15@example.com" >
                        <a className="outline-icon" style={{ cursor: 'pointer' }} onClick={handleCopy}>
                            <IoMdMail className="w-6 h-6 text-gray-800 dark:text-gray-200" />
                        </a>
                    </CopyToClipboard>
                </div>
            </div>
        </div>
        <div className="w-full text-center text-gray-500 text-sm pt-4 md:absolute md:bottom-0 md:left-0 md:w-full md:pb-4">
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
        <ToastContainer />
    </div>
  );
};

export default Contact;
