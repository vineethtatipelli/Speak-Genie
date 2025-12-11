import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import NowPlaying from "./pages/NowPlaying";
import CraftQuiz from "./pages/CraftQuiz";
import BottomNav from "./components/BottomNav";

export default function App() {
  return (
    <Router>
      <div className="max-w-md mx-auto min-h-screen relative pb-24">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/now" element={<NowPlaying />} />
          <Route path="/quiz" element={<CraftQuiz />} />
        </Routes>

        {/* Bottom Navigation */}
        <BottomNav />
      </div>
    </Router>
  );
}
