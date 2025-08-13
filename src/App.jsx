import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Productlist from './components/Productlist';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <Router>
      <header className="bg-gray-800 text-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <h1 className="text-xl font-semibold">
              <Link to="/" className="hover:text-gray-300">
                My Fake Store
              </Link>
            </h1>
          </div>
        </div>
      </header>
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Productlist />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="*" element={<div>404 Not Found!</div>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;