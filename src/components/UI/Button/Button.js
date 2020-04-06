import React from 'react';
import Radium from 'radium';

import classes from './Button.css';

const button = props => {
  let btnStyle = {};

  if (props.desktopOnly) {
    btnStyle = {
      '@media (min-width: 500px)': {
        display: 'none'
      }
    }
  }

  return (
    <button
      className={[classes.Button, classes[props.btnType]].join(' ')}
      style={btnStyle}
      onClick={props.clicked} >
      {props.children}
    </button>
  );
}

export default Radium(button);