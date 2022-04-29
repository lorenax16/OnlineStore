import React from 'react';
import PropTypes from 'prop-types';

class Avaliacoes extends React.Component {
  render() {
    const { avaliacoes } = this.props;
    return (
      <div>
        <h3>{ avaliacoes.email }</h3>
        <p>{ avaliacoes.nota }</p>
        <p>{ avaliacoes.textarea }</p>
      </div>
    );
  }
}

Avaliacoes.propTypes = {
  avaliacoes: PropTypes.shape({
    email: PropTypes.string,
    nota: PropTypes.string,
    textarea: PropTypes.string,
  }).isRequired,
};

export default Avaliacoes;
