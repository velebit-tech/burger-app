import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
  let fullIngredients = Object.keys(props.ingredients)
    .map(ingKey => {
      return [...Array(props.ingredients[ingKey])].map((_, index) => {
        return <BurgerIngredient key={ingKey + index} type={ingKey} />
      })
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if(fullIngredients.length === 0) {
    fullIngredients = <p>Please add ingredients.</p>
  }  

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {fullIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;