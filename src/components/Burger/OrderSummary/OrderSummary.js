import React from 'react';

import Button from '../../UI/Button/Button';

const orderSummary = props => {
  const ingredientsList = Object.keys(props.ingredients)
    .map(ingKey => {
      return <li key={ingKey}>{ingKey}: {props.ingredients[ingKey]}</li>
    });

  return (
    <div>
      <h2>Order summary:</h2>
      <ul>
        {ingredientsList}
      </ul>
      <p>Total price: <strong>${props.price.toFixed(2)}</strong></p>
      <p>Checkout:</p>
      <Button clicked={props.continue} btnType="Success">CONFIRM</Button>
      <Button clicked={props.cancel} btnType="Danger">CANCEL</Button>
    </div>
  );
};

export default orderSummary;