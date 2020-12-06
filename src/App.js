import React, { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

const App = () => {
  const [state, dispatch] = useStateValue();
  useEffect(() => {
    //will only run when app comp loads
    auth.onAuthStateChanged(authUser => {
      console.log('the user is', authUser);
      if (authUser) {
        //user just logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      }
      else {
        //user logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">

        <Switch>
          <Route exact path='/'>
            <Header />
            <Home />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/checkout'>
            <Header />
            <Checkout />
          </Route>
        </Switch>

        {/* home */}

      </div>
    </Router>
  );
}

export default App;
