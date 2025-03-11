// src/components/AnimatedLoginSvg.jsx
import React from 'react';

const SadEmoji = () => {
    return (
        <div className=''>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100 " className="w-48 h-24 mx-auto mb-4">
                <circle cx="50" cy="50" r="40" fill="#1a1a2e" />
                <circle cx="35" cy="40" r="5" fill="#00A3E0" />
                <circle cx="65" cy="40" r="5" fill="#00A3E0" />
                <path d="M35 65 Q50 50 65 65" stroke="#00A3E0" stroke-width="4" fill="none" stroke-linecap="round" />
            </svg>

        </div>
    );
};

export default SadEmoji;







