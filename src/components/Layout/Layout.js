import React from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';

const layout = props => (
  <Auxiliary>
    <Toolbar />
    <SideDrawer />
    <main className={classes.MainContent}>
      {props.children}
    </main>
  </Auxiliary>
);

export default layout;