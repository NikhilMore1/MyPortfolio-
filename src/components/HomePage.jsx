import React from "react";
import HomeNavigation from "./HomeNavigation";
import AbstractInfo from "./AbstractInfo";
import Skills from "./Skills";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-black to-purple-100 px-4 sm:px-6 lg:px-8">
      <header className="py-6 shadow-md bg-black rounded-b-2xl">
  <HomeNavigation />
      </header>
      <div>
        <AbstractInfo/>
      </div>
      <div>
        <Skills/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default HomePage;
