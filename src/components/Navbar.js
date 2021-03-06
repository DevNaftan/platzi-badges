import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css';
import platziConfIsotipo from '../assets/images/platziconf-isotipo.svg';

function Navbar() {
  return (
    <header className='Navbar'>
      <Link to='/'>
        <figure className='Navbar__logo'>
          <img
            src={platziConfIsotipo}
            width='45'
            alt='Conference badges logo'
          />
        </figure>
      </Link>
      <h1 className='Navbar__title'>
        Conference <strong>badges</strong>
      </h1>
    </header>
  );
}

export default Navbar;
