import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CartProduct extends React.Component {
  render() {
    const { produto } = this.props;
    const { title, thumbnail, price, id } = produto;
    return (
      <div data-testid="product">
        <h3 data-testid="shopping-cart-product-name">{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{`R$: ${price}`}</p>
        <Link
          to={ { pathname: `/product/${id}` } }
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
    id: PropTypes.string,
  }).isRequired,
};

export default CartProduct;
