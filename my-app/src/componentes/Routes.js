import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import Cart from './components/Cart';
import TermsAndConditions from './components/TermsAndConditions';
import Invoice from './components/Invoice';
import ForgotPassword from './components/ForgotPassword';
import Register from './components/Register';
import AdminDashboard from './components/AdminDashboard';
import NotFound from './pages/NotFound';
import { getCurrentUser } from './services/authService';

const AppRoutes = () => {
  const user = getCurrentUser();
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={user && user.role === 'user' ? <Cart /> : <Login />} />
        <Route path="/admin" element={user && user.role === 'admin' ? <AdminDashboard /> : <Login />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
