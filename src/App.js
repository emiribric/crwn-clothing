import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />      
      <Switch>

        <Route path="crwn-clothing/" exact>
            <Redirect to="crwn-clothing" />
        </Route>

        <Route exact path="/crwn-clothing" component={HomePage} />
        <Route exact path="/crwn-clothing/shop" component={ShopPage} />
      </Switch>     
    </div>
  );
}

export default App;
