import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Itens from './Itens';
import Card from './Card';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      objRetornado: [],
      valueCategoria: '',
      objProdutos: [],
      pesquisar: '',
      objPesquisado: [],
    };
  }

  componentDidMount() {
    this.setState({}, async () => {
      const recive = await getCategories();
      this.setState({ objRetornado: recive });
      // console.log(recive);
    });
  }

  onChange = ({ target }) => {
    const { valueCategoria } = this.state;
    this.setState({ valueCategoria: target.value }, async () => {
      const recive = await getProductsFromCategoryAndQuery(valueCategoria);
      // console.log(recive.results);
      this.setState({ objProdutos: recive.results });
    });
  }

  onChangeSearch = ({ target }) => {
    this.setState({ pesquisar: target.value });
  }

  onClick = async () => {
    const { pesquisar } = this.state;
    const recive = await getProductsFromCategoryAndQuery('', pesquisar);
    // console.log(recive);
    this.setState({ objPesquisado: recive.results });
  }

  render() {
    const { objRetornado, objProdutos, pesquisar, objPesquisado } = this.state;
    return (
      <div>
        <label htmlFor="input-pesquisa">
          <input
            name="pesquisar"
            onChange={ this.onChangeSearch }
            data-testid="query-input"
            id="input-pesquisa"
            placeholder="pesquisa"
            value={ pesquisar }
          />
        </label>
        <button
          onClick={ this.onClick }
          type="button"
          data-testid="query-button"
        >
          Pesquisar
        </button>
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
            onChange={ this.onChange }
            value={ categorias.id }
          />))
        }
        {
          objProdutos.map((produto) => <Card key={ produto.id } produto={ produto } />)
        }
        {
          objPesquisado.map((produto) => <Card key={ produto.id } produto={ produto } />)
        }
      </div>
    );
  }
}

export default Home;
