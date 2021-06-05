import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import { Route, Switch} from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentuser : null
    }
  }

  unsubsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubsubscribeFromAuth =  auth.onAuthStateChanged(user => {
      this.setState({currentuser: user});
    })
  }

  componentWillUnmount() {
    this.unsubsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentuser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} /> 
        </Switch>
      </div>
    );
  }
}

export default App;
