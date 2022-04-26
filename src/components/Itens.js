import React from 'react';
import PropTypes from 'prop-types';

class Itens extends React.Component {
  render() {
    const { categorias } = this.props;
    return (
      <div>
        <label
          data-testid="category"
          htmlFor="input-cotegorias"
          name="input-radio"
        >
          <input
            type="radio"
            id="input-cotegorias"
            name="input-radio"
          />
          {categorias.name}
        </label>
      </div>
    );
  }
}

Itens.propTypes = {
  categorias: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default Itens;
