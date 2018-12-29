import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from './../actions';
import PropTypes from 'prop-types';
import constants from './../constants';
const { c } = constants;

function Navbar(props) {

  if (props.user.authUser) {
    return (
      <nav className='navbar'>
        <div className='float-left' >
          <img className='navbar-logo float-left' src={c.TV_LOGO} alt='logo' />
          <h1 className='navbar-title float-left'>Tervy</h1>
        </div>
        <ul className='text-right navbar-list'>
          <div>
            <li><Link to='/'>Home</Link></li>
            {/* <li><Link to='/friends'>Friends</Link></li> */}
            <li><Link to='/shows'>Shows</Link></li>
            <li onClick={() => props.dispatch(logout())}><Link to='/'>Sign Out</Link></li>
          </div>
        </ul>
      </nav>
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
            {/* <li><Link to='/'>Sign In</Link></li>
            <li><Link to='/newaccount'>Create Account</Link></li> */}
          </div>
        </ul>
      </div>
    );
  }
}

Navbar.propTypes = {
  user: PropTypes.object,
  dispatch: PropTypes.func
}

export default Navbar;