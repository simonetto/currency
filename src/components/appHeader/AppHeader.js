import React from 'react';
import logo from '../../assets/images/CF_logo_RGB_NEG.svg';
import './AppHeader.scss';

function AppHeader() {
  return (
    <header className="App-header centered-row">
      <div className="page-width">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </header>
  );
}

export default AppHeader;
