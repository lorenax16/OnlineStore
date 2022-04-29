import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
              <CartProduct key={ produto.id } produto={ produto } />
            ))}
            <Link to="/checkout">
              <button type="button" data-testid="checkout-products">
                Finalizar Compra
              </button>
            </Link>
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
