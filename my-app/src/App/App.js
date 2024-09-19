import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../componentes/Home';
import Register from '../componentes/Register';
import Login from '../componentes/Login';
import Cart from '../componentes/Cart';
import Terms from '../componentes/Terms';
import Invoice from '../componentes/Ivoice';
import ForgotPassword from '../componentes/ForgotPassword';
import '../index.css'; // Importa tu CSS personalizado
import users from '../componentes/users';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/cart" component={Cart} />
        <Route path="/terms" component={Terms} />
        <Route path="/invoice" component={Invoice} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path='/users' component={users} />
      </Switch>
      <footer className="footer">
        <p>&copy; 2024 Sistema de Devolución de Uniformes</p>
        <a href="/terms">Términos y Condiciones</a>
      </footer>
    </div>
  </Router>
);

export default App;