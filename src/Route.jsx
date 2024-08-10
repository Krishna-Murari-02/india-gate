import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Layout from './components/Layout.jsx';
import Home from './routes/home.jsx'

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;