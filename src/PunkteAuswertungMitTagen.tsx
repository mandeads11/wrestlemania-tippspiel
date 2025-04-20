import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type MatchResult = {
  match: string;
  result: string;
  day: 1 | 2;
  points: number;
};

const matchResults: MatchResult[] = [
  { match: 'Rey  vs. El Grande Americano', result: 'El Grande Americano', day: 1, points: 1 },
  { match: 'Jade Cargill vs. Naomi', result: 'Jade Cargill', day: 1, points: 1 },
  { match: 'The War Raiders vs. The New Day', result: 'The New Day', day: 1, points: 1 },
  { match: 'LA Knight vs. Jacob Fatu', result: 'Jacob Fatu', day: 1, points: 1 },
  { match: 'Gunther vs. Jey Uso', result: 'Jey Uso', day: 1, points: 1 },
  { match: 'Tiffany Stratton vs. Charlotte Flair', result: 'Tiffany Stratton', day: 1, points: 1 },
  { match: 'Roman Reigns vs. CM Punk vs. Seth Rollins', result: 'Seth Rollins', day: 1, points: 1 },
  { match: 'AJ Styles vs. Logan Paul', result: '', day: 2, points: 1 },
  { match: 'Damian Priest vs. Drew McIntyre', result: '', day: 2, points: 1 },
  { match: 'Liv Morgan & Raquel Rodriguez vs. ? & Lyra Valkyria', result: '', day: 2, points: 1 },
  { match: 'Bron Breakker vs. Penta vs. Finn Balor vs. Dominik Mysterio', result: '', day: 2, points: 1 },
  { match: 'Iyo Sky vs. Bianca Belair vs. Rhea Ripley', result: '', day: 2, points: 1 },
  { match: 'Cody Rhodes vs. John Cena', result: '', day: 2, points: 1 },
];

type UserTips = {
    [match: string]: string;
  };
  
  interface Props {
    tips: UserTips;
    userName: string;
  }
  
  const PunkteAuswertungMitTagen: React.FC<Props> = ({ tips, userName }) => {
    const groupedByDay = matchResults.reduce((acc, match) => {
      acc[match.day] = [...(acc[match.day] || []), match];
      return acc;
    }, {} as { [day: number]: MatchResult[] });
  
    let gesamtPunkte = 0;
  
    return (
      <motion.div
        className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-700">Punkteauswertung für {userName}</h2>
  
        {Object.entries(groupedByDay).map(([day, matches]) => {
          let tagPunkte = 0;
  
          const rows = matches.map((match, idx) => {
            const userTip = tips[match.match];
            const isCorrect = userTip === match.result;
            const points = isCorrect ? match.points : 0;
            tagPunkte += points;
            gesamtPunkte += points;
  
            return (
              <motion.tr
                key={match.match}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                className={clsx("border-b last:border-0", {
                  "bg-green-50": isCorrect,
                  "bg-red-50": !isCorrect,
                })}
              >
                <td className="py-2 px-2">{match.match}</td>
                <td className="py-2 px-2">{userTip || "—"}</td>
                <td className="py-2 px-2">{isCorrect ? "✅" : "❌"}</td>
                <td className="py-2 px-2 text-center font-semibold">{points}</td>
              </motion.tr>
            );
          });
  
          return (
            <div key={day} className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">🔥 Tag {day}</h3>
              <div className="overflow-auto">
                <table className="min-w-full text-sm text-left border rounded-xl overflow-hidden">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-2 px-2">Match</th>
                      <th className="py-2 px-2">Dein Tipp</th>
                      <th className="py-2 px-2">Richtig?</th>
                      <th className="py-2 px-2 text-center">Punkte</th>
                    </tr>
                  </thead>
                  <tbody>{rows}</tbody>
                  <tfoot>
                    <tr className="border-t font-bold bg-gray-50">
                      <td colSpan={3} className="py-3 px-2 text-right text-purple-800">Tag {day} Gesamt</td>
                      <td className="py-3 px-2 text-center text-purple-800">{tagPunkte}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          );
        })}
  
        <div className="text-center mt-6">
          <motion.div
            className="inline-block bg-purple-700 text-white px-6 py-3 rounded-xl text-xl font-bold shadow-md"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            🏆 Gesamtpunktzahl: {gesamtPunkte}
          </motion.div>
        </div>
      </motion.div>
    );
  };
  
  export default PunkteAuswertungMitTagen;