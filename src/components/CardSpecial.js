import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsId } from '../services/api';
import CardAtributos from './CardAtributos';

class CardSpecial extends React.Component {
  constructor() {
    super();

    this.state = {
      produtoRetornado: [],
      produtoAtributo: [],
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.setState({}, async () => {
      const recive = await getProductsId(id);
      // console.log(recive);
      this.setState({ produtoRetornado: recive, produtoAtributo: recive.attributes });
    });
  }

  render() {
    // const { match: { params: { id } } } = this.props;
    // console.log(this.props);
    const { produtoRetornado, produtoAtributo } = this.state;
    const { title, price, thumbnail, id } = produtoRetornado;
    const { onClickCart } = this.props;
    return (
      <div>
        <h2 data-testid="product-detail-name">{ title }</h2>
        <h3>{ price }</h3>
        <img src={ thumbnail } alt={ title } />
        <button
          onClick={ onClickCart }
          type="button"
          data-testid="product-detail-add-to-cart"
          value={ id }
        >
          Adicionar ao carrinho
        </button>
        <Link
          to="/cart"
          data-testid="shopping-cart-button"
        >
          Carrinho
        </Link>
        {
          produtoAtributo.map((atributo) => (<CardAtributos
            key={ atributo.id }
            atributo={ atributo }
          />))
        }
      </div>
    );
  }
}

CardSpecial.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  onClickCart: PropTypes.func.isRequired,
};

export default CardSpecial;
