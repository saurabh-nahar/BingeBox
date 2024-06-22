import React from 'react';
import logo from '../logo.png';

const Header = () => {
  return (
    <div className="h-32 z-10 bg-gradient-to-b from-black to-transparent absolute top-0 w-full">
      <img src={logo} className="w-48 mt-6" alt="logo" />
    </div>
  );
};

export default Header;
