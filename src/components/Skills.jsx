import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
  faGithub,
  faGitAlt,
  faNpm,
  faBootstrap,
  faJava,
  faJira,
  faAndroid,
  faAws,
  faFigma,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';

const skills = [
  { name: 'HTML5', icon: faHtml5, color: 'text-orange-600' },
  { name: 'CSS3', icon: faCss3Alt, color: 'text-blue-600' },
  { name: 'JavaScript', icon: faJsSquare, color: 'text-yellow-500' },
  { name: 'React', icon: faReact, color: 'text-cyan-500' },
  { name: 'Node.js', icon: faNodeJs, color: 'text-green-600' },
  { name: 'Git', icon: faGitAlt, color: 'text-red-500' },
  { name: 'GitHub', icon: faGithub, color: 'text-gray-800' },
  { name: 'NPM', icon: faNpm, color: 'text-red-700' },
  { name: 'Bootstrap', icon: faBootstrap, color: 'text-purple-600' },
  { name: 'MongoDB', icon: faDatabase, color: 'text-green-700' },
  { name: 'Java', icon: faJava, color: 'text-blue-600' },
  { name: 'Jira', icon: faJira, color: 'text-red-600' },
  { name: 'Android', icon: faAndroid, color: 'text-green-600' },
  { name: 'AWS', icon: faAws, color: 'text-red-600' },
  { name: 'Server', icon: faServer, color: 'text-green-600' },
  {name:'React Native ',icon:faReact ,color:'text-cyan-500'},
  {name:'Figma',icon:faFigma,color:'text-blue-600'},
  

];

const Skills = () => {
  return (
    <div className="py-12 px-4 bg-white overflow-hidden">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">My Skills</h2>

      {/* Scrolling Container */}
      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee flex gap-10 w-max">
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="flex flex-col items-center w-24 flex-shrink-0">
              <FontAwesomeIcon icon={skill.icon} className={`text-4xl mb-2 ${skill.color}`} />
              <span className="text-sm font-medium text-gray-700">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Inline CSS for marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Skills;
