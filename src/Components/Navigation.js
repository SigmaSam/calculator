import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="NavBar">
    <h1 className="Logo">Math Magicians</h1>
    <p>
      Here you can do Basic Math.
    </p>
    <p>
      For those times where you forget that almost all OS come with an integrated Calculator.
    </p>
    <div className="links">
      <Link className="link" to="/home">Home</Link>
      <Link className="link" to="/quote">Quote of The Day</Link>
      <Link className="link" to="/app">Calculator</Link>
    </div>

  </div>
);

export default Nav;
