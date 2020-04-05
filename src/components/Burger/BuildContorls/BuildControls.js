import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const ctrls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>Total cost: <strong>${props.cost.toFixed(2)}</strong></p>
    {ctrls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.type}
        add={() => props.addIngredient(ctrl.type)}
        remove={() => props.removeIngredient(ctrl.type)}
      />
    ))}
    <button 
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.purchased} 
      >ORDER NOW
    </button>
  </div>
);

export default buildControls;