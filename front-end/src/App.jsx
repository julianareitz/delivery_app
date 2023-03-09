import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Login, Register, Products, Checkout, Orders, OrderDetails } from './pages';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/customer/products" component={ Products } />
      <Route exact path="/customer/checkout" component={ Checkout } />
      <Route exact path="/customer/orders" component={ Orders } />
      <Route exact path="/customer/orders/:id" component={ OrderDetails } />
    </Switch>
  );
}

export default App;
