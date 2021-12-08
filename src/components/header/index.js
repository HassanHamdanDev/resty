import React from 'react';
import './header.scss';
import {
  Link
} from "react-router-dom";

export default function Header() {
  return (
    <section className='header'>
      <header>
        <h1>RESTy</h1>
      </header>
      <div className="topnav">
        <ul>
          <li><Link className="active" to='/'>Home</Link></li>
          <li><Link to='/history'>History</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
    </section >
  );
}

