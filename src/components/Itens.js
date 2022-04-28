import React from 'react';
import PropTypes from 'prop-types';

class Itens extends React.Component {
  render() {
    const { categorias, onChange, value } = this.props;
    return (
      <div>
        <button
          data-testid="category"
          type="button"
          id="input-cotegorias"
          name="valueCategoria"
          onClick={ onChange }
          value={ value }
        >
          {categorias.name}
        </button>
      </div>
    );
  }
}

Itens.propTypes = {
  categorias: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Itens;
