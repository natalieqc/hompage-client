import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';


function App() {
  return (
    <HashRouter basename="/client">
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
