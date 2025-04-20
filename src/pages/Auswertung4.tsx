import React from "react";
import PunkteAuswertungMitTagen from "../components/PunkteAuswertungMitTagen";

// Beispiel-Tipps für Test
const testTips = {
  "Rey vs. El Grande Americano": "El Grande Americano",
  "Jade Cargill vs. Naomi": "Jade Cargill",
  "The War Raiders vs. The New Day": "The War Raiders",
  "LA Knight vs. Jacob Fatu": "LA Knight",
  "Gunther vs. Jey Uso": "Gunther",
  "Tiffany Stratton vs. Charlotte Flair": "Charlotte Flair",
  "Roman Reigns vs. CM Punk vs. Seth Rollins": "Roman Reigns",
  "AJ Styles vs. Logan Paul": "AJ Styles",
  "Damian Priest vs. Drew McIntyre": "Damian Priest",
  "Liv Morgan & Raquel Rodriguez vs. ? & Lyra Valkyria": "? & Lyra Valkyria",
  "Bron Breakker vs. Penta vs. Finn Balor vs. Dominik Mysterio": "Penta",
  "Iyo Sky vs. Bianca Belair vs. Rhea Ripley": "Rhea Ripley",
  "Cody Rhodes vs. John Cena": "John Cena",
};

const AuswertungPage = () => {
  return <PunkteAuswertungMitTagen tips={testTips} userName="Philipp" />;
};

export default AuswertungPage;
