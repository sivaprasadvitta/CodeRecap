// src/components/AnimatedLogo.jsx
import React from 'react';

const AnimatedLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className="w-12 h-12"  /* Adjust size as needed */
    >
      {/* Animated Background Circle */}
      <circle cx="100" cy="100" r="0" fill="#24292e">
        <animate attributeName="r" from="0" to="95" dur="1s" fill="freeze" />
      </circle>
      
      {/* Left Code Bracket */}
      <path
        d="M70 60 L50 100 L70 140"
        stroke="#00A3E0"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
        opacity="0"
      >
        <animate attributeName="opacity" from="0" to="1" begin="0.5s" dur="0.5s" fill="freeze" />
        <animateTransform attributeName="transform" attributeType="XML" type="translate" from="-20 0" to="0 0" begin="0.5s" dur="0.5s" fill="freeze" />
      </path>
      
      {/* Right Code Bracket */}
      <path
        d="M130 60 L150 100 L130 140"
        stroke="#00A3E0"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
        opacity="0"
      >
        <animate attributeName="opacity" from="0" to="1" begin="0.5s" dur="0.5s" fill="freeze" />
        <animateTransform attributeName="transform" attributeType="XML" type="translate" from="20 0" to="0 0" begin="0.5s" dur="0.5s" fill="freeze" />
      </path>
      
      {/* Central "CR" Text */}
      <text
        x="100"
        y="115"
        textAnchor="middle"
        fill="white"
        fontSize="48"
        fontFamily="'Courier New', Courier, monospace"
        fontWeight="bold"
        opacity="0"
      >
        CR
        <animate attributeName="opacity" from="0" to="1" begin="1s" dur="0.5s" fill="freeze" />
        <animateTransform attributeName="transform" type="scale" from="0.5" to="1" begin="1s" dur="0.5s" fill="freeze" />
      </text>
    </svg>
  );
};

export default AnimatedLogo;
