import React from 'react';

const TextCenter = ({ children, className = '' }) => {
  const getClassList = 'd-flex justify-content-center align-items-center ' + className;
  return (
    <div className={ getClassList }>
      { children }
    </div>
  );
}

export default TextCenter;