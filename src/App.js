import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up-out.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

//Let's convert function into class component
class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentuser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentuser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentuser} />      
        <Switch>
  
          <Route path="crwn-clothing/" exact>
              <Redirect to="crwn-clothing" />
          </Route>
  
          <Route exact path="/crwn-clothing" component={HomePage} />
          <Route exact path="/crwn-clothing/shop" component={ShopPage} />
          <Route exact path='/crwn-clothing/signin' component={SignInAndSignUpPage} />
        </Switch>     
      </div>
    );
  }
}

export default App;
