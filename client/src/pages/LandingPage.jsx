import React from 'react';
import BackgroundSvg from '../components/BackgroundSvg';

const LandingPage = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] overflow-hidden text-white">
      <div className="mb-8">
        <BackgroundSvg />
      </div>
      
      <div className="text-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to CodeRecap</h1>
        <p className="text-xl md:text-2xl mt-4">
          Your personal hub for revisiting and mastering coding problems.
        </p>
        <blockquote className="mt-6 italic text-lg md:text-lg text-gray-300">
          "Solving the problems is not enough; revising them is most important. CodeRecap helps you review and reinforce the problems you've solved."
        </blockquote>
      </div>
    </div>
  );
};

export default LandingPage;
