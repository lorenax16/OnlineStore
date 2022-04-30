import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Cart from './components/Cart';
import CardSpecial from './components/CardSpecial';
import Checkout from './components/Checkout';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      produtos: [],
    };
  }

  onClickCart = (title, price, thumbnail, id) => {
    const { produtos } = this.state;
    const novoProduto = {
      title,
      price,
      thumbnail,
      quantidade: 1,
      total: price,
      id,
    };
    const some = produtos.some((produto) => produto.title === title);
    if (some) {
      const somaItem = produtos.find((produto) => produto.title === title);
      somaItem.quantidade += 1;
    } else {
      this.setState((estadoAnterior) => ({
        produtos: [...estadoAnterior.produtos, novoProduto],
      }));
    }
  }

  render() {
    const { produtos } = this.state;
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
                produtos={ produtos }
              />) }
            />
            <Route
              path="/product/:id"
              render={ (props) => (<CardSpecial
                { ...props }
                onClickCart={ this.onClickCart }
              />) }
            />
            <Route
              path="/checkout"
              render={ (props) => (<Checkout
                { ...props }
                produtos={ produtos }
              />) }
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
