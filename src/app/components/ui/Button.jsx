import React from 'react';

const Button = ({ children, text, color = 'primary', className = '', ...rest }) => {
  const getClassList = 'btn btn-' + color + ' ' + className
  return (
    <button type='button' className={ getClassList } { ...rest }>{ children || text }</button>
  );
}

export default Button;
