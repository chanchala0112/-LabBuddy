import Header from '../components/Header';
import "../styles/Home.css";
import scienceIllustration from "../assets/science-illustration.webp";


const Home = () => {
  return (
    <div>
      <Header />

      {/* Hero Section */}

      <section class="hero">
        <div class="hero-content">
          <h1>Organize Your Virtual Science Labs Easily!</h1>
          <p>Create, store, and explore science lab reports with ease.</p>
          <p class="sub-info">
            LabBuddy is your all-in-one platform for virtual lab work — from documenting experiments to 
            running simulations and sharing findings with classmates or instructors. 
            Accessible anywhere, anytime.
          </p>
          <ul class="hero-features">
            <li>✔ Save unlimited lab reports securely</li>
            <li>✔ Run interactive experiment simulations</li>
            <li>✔ Collaborate with classmates in real-time</li>
            <li>✔ Export results as PDF for easy submission</li>
          </ul>
          <div class="hero-buttons">
            <a href="#register" class="btn btn-green">Get Started</a>
            <a href="#demo" class="btn btn-white">Watch Demo</a>
          </div>
        </div>

        <div class="hero-image">
          <img src={scienceIllustration} alt="Science Lab Illustration" />
          <div class="floating-elements">
            <img src="images/test-tube.png" alt="Test Tube" class="float-item" />
            <img src="images/molecule.png" alt="Molecule" class="float-item" />
          </div>
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
