import React from 'react';
import { Link } from 'react-router-dom';

let tempProps = {
  userName: 'Chris Crow'
};

function Navbar() {
  return(
    <div className='navbar'>
      <p className='navbar-logo float-left'><Link to='/'>Logo</Link></p>
      <ul className='text-right navbar-list'>
        <li><Link to='/home'>{tempProps.userName}</Link></li>
        <li><Link to='/friends'>Friends</Link></li>
        <li><Link to='/shows'>Shows</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;