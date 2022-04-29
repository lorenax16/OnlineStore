import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { getProductsId } from '../services/api';

class CartProduct extends React.Component {
  constructor() {
    super();

    this.state = {
      quantidade: '',
    };
  }

  onClickSomaCart = () => {
    const { produto } = this.props;
    // const { produto } = this.props;
    produto.quantidade += 1;
    console.log(produto.quantidade);
    this.setState({ quantidade: produto.quantidade });
  }

  onClickSubtraiCart = () => {
    const { produto } = this.props;
    const { quantidade } = this.state;
    console.log(quantidade);
    if (produto.quantidade > 1) {
      produto.quantidade -= 1;
      this.setState({ quantidade: produto.quantidade });
    }
  }

  render() {
    const { produto } = this.props;
    return (
      <div data-testid="product">
        <h3 data-testid="shopping-cart-product-name">{ produto.title }</h3>
        <img src={ produto.thumbnail } alt={ produto.title } />
        <p
          data-testid="shopping-cart-product-quantity"
        >
          { produto.quantidade }
        </p>
        <button
          onClick={ this.onClickSomaCart }
          data-testid="product-increase-quantity"
          type="button"
        >
          +
        </button>
        <button
          onClick={ this.onClickSubtraiCart }
          data-testid="product-decrease-quantity"
          type="button"
        >
          -
        </button>
        <button type="button">X</button>
        <p>{`R$: ${produto.price}`}</p>
        <Link
          to={ { pathname: `/product/${produto.id}` } }
          data-testid="product-detail-link"
        >
          Descrição Detalhada
        </Link>
      </div>
    );
  }
}

CartProduct.propTypes = {
  produto: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    quantidade: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default CartProduct;
