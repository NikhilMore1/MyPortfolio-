import React from 'react';
import HomeNavigation from './HomeNavigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMobileAlt,
  faCode,
  faBrain,
  faPalette,
faCloud
} from '@fortawesome/free-solid-svg-icons';

import {
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import Footer from './Footer';

const services = [
  {
    title: 'Application Dev',
    description:
      'I develop Android applications using React Native and Java J2EE with a focus on clean architecture and efficient performance. My apps are tailored to meet real-world use cases and user-centric designs. I also implement backend integration and REST APIs for dynamic functionality. With AI and ML features, I add smart capabilities to enhance the user experience.',
    icon: faMobileAlt,
    bgColor: 'bg-indigo-500',
  },
  {
    title: 'Web Development',
    description:
      'I build modern, responsive, and high-performance web applications using technologies like React.js, Node.js, and Express. My development process emphasizes speed, accessibility, and SEO-friendly structures. From landing pages to full-stack platforms, I deliver scalable and maintainable web solutions. I also use Tailwind CSS for rapid, beautiful UI design.',
    icon: faCode,
    bgColor: 'bg-blue-500',
  },
  {
    title: 'AI & ML',
    description:
      'I specialize in developing machine learning models for classification, prediction, and automation. My work includes data preprocessing, model training, and real-time inference integration. I’ve worked on healthcare-focused projects involving CNNs, ResNet, and DenseNet architectures. I ensure that each model is both accurate and production-ready.',
    icon: faBrain,
    bgColor: 'bg-purple-500',
  },
  {
    title: 'UI/UX Design',
    description:
      'I design user interfaces that are intuitive, engaging, and consistent across devices. Using Figma and Tailwind CSS, I prototype and build visually stunning components. My approach is based on user research and accessibility best practices. Every design decision is made to enhance the user journey and satisfaction.',
    icon: faPalette,
    bgColor: 'bg-pink-500',
  },
  {
    title: 'Cloud Deployment',
    description:
      'I deploy and maintain full-stack applications on cloud platforms like Netlify, Vercel, and Railway. I manage CI/CD pipelines, domain configurations, and secure environments for production. My setups support autoscaling, version control, and seamless rollback strategies. I ensure uptime, performance, and cost-efficiency.',
    icon: faCloud,
    bgColor: 'bg-cyan-500',
  },
  {
    title: 'Git & Version Control',
    description:
      'I use Git and GitHub for version control, team collaboration, and project tracking. My experience includes setting up GitHub Actions for continuous integration and deployment. I follow best practices for branching, pull requests, and code reviews. This helps in building a clean, maintainable, and traceable codebase.',
    icon: faGithub,
    bgColor: 'bg-emerald-500',
  },
];


const Services = () => {
  return (
    <>
      <div>
        <HomeNavigation />
      </div>

      <div className="w-full h-full bg-gradient-to-br from-cyan-300 via-blue-200 to-purple-200 p-4 md:p-10">
        <div className="max-w-xl mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center py-6 px-4 rounded-2xl shadow-xl">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide">My Services</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} text-white rounded-3xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300`}
            >
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={service.icon} className="text-3xl mr-4" />
                <h2 className="text-2xl font-bold">{service.title}</h2>
              </div>
              <p className="text-lg italic">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
};

export default Services;
