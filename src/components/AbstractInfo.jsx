import React from 'react'
import meProfile from '../assets/meProfile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Resume_Nikhil_More from '../../public/Resume_Nikhil_More.pdf';
const AbstractInfo = () => {
  return (
   <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-12 bg-gray-50  bg-gradient-to-br from-blue-50 via-black to-purple-100  sm:px-6 lg:px-8">
    <div className="md:w-1/2 text-center md:text-left space-x-6">
    <h1
  style={{
    fontSize: '2.5rem', // default for mobile
    fontWeight: '700',
    color: '#1F2937', // Tailwind's text-gray-800
    textAlign: 'center',
    marginBottom: '1rem',
    lineHeight: '1.3',
  }}
>
  Hi! I am{' '}
  <span
    style={{
      display: 'inline-block',
      color: '#2dd4bf', // Tailwind's text-teal-400
      fontWeight: 'bolder',
      fontSize: '3rem',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      borderRight: '2px solid #2dd4bf',
      animation: 'typing 2s steps(14, end) forwards, blink 0.8s step-end infinite',
    }}
  >
    Nikhil More 👋
  </span>

  <style>
    {`
      @keyframes typing {
        from { width: 0 }
        to { width: 14ch }
      }
      @keyframes blink {
        0%, 100% { border-color: transparent }
        50% { border-color: #2dd4bf }
      }

      @media (min-width: 768px) {
        h1 {
          font-size: 3rem;
        }
        h1 span {
          font-size: 3.5rem;
        }
      }
    `}
  </style>
</h1>

 <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 text-white text-center space-y-6">
  <p className="text-lg md:text-xl leading-relaxed">
    I am a passionate <strong>Full-Stack Web Developer</strong> who thrives on crafting beautiful, responsive, and scalable websites using technologies like <strong>React.js</strong>, <strong>Node.js</strong>, and <strong>Tailwind CSS</strong>.
  </p>

  <p className="text-lg md:text-xl leading-relaxed">
    Beyond web development, I have a deep enthusiasm for building <strong>cross-platform mobile apps</strong> using <strong>React Native</strong> and <strong>Java (J2EE)</strong>.
  </p>

  <p className="text-lg md:text-xl leading-relaxed">
    I love integrating intelligent features using <strong>Machine Learning</strong> and <strong>AI models</strong> to create smart and user-aware systems.
  </p>

  <p className="text-lg md:text-xl leading-relaxed">
    I have also worked on real-world healthcare applications, data-driven dashboards, and cloud deployment using <strong>Netlify</strong>, <strong>Vercel</strong>, and <strong>Railway</strong>.
  </p>

  <p className="text-lg md:text-xl leading-relaxed">
    Version control and collaboration are key parts of my workflow — I follow clean Git practices and CI/CD integration.
  </p>

  <p className="text-lg md:text-xl leading-relaxed">
    I'm constantly exploring the latest trends in technology, aiming to build innovative solutions that make a real impact.
  </p>
</div>

    <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition">
      <a href={Resume_Nikhil_More}
      download="Nikhil_More_Resume"
      className="bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
      style={{ textDecoration: 'none'}}>Doewnload Resume</a>
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