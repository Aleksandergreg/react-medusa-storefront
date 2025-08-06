import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Productlist from './components/Productlist';
import ProductDetail from './components/ProductDetail';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              My Fake Store
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<Productlist />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="*" element={<div>404 Not Found!</div>} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;