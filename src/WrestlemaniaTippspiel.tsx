// WrestlemaniaTippspiel.tsx

import { useState } from 'react';
import { supabase } from './supabaseClient'; // Supabase-Verbindung hier importieren
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';

const matches = [
  'Rey Mysterio vs. El Grande Americano',
  'Jade Cargill vs. Naomi',
  'The War Raiders vs. The New Day',
  'LA Knight vs. Jacob Fatu',
  'Gunther vs. Jey Uso',
  'Tiffany Stratton vs. Charlotte Flair',
  'Roman Reigns vs. CM Punk vs. Seth Rollins',
  'AJ Styles vs. Logan Paul',
  'Damian Priest vs. Drew McIntyre',
  'Liv Morgan & Raquel Rodriguez vs. Bayley & Lyra Valkyria',
  'Bron Breakker vs. Penta vs. Finn Balor vs. Dominik Mysterio',
  'Iyo Sky vs. Bianca Belair vs. Rhea Ripley',
  'Cody Rhodes vs. John Cena',
];

export default function WrestlemaniaTippspiel() {
  const [name, setName] = useState('');
  const [picks, setPicks] = useState<string[]>(Array(matches.length).fill(''));
  const [bonus, setBonus] = useState('');

  const handlePickChange = (index: number, value: string) => {
    const newPicks = [...picks];
    newPicks[index] = value;
    setPicks(newPicks);
  };

  const handleSubmit = async () => {
    if (!name || picks.includes('')) {
      alert('Bitte gib deinen Namen ein und tippe alle Matches!');
      return;
    }

    const payload = {
      name,
      picks,
      bonus,
      created_at: new Date().toISOString(),
    };

    const { data, error } = await supabase.from('predictions').insert([payload]);

    if (error) {
      console.error('Fehler beim Absenden:', error);
      alert('❌ Es gab ein Problem. Bitte versuch es nochmal.');
    } else {
      alert('✅ Tipps erfolgreich gespeichert!');
      setName('');
      setPicks(Array(matches.length).fill(''));
      setBonus('');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      <h1 className="text-3xl font-bold text-center">🏆 WrestleMania 41 Tippspiel</h1>

      <Input
        placeholder="Dein Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {matches.map((match, index) => (
        <Card key={index}>
          <CardContent className="p-4">
            <p className="font-semibold">{match}</p>
            <Input
              placeholder="Dein Tipp"
              value={picks[index]}
              onChange={(e) => handlePickChange(index, e.target.value)}
            />
          </CardContent>
        </Card>
      ))}

      <Card>
        <CardContent className="p-4">
          <p className="font-semibold">Bonusfrage: Wer ist der Gegner von Randy Orton?</p>
          <Input
            placeholder="Dein Tipp"
            value={bonus}
            onChange={(e) => setBonus(e.target.value)}
          />
        </CardContent>
      </Card>

      <Button className="w-full" onClick={handleSubmit}>
        Tipps absenden
      </Button>
    </div>
  );
}
