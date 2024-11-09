import React, { useState } from 'react';

export default function Admin() {
  const [events, setEvents] = useState([
    {
      id: 1,
      type: 'stage',
      title: 'Stage Forró avec João et Maria',
      date: '2024-11-15',
      time: '14h00 - 17h00',
      location: 'Studio de danse - 123 rue du Forró, Montpellier',
      price: '25€',
      description: 'Stage intensif de Forró'
    }
  ]);

  const [showEventForm, setShowEventForm] = useState(false);
  const [newEvent, setNewEvent] = useState({
    type: 'stage',
    title: '',
    date: '',
    time: '',
    location: '',
    price: '',
    description: ''
  });

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="bg-green-700 text-white p-4 rounded-t-lg">
          <h1 className="text-2xl font-bold">Administration Forró Clapas</h1>
          <p className="text-sm text-yellow-300">Gestion des événements et actualités</p>
        </div>
      </div>
    </div>
  );
}
