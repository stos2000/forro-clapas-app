import React, { useState } from 'react';

const Logo = () => (
  <svg width="50" height="50" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="48" fill="#009c3b" />
    <circle cx="50" cy="50" r="44" fill="#ffd700" />
    <text 
      x="50" 
      y="65" 
      textAnchor="middle" 
      fill="#009c3b" 
      fontSize="24"
      fontWeight="bold"
      fontFamily="Arial"
    >
      FC
    </text>
  </svg>
);

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="bg-green-700 text-white rounded-t-lg p-4">
          <div className="flex items-center gap-3">
            <Logo />
            <div className="flex flex-col">
              <span className="text-2xl font-bold">Forró Clapas</span>
              <span className="text-sm text-yellow-300">Association de Forró de Montpellier</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
