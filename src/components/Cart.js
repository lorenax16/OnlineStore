import React from 'react';
import PropTypes from 'prop-types';
import { getProductsId } from '../services/api';
import CartProduct from './CartProduct';

class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      cartProduct: [],
    };
  }

  componentDidMount() {
    const { idproduct } = this.props;
    // console.log(idproduct);
    idproduct.forEach(async (produtoid) => {
      const recive = await getProductsId(produtoid);
      this.setState((estadoAnterior) => ({
        cartProduct: [...estadoAnterior.cartProduct, recive],
      }));
    });
  }

  render() {
    const { cartProduct } = this.state;
    const { idproduct } = this.props;
    return (
      <div>
        {cartProduct.length === 0 ? (
          <h2 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h2>
        ) : (
          <div>
            <p
              data-testid="shopping-cart-product-quantity"
            >
              { `Quantidade de produtos: ${idproduct.length}` }
            </p>
            {cartProduct.map((produto) => (
              <CartProduct
                key={ produto.id }
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
