import React from 'react';

class Cart extends React.Component {
  render() {
    const { idproduct, match: { params } } = this.props;
    console.log(this.props);
    return (
      <div>
        {/* <p>{ idproduct }</p> */}
        <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
      </div>
    );
  }
}

export default Cart;
