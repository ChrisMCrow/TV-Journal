import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from './../actions';
import PropTypes from 'prop-types';
import constants from './../constants';
const { c } = constants;

function Navbar(props) {

  function handleSignOut() {
    logout();
  }

  return (
    <div className='navbar'>
      <img className='navbar-logo float-left' src={c.TV_LOGO} alt='logo'/>
      <ul className='text-right navbar-list'>
        {props.user.authUser ? (
          <div>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/friends'>Friends</Link></li>
            <li><Link to='/shows'>Shows</Link></li>
            <li onClick={handleSignOut}><Link to='/'>Sign Out</Link></li>
          </div>
        ) : (
          <div>
            <li>Sign In</li>
          </div>
        )}
      </ul>
    </div>
  );
}

Navbar.propTypes = {
  user: PropTypes.object
}

export default Navbar;