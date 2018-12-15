import React from 'react';
import { Link } from 'react-router-dom';

let tempProps = {
  userName: 'Chris Crow'
};

function Navbar() {
  return(
    <div id='navbar'>
      <style jsx>{`
        #navbar {
          background-color: #47e58b;
        }
        #logo{
          font-size: 32px;
          margin: 15px;
        }
        .nav-list li {
          font-size: 28px;
          margin: 15px 30px 15px 0;
          list-style: none;
          display: inline-block;
        }
      `}</style>
      <p id='logo' className='float-left'><Link to='/'>Logo</Link></p>
      <ul className='text-right nav-list'>
        <li><Link to='/home'>{tempProps.userName}</Link></li>
        <li><Link to='/friends'>Friends</Link></li>
        <li><Link to='/shows'>Shows</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;