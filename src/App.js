import { Routes, Route, Link } from 'react-router-dom';
import Overlooked from './components/overlooked/Overlooked';
import PricingCard from './components/pricing-card/PricingCard';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pricing-card">Pricing Card</Link>
          </li>
          <li>
            <Link to="/overlooked">Overlooked</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing-card" element={<PricingCard />} />
          <Route path="/overlooked" element={<Overlooked />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
