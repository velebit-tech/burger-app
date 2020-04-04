import React from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css';

const layout = props => (
  <Auxiliary>
    <div>Toolbar, Navigation, ...</div>
    <main className={classes.MainContent}>
      {props.children}
    </main>
  </Auxiliary>
);

export default layout;