import React from 'react';
import "../styles/button.css";

const STYLES = [
    'btn--primary--solid',
    'btn--warning--solid',
    'btn--danger--solid',
    'btn--success--solid',
    'btn--primary--outline',
    'btn--warning--outline',
    'btn--danger--outline',
    'btn--success--outline'
]

const SIZES = ['btn--medium', 'btn--large'];
const MARGINS = ['margin-left', 'margin-right', 'margin-top', 'margin-bottom']; 


export default function Button({children 
    ,type
    ,onClick
    ,buttonStyle
    ,buttonSize, 
    id,
    margin
}) {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkButtonMargin = MARGINS.includes(margin) ? margin : '';
  return (<>
  <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonMargin}`} onClick={onClick} type={type} id={id}>
      {console.log('***id', id)}
      {children}
  </button>
  </>);
}