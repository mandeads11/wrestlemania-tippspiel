import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

interface Prediction {
  name: string;
  picks: string[];
  bonus: string;
  created_at: string;
}

export default function Leaderboard() {
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPredictions = async () => {
      const { data, error } = await supabase
        .from('predictions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Fehler beim Laden des Leaderboards:', error);
      } else {
        setPredictions(data as Prediction[]);
      }

      setLoading(false);
    };

    fetchPredictions();
  }, []);

  const getBadgeColor = (index: number) => {
    switch (index) {
      case 0: return "bg-yellow-300 text-black"; // 🥇
      case 1: return "bg-gray-300 text-black";   // 🥈
      case 2: return "bg-orange-400 text-white"; // 🥉
      default: return "bg-blue-100 text-blue-800";
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-extrabold text-center mb-8">🏆 Leaderboard</h2>

      {loading ? (
        <p className="text-center text-gray-500">Lade Teilnehmer...</p>
      ) : predictions.length === 0 ? (
        <p className="text-center text-gray-500">Es wurden noch keine Tipps abgegeben.</p>
      ) : (
        <div className="space-y-4">
          {predictions.map((prediction, index) => (
            <div
              key={index}
              className={`flex items-center justify-between border rounded-xl p-4 shadow-md bg-white ${index < 3 ? 'ring-2 ring-offset-2' : ''}`}
            >
              <div className="flex items-center gap-4">
                <div className={`text-sm px-3 py-1 rounded-full font-bold ${getBadgeColor(index)}`}>
                  #{index + 1}
                </div>
                <div>
                  <p className="text-lg font-semibold">{prediction.name}</p>
                  <p className="text-sm text-gray-500">
                    Abgegeben: {new Date(prediction.created_at).toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">{prediction.picks.length} Tipps</p>
                <p className="text-sm text-gray-500 italic">
                  Bonus: {prediction.bonus || '–'}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
