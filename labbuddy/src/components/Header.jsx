import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="bg-blue-800 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">LabBuddy</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/features" className="hover:underline">Features</Link>
          <Link to="/simulations" className="hover:underline">Simulations</Link>
          <Link to="/lab-tips" className="hover:underline">Lab Tips</Link>
          <Link to="/login" className="bg-white text-blue-800 px-3 py-1 rounded">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
