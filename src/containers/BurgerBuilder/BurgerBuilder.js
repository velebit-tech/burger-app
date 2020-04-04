import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildContorls/BuildControls';

const INGREDIENTS_PRICES = {
  salad: 0.4,
  bacon: 1.2,
  cheese: 0.6,
  meat: 1.5
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalCost: 4
  }

  addIngredientHandler = type => {
    const oldIngredientCount = this.state.ingredients[type];
    const newIngredientCount = oldIngredientCount + 1;
    const newIngredients = {
      ...this.state.ingredients
    };
    newIngredients[type] = newIngredientCount;

    const newCost = this.state.totalCost + INGREDIENTS_PRICES[type];

    this.setState({
      ingredients: newIngredients,
      totalCost: newCost
    });
  }

  removeIngredientHandler = type => {
    const oldIngredientCount = this.state.ingredients[type];
    if (oldIngredientCount !== 0) {
      const newIngredientCount = oldIngredientCount - 1;
      const newIngredients = {
        ...this.state.ingredients
      };
      newIngredients[type] = newIngredientCount;

      const newCost = this.state.totalCost - INGREDIENTS_PRICES[type];

      this.setState({
        ingredients: newIngredients,
        totalCost: newCost
      });
    }
  }

  render() {
    return (
      <Auxiliary>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          cost={this.state.totalCost}
        />
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;