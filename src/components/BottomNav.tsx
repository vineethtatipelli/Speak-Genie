import { Link, useLocation } from "react-router-dom";

export default function BottomNav() {
  const location = useLocation();
  const active = location.pathname;

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] bg-white border rounded-2xl shadow-sm p-3 flex justify-between">
      <Link
        to="/home"
        className={`flex flex-col items-center text-xs ${
          active === "/home" ? "text-green-600" : ""
        }`}
      >
        <div className="w-7 h-7 rounded-full bg-green-50 flex items-center justify-center">
          🏠
        </div>
        Home
      </Link>

      <Link
        to="/now"
        className={`flex flex-col items-center text-xs ${
          active === "/now" ? "text-green-600" : ""
        }`}
      >
        <div className="w-7 h-7 rounded-full bg-green-50 flex items-center justify-center">
          🎧
        </div>
        Now
      </Link>

      <Link
        to="/quiz"
        className={`flex flex-col items-center text-xs ${
          active === "/quiz" ? "text-green-600" : ""
        }`}
      >
        <div className="w-7 h-7 rounded-full bg-green-50 flex items-center justify-center">
          📝
        </div>
        Quiz
      </Link>
    </nav>
  );
}
