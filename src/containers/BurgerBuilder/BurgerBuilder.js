import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';

class BurgerBuilder extends Component {
  render () {
    return (
      <Auxiliary>
        <div>Burger with meat</div>
        <div>Burger controls</div>
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;