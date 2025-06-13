import React from 'react'
import HomeNavigation from './HomeNavigation'
import meProfile from '../assets/meProfile.jpg';
import Footer from './Footer';
import ten_compressed from '../../public/ten_compressed.pdf';   
import result_12 from '../../public/result_12.pdf';
function About() {
  return (
  <div>
    <div>
        <HomeNavigation/>
    </div>
    <div className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 py-12 bg-gradient-to-br from-blue-50 via-black to-purple-100">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left animate-slide-in-left">
          <div className="inline-block bg-amber-400 px-6 py-2 rounded-xl mb-6 shadow-md animate-pulse-slow">
            <p className="text-2xl font-bold text-blue-800">About Me</p>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Hi! I’m <span className="text-blue-400">Nikhil More 👋</span>
          </h1>

          <p className="text-lg text-gray-100 mb-6 leading-relaxed">
            I'm a passionate <span className="font-semibold text-pink-300">Full Stack Developer</span> with strong skills in building dynamic, responsive websites and mobile apps using modern frameworks like <span className="text-blue-300">React</span>, <span className="text-green-300">React Native</span> and integrating <span className="text-purple-300">AI/ML models</span>. I love turning ideas into beautiful and efficient user experiences.
          </p>

          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:scale-105 hover:brightness-110 transition transform duration-300">
            Download CV
          </button>
        </div>

        {/* Right Profile Image */}
        <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center animate-slide-in-right">
          <img
            src={meProfile}
            alt="Nikhil More"
            className="w-72 h-72 object-cover rounded-full border-4 border-white shadow-2xl hover:scale-105 transform transition duration-500"
          />
        </div>
      </div>
 <div className="bg-gradient-to-tr from-yellow-200 via-pink-200 to-purple-200 py-12 px-4 sm:px-6 lg:px-20 rounded-3xl">
  <h1 className="text-4xl md:text-6xl italic font-extrabold text-center text-emerald-700 mb-16">
    Education 🎓
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
    
    {/* === 10th === */}
    <div className="bg-white p-6 rounded-3xl shadow-2xl w-full max-w-xs text-center transform transition duration-500 hover:scale-105 card-animation card-delay-1">
      <h2 className="text-xl font-bold text-pink-500 mb-4">10th Standard</h2>
      <p className="text-gray-700 mb-1"><span className="font-semibold">College:</span> Bhagawati Mata Vidyalaya, Ghargaon</p>
      <p className="text-gray-700 mb-1"><span className="font-semibold">Year:</span> 2019</p>
      <p className="text-gray-700 mb-4"><span className="font-semibold">Percentage:</span> 62.20%</p>
      <button className="w-full text-white font-bold py-2 px-4 rounded-xl transition duration-500 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:brightness-110">
      <a href={ten_compressed}
      download="10th result_Nikhil_More"
      style={{textDecoration:'none', color:'white'}}>download Result</a>
      </button>
    </div>

    {/* === 12th === */}
    <div className="bg-white p-6 rounded-3xl shadow-2xl w-full max-w-xs text-center transform transition duration-500 hover:scale-105 card-animation card-delay-2">
      <h2 className="text-xl font-bold text-purple-600 mb-4">12th Standard</h2>
      <p className="text-gray-700 mb-1"><span className="font-semibold">College:</span> Vidya Prabodhini Vidyalaya, Sakur</p>
      <p className="text-gray-700 mb-1"><span className="font-semibold">Year:</span> 2021</p>
      <p className="text-gray-700 mb-4"><span className="font-semibold">Percentage:</span> 82.50%</p>
      <button className="w-full text-white font-bold py-2 px-4 rounded-xl transition duration-500 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 hover:brightness-110">
        <a href={result_12}
        download="12th result_Nikhil_More"
        style={{textDecoration:'none', color:'white'}}>Download Result</a>
      </button>
    </div>

    {/* === BE === */}
    <div className="bg-white p-6 rounded-3xl shadow-2xl w-full max-w-xs text-center transform transition duration-500 hover:scale-105 card-animation card-delay-3">
      <h2 className="text-xl font-bold text-indigo-600 mb-4">B.E. in Computer Engineering</h2>
      <p className="text-gray-700 mb-1"><span className="font-semibold">College:</span> Samarth Group of Institutions, Belhe</p>
      <p className="text-gray-700 mb-1"><span className="font-semibold">University:</span> SPPU</p>
      <p className="text-gray-700 mb-1"><span className="font-semibold">Branch:</span> Computer Engineering</p>
      <p className="text-gray-700 mb-1"><span className="font-semibold">Year:</span> 2025</p>
      <p className="text-gray-700 mb-4"><span className="font-semibold">CGPA:</span> 9.40</p>
      <button className="w-full text-white font-bold py-2 px-4 rounded-xl transition duration-500 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 hover:brightness-110">
        Download Result
      </button>
    </div>

  </div>
</div>

   <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .edu-card {
          background: white;
          padding: 1.5rem;
          border-radius: 1.5rem;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          width: 100%;
          max-width: 20rem;
          text-align: center;
          transition: transform 0.5s ease;
          animation: fadeInUp 0.8s ease forwards;
        }

        .edu-card:hover {
          transform: scale(1.05);
        }

        .edu-button {
          width: 100%;
          color: white;
          font-weight: bold;
          padding: 0.5rem 1rem;
          border-radius: 1rem;
          transition: transform 0.4s ease, filter 0.4s ease;
        }

        .edu-button:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }

        .card-delay-1 {
          animation-delay: 0.2s;
        }
        .card-delay-2 {
          animation-delay: 0.4s;
        }
        .card-delay-3 {
          animation-delay: 0.6s;
        }
      `}</style>
      <div>
        <Footer/>
      </div>
  </div>
  )
}
export default About