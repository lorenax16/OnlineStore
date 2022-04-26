import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={ Home } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
