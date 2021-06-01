import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Route, Switch} from 'react-router-dom';

const Hat = () => {
  return (
    <div>
      <h1>Hats</h1>
    </div>
  )
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={Hat} />
      </Switch>
    </div>
  );
}

export default App;
