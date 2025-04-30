import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-10 px-6 text-center rounded-tl-none rounded-tr-none rounded-2xl shadow-xl">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">
        ✨ Sleek UI Components
      </h1>
      <p className="mt-4 text-lg md:text-xl font-medium opacity-90">
        A collection of beautifully crafted, reusable Tailwind CSS components.
      </p>
    </header>
  );
};

export default Header;