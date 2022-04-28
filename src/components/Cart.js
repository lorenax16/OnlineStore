import React from 'react';
import PropTypes from 'prop-types';
import CartProduct from './CartProduct';

class Cart extends React.Component {
  render() {
    const { produtos } = this.props;
    console.log(produtos);
    return (
      <div>
        {produtos.length === 0 ? (
          <h2 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h2>
        ) : (
          <div>
            {produtos.map((produto) => (
              <CartProduct
                key={ produto }
                produto={ produto }
              />
            ))}
            <button
              type="button"
            >
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    );
  }
}

Cart.propTypes = {
  produtos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Cart;
