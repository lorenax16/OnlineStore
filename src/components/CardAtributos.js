import React from 'react';
import PropTypes from 'prop-types';

class CardAtributos extends React.Component {
  render() {
    const { atributo } = this.props;
    return (
      <div>
        <p>{`${atributo.name}: ${atributo.value_name}`}</p>
      </div>
    );
  }
}

CardAtributos.propTypes = {
  atributo: PropTypes.shape({
    name: PropTypes.string,
    value_name: PropTypes.string,
  }).isRequired,
};

export default CardAtributos;
