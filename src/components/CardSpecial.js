import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsId } from '../services/api';
import CardAtributos from './CardAtributos';
import Avaliacoes from './Avaliacoes';

class CardSpecial extends React.Component {
  constructor() {
    super();

    this.state = {
      produtoRetornado: [],
      produtoAtributo: [],
      avaliacoes: JSON.parse(localStorage.getItem('avaliacoesSave')) || [],
      email: '',
      nota: '',
      textarea: '',
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.setState({}, async () => {
      const recive = await getProductsId(id);
      console.log(recive.title);
      this.setState({ produtoRetornado: recive, produtoAtributo: recive.attributes });
    });
  }

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  onClick = () => {
    const { email, nota, textarea } = this.state;
    const novaAvaliacao = {
      email,
      nota,
      textarea,
    };
    this.setState((estadoAnterior) => ({
      avaliacoes: [...estadoAnterior.avaliacoes, novaAvaliacao],
      email: '',
      nota: '',
      textarea: '',
    }), () => this.localFunction());
  }

  localFunction = () => {
    const { avaliacoes } = this.state;
    localStorage.setItem('avaliacoesSave', JSON.stringify(avaliacoes));
  }

  render() {
    // const { match: { params: { id } } } = this.props;
    // console.log(this.props);
    const { produtoRetornado, produtoAtributo, avaliacoes, email, textarea } = this.state;
    const { title, price, thumbnail, id } = produtoRetornado;
    const { onClickCart } = this.props;
    const NUMBER_THREE = 3;
    const NUMBER_FOUR = 4;
    const NUMBER_FIVE = 5;
    return (
      <div>
        <h2 data-testid="product-detail-name">{ title }</h2>
        <h3>{ price }</h3>
        <img src={ thumbnail } alt={ title } />
        <button
          onClick={ () => onClickCart(title, thumbnail, price, id) }
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
        <form>
          Escreva sua avaliação:
          <label htmlFor="input-email">
            <input
              onChange={ this.onChange }
              type="text"
              data-testid="product-detail-email"
              id="input-email"
              name="email"
              value={ email }
            />
          </label>
          <label htmlFor="input-nota">
            1
            <input
              onChange={ this.onChange }
              type="radio"
              data-testid={ `${1}-rating` }
              id="input-nota"
              name="nota"
              value="1"
            />
          </label>
          <label htmlFor="input-nota">
            2
            <input
              onChange={ this.onChange }
              type="radio"
              data-testid={ `${2}-rating` }
              id="input-nota"
              name="nota"
              value="2"
            />
          </label>
          <label htmlFor="input-nota">
            3
            <input
              onChange={ this.onChange }
              type="radio"
              data-testid={ `${NUMBER_THREE}-rating` }
              id="input-nota"
              name="nota"
              value="3"
            />
          </label>
          <label htmlFor="input-nota">
            4
            <input
              onChange={ this.onChange }
              type="radio"
              data-testid={ `${NUMBER_FOUR}-rating` }
              id="input-nota"
              name="nota"
              value="4"
            />
          </label>
          <label htmlFor="input-nota">
            5
            <input
              onChange={ this.onChange }
              type="radio"
              data-testid={ `${NUMBER_FIVE}-rating` }
              id="input-nota"
              name="nota"
              value="5"
            />
          </label>
          <label htmlFor="input-textarea">
            <textarea
              onChange={ this.onChange }
              type="text"
              data-testid="product-detail-evaluation"
              id="input-textarea"
              name="textarea"
              value={ textarea }
            />
          </label>
          <button
            onClick={ this.onClick }
            type="button"
            data-testid="submit-review-btn"
          >
            Enviar
          </button>
        </form>
        <section>
          Avaliações do Produto:
          {
            avaliacoes.map((avaliacao) => (<Avaliacoes
              key={ avaliacao.nota }
              avaliacoes={ avaliacao }
            />))
          }
        </section>
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
