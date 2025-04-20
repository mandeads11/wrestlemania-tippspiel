import React from "react";
import PunkteAuswertungMitTagen from "../components/PunkteAuswertungMitTagen";

// Beispiel-Tipps für Test
const testTips = {
  "Rey Mysterio vs. El Grande Americano": "Rey Mysterio",
  "Jade Cargill vs. Naomi": "Naomi",
  "The War Raiders vs. The New Day": "The New Day",
  "LA Knight vs. Jacob Fatu": "LA Knight",
  "Gunther vs. Jey Uso": "Jey Uso",
  "Tiffany Stratton vs. Charlotte Flair": "Charlotte Flair",
  "Roman Reigns vs. CM Punk vs. Seth Rollins": "Seth Rollins",
  "AJ Styles vs. Logan Paul": "Logan Paul",
  "Damian Priest vs. Drew McIntyre": "Drew McIntyre",
  "Liv Morgan & Raquel Rodriguez vs. Bayley & Lyra Valkyria": "Bayley & Lyra Valkyria",
  "Bron Breakker vs. Penta vs. Finn Balor vs. Dominik Mysterio": "Finn Balor",
  "Iyo Sky vs. Bianca Belair vs. Rhea Ripley": "Rhea Ripley",
  "Cody Rhodes vs. John Cena": "Cody Rhodes",
};

const AuswertungPage = () => {
  return <PunkteAuswertungMitTagen tips={testTips} userName="Manuel" />;
};

export default AuswertungPage;
