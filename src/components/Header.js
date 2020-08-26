import React from 'react';
import logo from '../images/logo.svg';

function Header() {
  return (
    <>
      <header>
        <div className="header">
          <img src={logo} alt="Around the US" className="header__logo" />
        </div>
      </header>
    </>
  )
}

export default Header;
