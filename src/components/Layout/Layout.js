import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  closeSideDrawerHandler = () => {
    this.setState({ showSideDrawer: false });
  }

  openSideDrawerHandler = () => {
    this.setState({ showSideDrawer: true });
  }

  render() {
    return (
      <Auxiliary>
        <Toolbar openSideDrawer={this.openSideDrawerHandler} />
        <SideDrawer 
          closed={this.closeSideDrawerHandler}
          show={this.state.showSideDrawer} />
        <main className={classes.MainContent}>
          {this.props.children}
        </main>
      </Auxiliary>
    );
  }
}

export default Layout;