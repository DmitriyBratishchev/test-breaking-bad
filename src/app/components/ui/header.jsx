import React from 'react';

const Header = ({ children, text, className = '', ...rest }) => {
  const getClassList = 'm-5 ' + className
  return (
    <h1 className={ getClassList } { ...rest }>
      { children || text || 'Cписок эпизодов Breaking Bad.' }
    </h1>
  );
}

export default Header;
