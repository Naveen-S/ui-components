import Link from 'next/link';
import React from 'react';

const ComponentLinkContainer = ({ to, children }) => {
  return (
    <div
      className="group inline-block border-2 border-purple-300 rounded-xl px-5 py-2.5 m-2 text-center font-medium text-purple-700 
             transition-all duration-300 ease-in-out cursor-pointer 
             hover:bg-purple-600 hover:text-white hover:border-purple-700 shadow-sm"
    >
      <Link href={to} className="block w-full h-full transition-colors duration-300 group-hover:text-white">
        {children}
      </Link>
    </div>
  );
};

export default ComponentLinkContainer;