import React from 'react'

function BackgroundSvg() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            className="w-48 h-48 mx-auto"  // adjust size as needed
        >
            {/* Animated Background Circle */}
            <circle cx="100" cy="100" r="0" fill="#24292e">
                {/* Animate from 0 to 95, hold, then back to 0 over 4s */}
                <animate
                    attributeName="r"
                    values="0;95;95;0"
                    keyTimes="0;0.6;0.8;1"
                    dur="4s"
                    repeatCount="indefinite"
                />
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
                {/* Opacity animation: fade in, hold, fade out */}
                <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.4;0.8;1"
                    begin="0.5s"
                    dur="4s"
                    repeatCount="indefinite"
                />
                {/* Translate animation: move from -20 to 0, hold, reset */}
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="-20 0;0 0;0 0;-20 0"
                    keyTimes="0;0.4;0.8;1"
                    begin="0.5s"
                    dur="4s"
                    repeatCount="indefinite"
                />
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
                {/* Opacity animation for right bracket */}
                <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.4;0.8;1"
                    begin="0.5s"
                    dur="4s"
                    repeatCount="indefinite"
                />
                {/* Translate animation for right bracket */}
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="20 0;0 0;0 0;20 0"
                    keyTimes="0;0.4;0.8;1"
                    begin="0.5s"
                    dur="4s"
                    repeatCount="indefinite"
                />
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
                {/* Fade in, hold, fade out for text */}
                <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.4;0.8;1"
                    begin="1s"
                    dur="5s"
                    repeatCount="indefinite"
                />
                {/* Scale animation: scale up then back down */}
                <animateTransform
                    // attributeName="transform"
                    type="scale"
                    values="0.5;1;1;0.5"
                    keyTimes="0;0.4;0.8;1"
                    begin="1s"
                    dur="5s"
                    repeatCount="indefinite"
                />
            </text>
        </svg>
    )
}

export default BackgroundSvg