import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/" component={About} exact/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
