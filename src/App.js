import React, { Component } from 'react';
import { StyleRoot } from 'radium';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <StyleRoot>
        <div>
          <Layout>
            <BurgerBuilder />
          </Layout>
        </div>
      </StyleRoot>
    );
  }
}

export default App;
