import React from 'react';

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
      <p>Checkout:</p>
      <button>YES</button>
      <button>NO</button>
    </div>
  );
};

export default orderSummary;