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
  "Roman Reigns vs. CM Punk vs. Seth Rollins": "Seth Rollins",
  "AJ Styles vs. Logan Paul": "AJ Styles",
  "Damian Priest vs. Drew McIntyre": "Drew McIntyre",
  "Liv Morgan & Raquel Rodriguez vs. ? & Lyra Valkyria": "? & Lyra Valkyria",
  "Bron Breakker vs. Penta vs. Finn Balor vs. Dominik Mysterio": "Penta",
  "Iyo Sky vs. Bianca Belair vs. Rhea Ripley": "Rhea Ripley",
  "Cody Rhodes vs. John Cena": "Cody Rhodes",
};

const AuswertungPage = () => {
  return <PunkteAuswertungMitTagen tips={testTips} userName="Wilhelm" />;
};

export default AuswertungPage;
