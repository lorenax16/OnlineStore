import React from 'react';
import PropTypes from 'prop-types';
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
      console.log(recive);
      this.setState({ produtoRetornado: recive, produtoAtributo: recive.attributes });
    });
  }

  render() {
    // const { match: { params: { id } } } = this.props;
    // console.log(this.props);
    const { produtoRetornado, produtoAtributo } = this.state;
    const { title, price, thumbnail } = produtoRetornado;
    return (
      <div>
        <h2 data-testid="product-detail-name">{ title }</h2>
        <h3>{ price }</h3>
        <img src={ thumbnail } alt={ title } />
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
};

export default CardSpecial;
