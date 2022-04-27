import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  render() {
    const { produto, onClickCart, value } = this.props;
    const { title, thumbnail, price, id } = produto;
    return (
      <div data-testid="product">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{`R$: ${price}`}</p>
        <button
          onClick={ onClickCart }
          type="button"
          data-testid="product-add-to-cart"
          value={ value }
        >
          Adicionar ao carrinho
        </button>
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

Card.propTypes = {
  produto: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
  onClickCart: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Card;
