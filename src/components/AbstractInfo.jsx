import React from 'react'
import meProfile from '../assets/meProfile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const AbstractInfo = () => {
  return (
   <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-12 bg-gray-50  bg-gradient-to-br from-blue-50 via-black to-purple-100  sm:px-6 lg:px-8">
    <div className="md:w-1/2 text-center md:text-left space-x-6">
    <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
        Hi! I am <span className="text-blue-600">Nikhil More 👋</span>
    </h1>
    <p className="text-lg text-white">
        I am a web developer with a passion for creating beautiful and functional websites. <br />
        Not only websites but I also love to create mobile apps using React Native I love to Integrate with ML and AI models.

    </p>
    <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition">
        Download CV
    </button>

    </div>
    <div className="md:w-1/2 mt-10 md:mt-0 flex flex-col items-center">
  <img
    src={meProfile}
    alt="Nikhil More"
    className="w-64 h-64 object-cover rounded-full shadow-lg"
  />

  <div className="flex space-x-6 mt-6">
    <a href="https://github.com/NikhilMore1" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithub} className="text-gray-800 text-3xl hover:text-gray-600 transition" />
    </a>
    <a href="https://www.linkedin.com/in/morenikhil123/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} className="text-blue-700 text-3xl hover:text-blue-500 transition" />
    </a>
    <a href="https://www.instagram.com/mr.nikhil_more_33/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram} className="text-pink-600 text-3xl hover:text-pink-400 transition" />
    </a>
  </div>
</div>

   </div>
  )
}

export default AbstractInfo;