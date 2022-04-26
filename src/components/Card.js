import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { produto } = this.props;
    const { title, thumbnail, price } = produto;
    return (
      <div data-testid="product">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{`R$: ${price}`}</p>
      </div>
    );
  }
}

Card.propTypes = {
  produto: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default Card;
