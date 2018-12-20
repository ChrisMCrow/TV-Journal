import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from './../actions';
import PropTypes from 'prop-types';
import constants from './../constants';
const { c } = constants;

function Navbar(props) {

  if (props.user.authUser) {
    return (
      <div className='navbar'>
        <div className='float-left' >
          <img className='navbar-logo float-left' src={c.TV_LOGO} alt='logo' />
          <h1 className='navbar-title float-left'>Tervy</h1>
        </div>
        <ul className='text-right navbar-list'>
          <div>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/friends'>Friends</Link></li>
            <li><Link to='/shows'>Shows</Link></li>
            <li onClick={() => logout()}><Link to='/'>Sign Out</Link></li>
          </div>
        </ul>
      </div>
    );
  } else {
    return (
      <div className='navbar'>
        <div className='float-left' >
          <img className='navbar-logo float-left' src={c.TV_LOGO} alt='logo' />
          <h1 className='navbar-title float-left'>Tervy</h1>
        </div>
        <ul className='text-right navbar-list'>
          <div>
            <li>Sign In</li>
          </div>
        </ul>
      </div>
    );
  }
}

Navbar.propTypes = {
  user: PropTypes.object
}

export default Navbar;