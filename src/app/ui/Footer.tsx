import React from 'react';
// import './Footer.css';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <h1 className='text-black items-center justify-center text-center'>Footer</h1>
      {/* Add your footer content here */}
    </footer>
  );
};

export default Footer;
