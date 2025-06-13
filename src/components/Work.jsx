import React, { useState } from 'react';
import HomeNavigation from './HomeNavigation';
import {
  faGithub,
  faLine,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './Footer';

// ✅ Reusable Card Component
const ProjectCard = ({ title, description, techStack, githubLink }) => {
  const [showTech, setShowTech] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-600 whitespace-pre-line">{description}</p>

      <div className="flex justify-between mt-4">
        <button
          className="px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-400 to-red-500 text-white font-medium rounded hover:bg-purple-700 transition"
          onClick={() => setShowTech(!showTech)}
        >
          <FontAwesomeIcon icon={faLine} /> Tech Stack
        </button>

        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gradient-to-r from-blue-600 via-green-400 to-black text-white font-medium rounded hover:bg-blue-700 transition"
        >
          <FontAwesomeIcon icon={faGithub} /> View Code
        </a>
      </div>

      {showTech && (
        <ul className="mt-4 bg-gray-100 rounded p-3 text-sm text-gray-700 space-y-1 animate-fade-in">
          {techStack.map((tech, index) => (
            <li key={index}>✅ {tech}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

// ✅ Main Work Component
const Work = () => {
  return (
    <>
      <div>
        <HomeNavigation />
      </div>
      <div className="w-full h-full bg-gradient-to-br from-cyan-300 via-blue-200 to-purple-200 p-4 md:p-10">
        <div className="max-w-xl mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center py-6 px-4 rounded-2xl shadow-xl">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
            My Projects 💻
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-20">
          <ProjectCard
            title="MalenoCare : Skin Cancer Detection and Guidelines Using AI and ML"
            description={`🌟 MalenoCare – Empowering Early Detection Through AI\nMalenoCare is an intelligent healthcare solution designed to detect various types of skin cancer using advanced machine learning and CNN-based models. With a focus on early diagnosis and patient awareness, MalenoCare enables faster, more accurate screening from just an image.\nOur mission is to make skin cancer detection accessible, affordable, and scalable—saving lives with every scan.`}
            techStack={[
              'Python',
              'TensorFlow',
              'CNN',
              'OpenCV',
              'Streamlit',
              'Google Colab',
            ]}
            githubLink="https://github.com/NikhilMore1/MalenoCare"
            
            
          />

          <ProjectCard
            title="E-Cart : E-commerce Website"
            description={`🛒 E-Cart – Your Smart Shopping Destination\nE-Cart is a modern, user-friendly e-commerce platform with seamless shopping. Responsive design, smooth navigation, product management, and secure checkout.`}
            techStack={[
              'React.js',
              'Node.js',
              'Express',
              'MongoDB',
              'Tailwind CSS',
              'Redux Toolkit',
            ]}
            githubLink="https://github.com/NikhilMore1/E-CART"
          />

          <ProjectCard
            title="HotelEase : Hotel Booking System"
            description={`🏨 HotelEase – Smart Hotel Booking System\nSimplified booking for travelers and hotels with real-time availability, dashboards, dynamic pricing, and automated confirmations.`}
            techStack={[
              'React.js',
              'Node.js',
              'Express',
              'MongoDB',
              'JWT Auth',
              'Tailwind CSS',
            ]}
            githubLink="https://github.com/NikhilMore1/Hotel_Management_Full_Stack"
          />

          <ProjectCard
            title="N-Contact : All-In-One Android Communication App"
            description={`📱 N-Contact – One App for All Communication\nJava-based Android app for calling, emailing, and video meetings in one seamless interface.`}
            techStack={[
              'Java',
              'XML',
              'Android Studio',
              'Firebase',
              'Google Meet API',
            ]}
            githubLink="https://github.com/NikhilMore1/nContact_Android_App"
          />

          <ProjectCard
            title="LiveChat : Real-Time Chat App"
            description={`💬 LiveChat – WebSocket-based Instant Messaging\nBuilt using WebSocket, Node.js, and React for real-time one-to-one chat with typing indicators and message delivery.`}
            techStack={[
              'React.js',
              'WebSocket',
              'Node.js',
              'Express',
              'MongoDB',
              'Socket.IO',
            ]}
            githubLink="https://github.com/NikhilMore1/ChatApp"
          />

          <ProjectCard
            title="QuizMaster : Online Quiz Web App"
            description={`🧠 QuizMaster – Interactive Quiz Platform\nFun and engaging quiz app with categories, scores, feedback, and responsive layout.`}
            techStack={[
              'React.js',
              'HTML/CSS',
              'Firebase (or localStorage)',
              'Tailwind CSS',
              'Chart.js (for score stats)',
            ]}
            githubLink="https://github.com/NikhilMore1/quiz__App"
          />
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
};

export default Work;
