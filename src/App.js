import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Cart from './components/Cart';
import CardSpecial from './components/CardSpecial';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      idproduct: [],
    };
  }

  onClickCart = ({ target }) => {
    const { idproduct } = this.state;
    // console.log(idproduct);
    const some = idproduct.some((produtoid) => produtoid === target.value);
    if (!some) {
      this.setState((estadoAnterior) => ({
        idproduct: [...estadoAnterior.idproduct, target.value],
      }));
    }
  }

  render() {
    const { idproduct } = this.state;
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              render={ (props) => (<Home
                { ...props }
                onClickCart={ this.onClickCart }
              />) }
            />
            <Route
              path="/cart"
              render={ (props) => (<Cart
                { ...props }
                idproduct={ idproduct }
              />) }
            />
            <Route
              path="/product/:id"
              render={ (props) => (<CardSpecial
                { ...props }
                onClickCart={ this.onClickCart }
              />) }
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
