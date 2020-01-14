import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { Switch, Route, Redirect } from 'react-router-dom';
import Catalog from './components/Catalog';
import PhoneDetail from './components/PhoneDetail';
import About from './components/About';
import Where from './components/Where';

function App() {
  return (
    <div className="App" id="App">
      <NavBar />

      <Switch>
        <Route exact path="/catalog" component={Catalog} />
        <Route exact path="/catalog/:id" component={PhoneDetail} />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/where" component={Where} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
