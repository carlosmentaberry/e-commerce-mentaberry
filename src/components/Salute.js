import React from 'react';
import logo from '../logo.svg';

function Salute({greeting}) {
    return <>
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo"  />
    <p>{greeting}</p>
  </header>
  </>
    
};

export default Salute;