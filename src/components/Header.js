import React from 'react';

import iduk from '../assets/images/iduk.png';

function Header() {
  return (
    <header>
      <nav>
        <img src={iduk} alt="logo"/>
        <div>
          <span>Meu perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
