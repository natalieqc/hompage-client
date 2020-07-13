import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import NotFound from './views/NotFound';


function App() {
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NotFound} status={404} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
