import React from 'react';
import './App.css';
import Home from './containers/Home';
import AddNavbar from './components/AddNavbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <AddNavbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route path="/category/:categoryid">
          <Home />
        </Route>
        <Route path="/search/:productname">
          <Home />
        </Route>
        <Route path="/ItemDetailContainer/:id">
          <ItemDetailContainer />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
