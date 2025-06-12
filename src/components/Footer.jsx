import { Link } from 'react-router-dom';
import logo from '../assets/meProfile.jpg'; // Replace with your actual logo
import {
 faMailchimp,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-950 via-purple-900 to-black text-white px-6 py-12 animate-fade-up">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

        {/* Logo + Tagline */}
        <div className="flex flex-col items-center md:items-start space-y-2">
         <h1 className="text-white text-2xl font-bold ">Nikhil More 👋</h1>
          
          <p className="text-sm text-gray-300">Welcome to my portfolio!</p>
        </div>

        {/* Quick Navigation */}
        <div>
          <p className="text-lg font-bold mb-3">Quick Links</p>
          <ul className="space-y-1 text-sm text-gray-300">
        <li>  <Link to="/" className="hover:text-gray-300 transition-all duration-300 hover:scale-110">Home</Link></li>
        <li><Link to="/About" className="hover:text-gray-300 transition-all duration-300 hover:scale-110">About</Link></li>
        <li><Link to="/Work" className="hover:text-gray-300 transition-all duration-300 hover:scale-110">Work</Link></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <p className="text-lg font-bold mb-3">Connect With Me</p>
          <div className="flex justify-center md:justify-start gap-4 text-2xl">
            <a href="https://github.com/NikhilMore1" target="_blank" rel="noreferrer" className="hover:text-gray-300 transition-all duration-300 hover:scale-110">
            <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/morenikhil123/" target="_blank" rel="noreferrer" className="hover:text-gray-300 transition-all duration-300 hover:scale-110">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="mailto:moren9817@gmail.com" className="hover:text-gray-300 transition-all duration-300 hover:scale-110">
             <FontAwesomeIcon icon={faMailchimp} />
            </a>
            <a href="tel:+919876543210" className="hover:text-gray-300 transition-all duration-300 hover:scale-110">
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Nikhil More. All rights reserved.
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fadeUp 1s ease-out forwards;
        }
      `}</style>
    </footer>
  );
}
