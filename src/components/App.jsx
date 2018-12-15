import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import SignIn from './SignIn';
import Home from './home/HomePage';
import Friends from './friends/FriendsPage';
import Shows from './shows/ShowsPage';

function App() {
  return (
    <div>
      <style global jsx>{`
        body {
          color: white;
          background-color: black;
        }
      `}</style>
      <Navbar/>
      <div>
        <Switch>
          <Route exact path='/' component={SignIn} />
          <Route path='/home' component={Home} />
          <Route path='/friends' component={Friends} />
          <Route path='/shows' component={Shows} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
