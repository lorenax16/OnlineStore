import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsId } from '../services/api';

class CartProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      quantidade: 1,
      cartProduct: {},
    };
  }

  componentDidMount() {
    const { produto } = this.props;
    this.setState({}, async () => {
      const recive = await getProductsId(produto);
      // console.log(recive.title);
      this.setState({
        cartProduct: recive,
      });
    });
  }

  onClickAddCart = () => {
    const { quantidade } = this.state;
    const { produto } = this.props;
    this.setState({ quantidade: quantidade + 1 });
    console.log(produto.title);
  }

  onClickRemoveCart = () => {
    const { quantidade } = this.state;
    if (quantidade > 1) {
      this.setState(({ quantidade: quantidade - 1 }));
    }
  }

  render() {
    const { quantidade, cartProduct } = this.state;
    return (
      <div data-testid="product">
        <h3 data-testid="shopping-cart-product-name">{ cartProduct.title }</h3>
        <img src={ cartProduct.thumbnail } alt={ cartProduct.title } />
        <p
          data-testid="shopping-cart-product-quantity"
        >
          { quantidade }
        </p>
        <button
          onClick={ this.onClickAddCart }
          data-testid="product-increase-quantity"
          type="button"
        >
          +
        </button>
        <button
          onClick={ this.onClickRemoveCart }
          data-testid="product-decrease-quantity"
          type="button"
        >
          -
        </button>
        <button type="button">X</button>
        <p>{`R$: ${cartProduct.price}`}</p>
        <Link
          to={ { pathname: `/product/${cartProduct.id}` } }
          data-testid="product-detail-link"
        >
          Descrição Detalhada
        </Link>
      </div>
    );
  }
}

CartProduct.propTypes = {
  produto: PropTypes.string.isRequired,
};

export default CartProduct;
