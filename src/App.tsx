import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WrestlemaniaTippspiel from "./WrestlemaniaTippspiel";
import Leaderboard from "./Leaderboard";
import Auswertung from "./pages/Auswertung";
import Auswertung2 from "./pages/Auswertung2";
import Auswertung3 from "./pages/Auswertung3";
import Auswertung4 from "./pages/Auswertung4";
import Auswertung5 from "./pages/Auswertung5";

function App() {
  return (
    <Router>
      <div className="p-4 space-y-8">
        {/* Navigation Buttons */}
        <nav className="space-x-4 mb-4">
          <Link to="/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Home
            </button>
          </Link>
          <Link to="/auswertung/manuel">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            Manuel
            </button>
          </Link>
          <Link to="/auswertung/michael">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              Michael
            </button>
          </Link>
          <Link to="/auswertung/dario">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              Dario
            </button>
          </Link>
          <Link to="/auswertung/philipp">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              Philipp
            </button>
          </Link>
          <Link to="/auswertung/wilhelm">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              Wilhelm
            </button>
          </Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <WrestlemaniaTippspiel />
                <Leaderboard />
              </>
            }
          />
          <Route path="/" element={<WrestlemaniaTippspiel />} />
          <Route path="/auswertung/manuel" element={<Auswertung />} />
          <Route path="/auswertung/michael" element={<Auswertung2 />} />
          <Route path="/auswertung/dario" element={<Auswertung3 />} />
          <Route path="/auswertung/philipp" element={<Auswertung4 />} />
          <Route path="/auswertung/wilhelm" element={<Auswertung5 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;