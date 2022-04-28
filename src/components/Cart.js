import React from 'react';
import PropTypes from 'prop-types';
import CartProduct from './CartProduct';

class Cart extends React.Component {
  render() {
    const { idproduct } = this.props;
    // console.log(idproduct);
    return (
      <div>
        {idproduct.length === 0 ? (
          <h2 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h2>
        ) : (
          <div>
            <button
              type="button"
            >
              Finalizar Compra
            </button>
            {idproduct.map((produto) => (
              // console.log(produto.title)
              <CartProduct
                key={ produto }
                produto={ produto }
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

Cart.propTypes = {
  idproduct: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Cart;
