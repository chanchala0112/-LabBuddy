import Header from '../components/Header';
import './Home.css';
import "../styles/global.css";


const Home = () => {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="bg-blue-100 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Organize Your Virtual Science Labs Easily!</h2>
        <p className="mb-6 text-lg text-gray-700">Create, store, and explore science lab reports with ease.</p>
        <div className="space-x-4">
          <a href="/login" className="bg-blue-800 text-white px-6 py-2 rounded">Get Started</a>
          <a href="#simulations" className="bg-white text-blue-800 border px-6 py-2 rounded">Watch Demo</a>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white text-center">
        <h3 className="text-3xl font-bold mb-8">Why LabBuddy?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {["Create Reports", "Download PDF", "Watch Simulations", "Secure Login"].map((feature, index) => (
            <div key={index} className="border p-6 rounded shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold">{feature}</h4>
              <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        © 2025 LabBuddy. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
