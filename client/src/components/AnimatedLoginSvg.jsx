// src/components/AnimatedLoginSvg.jsx
import React from 'react';

const AnimatedLoginSvg = () => {
  return (
    <div className=''>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 100" className="w-48 h-24 mx-auto mb-4">
        <circle cx="75" cy="50" r="40" fill="#1a1a2e" />

        <circle cx="55" cy="40" r="5" fill="#00A3E0">
          <animate attributeName="r" values="5;0;5" keyTimes="0;0.5;1" dur="4s" repeatCount="indefinite" />
        </circle>

        <circle cx="95" cy="40" r="5" fill="#00A3E0">
          <animate attributeName="r" values="5;0;5" keyTimes="0;0.5;1" dur="4s" begin="0.2s" repeatCount="indefinite" />
        </circle>

        <path d="M55 60 Q75 75 95 60" stroke="#00A3E0" stroke-width="4" fill="none" stroke-linecap="round" />
      </svg>

    </div>
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 100 100"
    //   className="w-20 h-20 mx-auto mb-4"
    // >
    //   <circle cx="50" cy="50" r="40" fill="none" stroke="#00A3E0" strokeWidth="5">
    //     <animateTransform 
    //       attributeName="transform" 
    //       attributeType="XML"
    //       type="rotate" 
    //       from="0 50 50" 
    //       to="360 50 50" 
    //       begin="0s" 
    //       dur="2s" 
    //       repeatCount="indefinite" 
    //     />
    //   </circle>
    // </svg>
  );
};

export default AnimatedLoginSvg;
