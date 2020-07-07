import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './views/home'
import Detail from './views/details'
import Header from './components/layout/header/Header'
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/details" component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
