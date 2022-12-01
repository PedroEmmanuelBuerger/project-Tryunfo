import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div>
        <h1 data-testid="name-card">{cardName}</h1>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <span data-testid="description-card">
          { cardDescription }
        </span>
        <span data-testid="attr1-card">
          { cardAttr1 }
        </span>
        <span data-testid="attr2-card">
          { cardAttr2 }
        </span>
        <span data-testid="attr3-card">
          { cardAttr3 }
        </span>
        <span data-testid="rare-card">
          { cardRare }
        </span>
        { (cardTrunfo) ? <span data-testid="trunfo-card">Super Trunfo</span> : ''}
      </div>
    );
  }
}
Card.defaultProps = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
};

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
};

export default Card;
