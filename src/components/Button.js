import React from 'react';

const Button = ({ children, disabled, ...rest }) => {
  console.log(disabled);
  if (disabled) {
    return (
      <button
        className="group inline-block border-2 border-gray-400 rounded-xl px-5 py-2.5 m-2 text-center font-medium text-gray-700 bg-gray-200
             transition-all duration-300 ease-in-out cursor-not-allowed 
              shadow-sm"
        {...rest}
      >
        {children}
      </button >
    );
  }
  return (
    <button
      className="group inline-block border-2 border-purple-300 rounded-xl px-5 py-2.5 m-2 text-center font-medium text-purple-700;
    transition-all duration-300 ease-in-out cursor-pointer hover:bg-purple-600 hover:text-white hover:border-purple-700 shadow-sm"
      {...rest}
    >
      {children}
    </button >
  );
};

export default Button;