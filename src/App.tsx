import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar, Faq } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        
      </Switch>
      <Faq />
    </Router>
  );
}

export default App;
