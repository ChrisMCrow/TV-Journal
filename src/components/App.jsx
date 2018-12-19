import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.scss';
import Navbar from './Navbar';
import SignIn from './SignIn';
import HomePage from './home/HomePage';
import Friends from './friends/FriendsPage';
import ShowsPage from './shows/ShowsPage';
import { connect } from 'react-redux';
import { getGenres, getPopularShows } from '../actions';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import fire from './../fire';
import * as c from './../constants';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.authListener = this.authListener.bind(this);
  }
  
  componentWillMount() {
    this.authListener();
  }
  
  componentDidMount() {
    this.props.dispatch(getPopularShows());
    this.props.dispatch(getGenres());
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.props.dispatch({
          type: c.SET_USER,
          authUser: firebase.auth().currentUser.uid
        });
      } else {
        this.props.dispatch({
          type: c.SET_USER,
          authUser: null
        });
      }
    })
  }

  render() {
    return (
      <div>
        <Navbar user={this.props.user} />
        <div className='container'>
          {this.props.user.authUser ? (
            <Switch>
              <Route
                exact path='/'
                render={() => <HomePage media={this.props.media} />}
              />
              <Route path='/friends' component={Friends} />
              <Route
                path='/shows'
                render={() => <ShowsPage media={this.props.media} dispatch={this.props.dispatch} />}
              />
            </Switch>
          ) : (
            <SignIn user={this.props.user} dispatch={this.props.dispatch}/>
          )}
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    media: state.media,
    user: state.user
  };
};

App.propTypes = {
  dispatch: PropTypes.func,
  media: PropTypes.object,
  user: PropTypes.object
}

export default withRouter(connect(mapStateToProps)(App));