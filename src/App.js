import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './views/home'
import Detail from './views/details'
import Header from './components/layout/header/Header'
import LookBook from './views/look_book'
import GlobalLoading from './components/GlobalLoading';
import { connect } from 'react-redux';


function App({ globalLoading }) {
  return (
    <Router>
      <Header />
      <GlobalLoading loading={globalLoading} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/details" component={Detail} />
        <Route path="/lookbook" component={LookBook} />
      </Switch>
    </Router>
  );
}

export default connect((state) => state.globalLoading)(App);
