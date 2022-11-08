import React from 'react';
import './button.scss'

//the value of the key is the class name of css in button.scss
const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

//children pass in the info in the button, buttontype pass in which BUTTON_TYPE_CLASSES u want
const Button = ( {children, buttonType, ...otherProps}) => {
  return (
    <button 
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}>{children}</button>
  )
}

export default Button