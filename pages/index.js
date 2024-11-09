import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
// Suite du code précédent...

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

const ForroApp = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [participations, setParticipations] = useState({});
  const [notifications, setNotifications] = useState({});

  const events = {
    '2024-11-15': { 
      id: 1,
      type: 'stage', 
      title: 'Stage Forró avec João et Maria',
      color: 'bg-red-500',
      description: 'Stage intensif de Forró avec les professeurs João et Maria directement venus du Brésil. Niveau intermédiaire/avancé.',
      location: 'Studio de danse - 123 rue du Forró, Montpellier',
      time: '14h00 - 17h00',
      price: '25€'
    },
    '2024-11-10': { 
      id: 2,
      type: 'soiree', 
      title: 'Soirée Pratique & Auberge Espagnole',
      color: 'bg-green-500',
      description: 'Pratique libre avec DJ Beto aux platines. Venez avec un plat ou une boisson à partager !',
      location: 'Salle principale - MJC Centre, Montpellier',
      time: '20h30 - 00h00',
      price: '5€'
    }
  };
const news = [
    {
      id: 1,
      title: "Nouveau cours débutant !",
      date: "5 novembre 2024",
      content: "Rejoignez-nous tous les lundis pour notre nouveau cours débutant ! Une occasion parfaite pour découvrir le Forró dans une ambiance chaleureuse et bienveillante."
    },
    {
      id: 2,
      title: "Festival de printemps 2025",
      date: "1 novembre 2024",
      content: "Save the date : 15-17 Mars 2025. Au programme : stages avec des professeurs internationaux, bal et concerts live. Un week-end complet dédié au Forró !"
    }
  ];

  const handleParticipation = (eventId) => {
    setParticipations(prev => ({
      ...prev,
      [eventId]: !prev[eventId]
    }));
  };

  const handleNotificationChange = (eventId, timing) => {
    setNotifications(prev => ({
      ...prev,
      [eventId]: {
        ...(prev[eventId] || {}),
        [timing]: !(prev[eventId]?.[timing])
      }
    }));
  };

  const renderCalendarDays = () => {
    const days = [];
    const dayNames = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

    dayNames.forEach(day => {
      days.push(
        <div key={`header-${day}`} className="p-2 text-center font-bold text-green-700">
          {day}
        </div>
      );
    });

    for (let i = 1; i <= 30; i++) {
      const dateStr = `2024-11-${i.toString().padStart(2, '0')}`;
      const event = events[dateStr];

      days.push(
        <div 
          key={i}
          className={`p-4 border border-gray-100 relative cursor-pointer hover:bg-gray-50
            ${selectedDate === dateStr ? 'bg-yellow-50' : ''}
            ${event && participations[event.id] ? 'bg-green-100 bg-opacity-50' : ''}`}
          onClick={() => setSelectedDate(dateStr)}
        >
          <span>{i}</span>
          {event && (
            <div className={`absolute bottom-1 right-1 w-3 h-3 rounded-full ${event.color}`}></div>
          )}
        </div>
      );
    }

    return days;
  };
// [Je vais couper le code ici car il est très long]
// Voulez-vous que je vous envoie la suite ?
return (
    <div className="max-w-4xl mx-auto p-4">
      <Card className="bg-blue-50 shadow-lg">
        <CardHeader className="bg-green-700 text-white rounded-t-lg py-3">
          <CardTitle className="flex items-center gap-3">
            <Logo />
            <div className="flex flex-col">
              <span className="text-2xl font-bold">Forró Clapas</span>
              <span className="text-sm text-yellow-300">Association de Forró de Montpellier</span>
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent className="p-4">
          <Tabs defaultValue="calendar" className="space-y-4">
            <TabsList className="w-full bg-green-100">
              <TabsTrigger 
                value="calendar" 
                className="flex-1 data-[state=active]:bg-green-700 data-[state=active]:text-white"
              >
                Calendrier
              </TabsTrigger>
              <TabsTrigger 
                value="news" 
                className="flex-1 data-[state=active]:bg-green-700 data-[state=active]:text-white"
              >
                Actu Forró Clapas
              </TabsTrigger>
            </TabsList>

            <TabsContent value="calendar" className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <button className="p-2 hover:bg-green-100 rounded">
                  <ChevronLeft className="w-6 h-6 text-green-700" />
                </button>
                <h2 className="text-xl font-bold text-green-700">
                  Novembre 2024
                </h2>
                <button className="p-2 hover:bg-green-100 rounded">
                  <ChevronRight className="w-6 h-6 text-green-700" />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1">
                {renderCalendarDays()}
              </div>
{selectedDate && events[selectedDate] && (
                <div className="mt-4 p-4 bg-white rounded-lg shadow-md space-y-4">
                  <h3 className="text-xl font-bold text-green-700 border-b pb-2">
                    {events[selectedDate].title}
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 text-green-700 mt-0.5">⏰</div>
                      <div>
                        <p className="font-medium">Horaire</p>
                        <p className="text-gray-600">{events[selectedDate].time}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 text-green-700 mt-0.5">📍</div>
                      <div>
                        <p className="font-medium">Lieu</p>
                        <p className="text-gray-600">{events[selectedDate].location}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 text-green-700 mt-0.5">💰</div>
                      <div>
                        <p className="font-medium">Tarif</p>
                        <p className="text-gray-600">{events[selectedDate].price}</p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="font-medium mb-1">Description</p>
                      <p className="text-gray-600 leading-relaxed">
                        {events[selectedDate].description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg mt-4">
                      <div className="flex items-center gap-2">
                        <span>Je participe</span>
                      </div>
                      <Switch
                        checked={participations[events[selectedDate].id]}
                        onCheckedChange={() => handleParticipation(events[selectedDate].id)}
                      />
                    </div>

                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-medium">Me notifier</span>
                      </div>
                      <div className="space-y-2 pl-7">
                        <div className="flex items-center gap-2">
                          <Checkbox 
                            id={`notify-3days-${events[selectedDate].id}`}
                            checked={notifications[events[selectedDate].id]?.threeDays}
                            onCheckedChange={() => handleNotificationChange(events[selectedDate].id, 'threeDays')}
                          />
                          <label htmlFor={`notify-3days-${events[selectedDate].id}`}>
                            3 jours avant
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Checkbox 
                            id={`notify-1day-${events[selectedDate].id}`}
                            checked={notifications[events[selectedDate].id]?.oneDay}
                            onCheckedChange={() => handleNotificationChange(events[selectedDate].id, 'oneDay')}
                          />
                          <label htmlFor={`notify-1day-${events[selectedDate].id}`}>
                            La veille
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Checkbox 
                            id={`notify-sameday-${events[selectedDate].id}`}
                            checked={notifications[events[selectedDate].id]?.sameDay}
                            onCheckedChange={() => handleNotificationChange(events[selectedDate].id, 'sameDay')}
                          />
                          <label htmlFor={`notify-sameday-${events[selectedDate].id}`}>
                            Le jour même
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-4 flex gap-4 flex-wrap bg-white p-3 rounded-lg shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-sm">Stage</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span className="text-sm">Festival</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm">Soirée</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm">Autre</span>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="news">
              <div className="space-y-4">
                {news.map(item => (
                  <Card key={item.id} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-green-700">{item.title}</CardTitle>
                      <p className="text-sm text-gray-500">{item.date}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{item.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForroApp;
