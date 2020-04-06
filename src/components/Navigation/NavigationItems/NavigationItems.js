import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active >One</NavigationItem>
    <NavigationItem link="/" >Two</NavigationItem>
    <NavigationItem link="/" >Three</NavigationItem>
  </ul>
);

export default navigationItems;