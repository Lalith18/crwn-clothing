import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckOutPage from './pages/checkout/checkout.component';

import { Route, Switch, Redirect} from 'react-router-dom';
import Header from './components/header/header.component';


import {auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser} from './redux/user/user.actions';
import {connect } from 'react-redux';
import { selectCurrentUser} from './redux/user/user.selectors';
import { createStructuredSelector} from 'reselect';

class App extends React.Component {

  unsubsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/checkout' component={CheckOutPage} />
          <Route exact path='/signin' render={ () => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} /> 
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
