import React from "react";
import PunkteAuswertungMitTagen from "../components/PunkteAuswertungMitTagen";

// Beispiel-Tipps für Test
const testTips = {
  "Rey vs. El Grande Americano": "El Grande Americano",
  "Jade Cargill vs. Naomi": "Jade Cargill",
  "The War Raiders vs. The New Day": "The War Raiders",
  "LA Knight vs. Jacob Fatu": "LA Knight",
  "Gunther vs. Jey Uso": "Jey Uso",
  "Tiffany Stratton vs. Charlotte Flair": "Tiffany Stratton",
  "Roman Reigns vs. CM Punk vs. Seth Rollins": "CM Punk",
  "AJ Styles vs. Logan Paul": "Logan Paul",
  "Damian Priest vs. Drew McIntyre": "Damian Priest",
  "Liv Morgan & Raquel Rodriguez vs. ? & Lyra Valkyria": "? & Lyra Valkyria",
  "Bron Breakker vs. Penta vs. Finn Balor vs. Dominik Mysterio": "Dominik Mysterio",
  "Iyo Sky vs. Bianca Belair vs. Rhea Ripley": "Iyo Sky",
  "Cody Rhodes vs. John Cena": "Cody Rhodes",
};

const AuswertungPage = () => {
  return <PunkteAuswertungMitTagen tips={testTips} userName="Dario" />;
};

export default AuswertungPage;
