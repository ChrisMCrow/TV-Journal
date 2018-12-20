import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.scss';
import { Navbar, Signin, HomePage, FriendsPage, ShowsPage } from './../components';
import PropTypes from 'prop-types';
import { getGenres, getPopularShows, authListener, watchShowsRef } from '../actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    dispatch(authListener());
    dispatch(getPopularShows());
    dispatch(getGenres());
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
                render={() => <HomePage 
                  media={this.props.media} 
                  user={this.props.user} 
                />}
              />
              <Route path='/friends' component={FriendsPage} />
              <Route
                path='/shows'
                render={() => <ShowsPage media={this.props.media} dispatch={this.props.dispatch} />}
              />
            </Switch>
          ) : (
            <Signin user={this.props.user} dispatch={this.props.dispatch}/>
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