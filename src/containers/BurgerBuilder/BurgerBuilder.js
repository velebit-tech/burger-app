import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildContorls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
    totalCost: 4,
    purchasable: false,
    purchasing: false
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

    this.setPurchaseState(newIngredients);
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

      this.setPurchaseState(newIngredients);
    }
  }

  setPurchaseState = ingredients => {
    const ings = { ...ingredients };
    const sum = Object.keys(ings)
      .map(ingKey => ings[ingKey])
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({ purchasable: sum > 0 });
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  }

  purchaseCloseHandler = () => {
    this.setState({ purchasing: false });
  }

  purchaseConfirmHandler = () => {
    alert('Your order have been confirmed! (TODO)');
  }

  render() {
    return (
      <Auxiliary>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCloseHandler} >
          <OrderSummary 
            ingredients={this.state.ingredients}
            continue={this.purchaseConfirmHandler}
            cancel={this.purchaseCloseHandler}
            price={this.state.totalCost} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          cost={this.state.totalCost}
          purchasable={this.state.purchasable}
          purchased={this.purchaseHandler}
        />
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;