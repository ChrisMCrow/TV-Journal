import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from './../actions';
import * as c from './../constants';

let tempProps = {
  userName: 'Chris Crow'
};

function Navbar() {

  function handleSignOut() {
    logout();
  }

  return(
    <div className='navbar'>
      <img className='navbar-logo float-left' src={c.TV_LOGO} />
      <ul className='text-right navbar-list'>
        <li><Link to='/'>{tempProps.userName}</Link></li>
        <li><Link to='/friends'>Friends</Link></li>
        <li><Link to='/shows'>Shows</Link></li>
        <li onClick={handleSignOut}><Link to='/'>Sign Out</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;