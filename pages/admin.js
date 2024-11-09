import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plus, Trash, Edit, Save } from 'lucide-react';

const AdminInterface = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      type: 'stage',
      title: 'Stage Forró avec João et Maria',
      date: '2024-11-15',
      time: '14h00 - 17h00',
      location: 'Studio de danse - 123 rue du Forró, Montpellier',
      price: '25€',
      description: 'Stage intensif de Forró avec les professeurs João et Maria directement venus du Brésil.'
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
  const [news, setNews] = useState([
    {
      id: 1,
      title: 'Nouveau cours débutant !',
      date: '2024-11-05',
      content: 'Rejoignez-nous tous les lundis pour notre nouveau cours débutant !'
    }
  ]);
  
  const [showNewsForm, setShowNewsForm] = useState(false);
  const [newNews, setNewNews] = useState({
    title: '',
    content: ''
  });

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card>
        <CardHeader className="bg-green-700 text-white">
          <CardTitle className="flex items-center justify-between">
            <span>Administration Forró Clapas</span>
            <span className="text-sm">Connecté en tant qu'administrateur</span>
          </CardTitle>
        </CardHeader>

        <CardContent className="p-4">
          <Tabs defaultValue="events">
            <TabsList className="w-full mb-4">
              <TabsTrigger value="events">Gestion des Événements</TabsTrigger>
              <TabsTrigger value="news">Gestion des Actualités</TabsTrigger>
            </TabsList>

            <TabsContent value="events">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Événements</h2>
                  <Button 
                    onClick={() => setShowEventForm(true)}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Ajouter un événement
                  </Button>
                </div>
 {showEventForm && (
                  <Card className="p-4 border border-green-200">
                    <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Type</label>
                          <select 
                            className="w-full p-2 border rounded"
                            value={newEvent.type}
                            onChange={(e) => setNewEvent({...newEvent, type: e.target.value})}
                          >
                            <option value="stage">Stage</option>
                            <option value="soiree">Soirée</option>
                            <option value="festival">Festival</option>
                            <option value="autre">Autre</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Titre</label>
                          <input 
                            type="text" 
                            className="w-full p-2 border rounded"
                            value={newEvent.title}
                            onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Date</label>
                          <input 
                            type="date" 
                            className="w-full p-2 border rounded"
                            value={newEvent.date}
                            onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Horaire</label>
                          <input 
                            type="text" 
                            className="w-full p-2 border rounded"
                            placeholder="ex: 14h00 - 17h00"
                            value={newEvent.time}
                            onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">Lieu</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border rounded"
                          value={newEvent.location}
                          onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">Prix</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border rounded"
                          placeholder="ex: 25€"
                          value={newEvent.price}
                          onChange={(e) => setNewEvent({...newEvent, price: e.target.value})}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">Description</label>
                        <textarea 
                          className="w-full p-2 border rounded"
                          rows={4}
                          value={newEvent.description}
                          onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                        />
                      </div> 
<div className="flex justify-end gap-2">
                        <Button 
                          type="button" 
                          variant="outline"
                          onClick={() => setShowEventForm(false)}
                        >
                          Annuler
                        </Button>
                        <Button 
                          type="submit"
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <Save className="w-4 h-4 mr-2" />
                          Enregistrer
                        </Button>
                      </div>
                    </form>
                  </Card>
                )}

                {/* Liste des événements */}
                <div className="space-y-4">
                  {events.map(event => (
                    <Card key={event.id} className="p-4">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-bold text-lg">{event.title}</h3>
                          <p className="text-sm text-gray-600">
                            {new Date(event.date).toLocaleDateString('fr-FR')} • {event.time}
                          </p>
                          <p className="text-sm text-gray-600">{event.location}</p>
                          <p className="mt-2">{event.description}</p>
                          <p className="mt-2 font-bold">{event.price}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600">
                            <Trash className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
<div className="flex justify-end gap-2">
                        <Button 
                          type="button" 
                          variant="outline"
                          onClick={() => setShowEventForm(false)}
                        >
                          Annuler
                        </Button>
                        <Button 
                          type="submit"
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <Save className="w-4 h-4 mr-2" />
                          Enregistrer
                        </Button>
                      </div>
                    </form>
                  </Card>
                )}

                {/* Liste des événements */}
                <div className="space-y-4">
                  {events.map(event => (
                    <Card key={event.id} className="p-4">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-bold text-lg">{event.title}</h3>
                          <p className="text-sm text-gray-600">
                            {new Date(event.date).toLocaleDateString('fr-FR')} • {event.time}
                          </p>
                          <p className="text-sm text-gray-600">{event.location}</p>
                          <p className="mt-2">{event.description}</p>
                          <p className="mt-2 font-bold">{event.price}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600">
                            <Trash className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
<TabsContent value="news">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Actualités</h2>
                  <Button 
                    onClick={() => setShowNewsForm(true)}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Ajouter une actualité
                  </Button>
                </div>

                {showNewsForm && (
                  <Card className="p-4 border border-green-200">
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Titre</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border rounded"
                          value={newNews.title}
                          onChange={(e) => setNewNews({...newNews, title: e.target.value})}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">Contenu</label>
                        <textarea 
                          className="w-full p-2 border rounded"
                          rows={6}
                          value={newNews.content}
                          onChange={(e) => setNewNews({...newNews, content: e.target.value})}
                        />
                      </div>

                      <div className="flex justify-end gap-2">
                        <Button 
                          type="button" 
                          variant="outline"
                          onClick={() => setShowNewsForm(false)}
                        >
                          Annuler
                        </Button>
                        <Button 
                          type="submit"
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <Save className="w-4 h-4 mr-2" />
                          Publier
                        </Button>
                      </div>
                    </form>
                  </Card>
                )}

                {/* Liste des actualités */}
                <div className="space-y-4">
                  {news.map(item => (
                    <Card key={item.id} className="p-4">
                      <div className="flex justify-between">
                        <div className="flex-grow">
                          <h3 className="font-bold text-lg">{item.title}</h3>
                          <p className="text-sm text-gray-600">{item.date}</p>
                          <p className="mt-2">{item.content}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600">
                            <Trash className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminInterface;

  
