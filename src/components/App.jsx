import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Navbar from './Navbar';
import SignIn from './SignIn';
import HomePage from './home/HomePage';
import Friends from './friends/FriendsPage';
import Shows from './shows/ShowsPage';
import { connect } from 'react-redux';
import { populateList, getPopularShows } from '../actions';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
    props.dispatch(getPopularShows());
  }

  render() {    
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
            <Route
              path='/home' 
              render={() => <HomePage media={this.props.media} />} 
            />
            <Route path='/friends' component={Friends} />
            <Route path='/shows' component={Shows} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    media: state.media
  };
};

App.propTypes = {
  dispatch: PropTypes.func,
  media: PropTypes.object
}

export default withRouter(connect(mapStateToProps)(App));