import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='title'>Dev<span className='title-highlight'>Lore</span><span className='flower' aria-hidden="true">🌸</span></div>
          <ul className='sections'>
                <li><a href="/">Home</a></li>
                <li><a href="/quizsetup">Start quiz</a></li>
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href=".coco">Contacts</a></li>
         </ul>
    </div>
  );
};

export default Navbar;