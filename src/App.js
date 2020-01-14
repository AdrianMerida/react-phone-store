import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { Switch, Route, Redirect } from 'react-router-dom';
import Catalog from './components/Catalog';
import PhoneDetail from './components/PhoneDetail';

function App() {
  return (
    <div className="App" id="App">
      <NavBar />

      <Switch>
        <Route exact path="/catalog" component={Catalog} />
        <Route exact path="/catalog/:id" component={PhoneDetail} />
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
