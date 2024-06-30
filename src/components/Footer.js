import React from 'react';

const Footer = () => {
  return (
    <div className='relative bottom-0 z-50 h-[20vh] w-screen bg-black flex justify-around items-center'>
      <a className='text-white text-lg font-thin cursor-pointer'
         href="https://github.com/saurabh-nahar"
         target="_blank"
         rel="noopener noreferrer">
        Github
      </a>
      <a className='text-white text-lg font-thin cursor-pointer'
         href="https://www.linkedin.com/in/saurabh-nahar/"
         target="_blank"
         rel="noopener noreferrer">
        LinkedIn
      </a>
      <a className='text-white text-lg font-thin cursor-pointer'
         href="https://saurabhnahar.com/"
         target="_blank"
         rel="noopener noreferrer">
        Portfolio
      </a>
    </div>
  );
};

export default Footer;
