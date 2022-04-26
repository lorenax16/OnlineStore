import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';
import Itens from './Itens';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      objRetornado: [],
    };
  }

  componentDidMount() {
    this.setState({}, async () => {
      const recive = await getCategories();
      this.setState({ objRetornado: recive });
      console.log(recive);
    });
  }

  render() {
    const { objRetornado } = this.state;
    return (
      <div>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        {
          objRetornado.map((categorias) => (<Itens
            key={ categorias.id }
            categorias={ categorias }
          />))
        }
      </div>
    );
  }
}

export default Home;
