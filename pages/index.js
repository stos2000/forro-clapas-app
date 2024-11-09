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
  const [selectedDate, setSelectedDate] = useState(null);

  const events = {
    '2024-11-15': { 
      id: 1,
      type: 'stage', 
      title: 'Stage Forró avec João et Maria',
      color: 'bg-red-500',
      description: 'Stage intensif de Forró',
      location: 'Studio de danse',
      time: '14h00 - 17h00',
      price: '25€'
    },
    '2024-11-10': { 
      type: 'soiree', 
      title: 'Soirée Pratique',
      color: 'bg-green-500',
      description: 'Pratique libre avec DJ Beto',
      location: 'Salle principale',
      time: '20h30 - 00h00',
      price: '5€'
    }
  };

  const renderCalendarDays = () => {
    co
