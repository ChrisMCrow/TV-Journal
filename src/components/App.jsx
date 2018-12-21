import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.scss';
import { Navbar, Signin, HomePage, FriendsPage, ShowsPage } from './../components';
import PropTypes from 'prop-types';
import { getGenres, getPopularShows, authListener } from '../actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    dispatch(authListener());
    dispatch(getPopularShows());
    dispatch(getGenres());
  }
    
  render() {
    if (this.props.user.authUser) {
      return (
        <div className='app'>
          <nav>
            <Navbar user={this.props.user} dispatch={this.props.dispatch} />
          </nav>
          <div className='container'>
              <Switch>
                <Route
                  exact path='/'
                  render={() => <HomePage 
                    media={this.props.media} 
                    user={this.props.user} 
                    dispatch={this.props.dispatch}
                  />}
                />
                <Route path='/friends' component={FriendsPage} />
                <Route
                  path='/shows'
                  render={() => <ShowsPage media={this.props.media} dispatch={this.props.dispatch} />}
                />
              </Switch>
          </div>
        </div>
      );
    } else {
      return (
        <div className='app'>
          <nav>
            <Navbar user={this.props.user} dispatch={this.props.dispatch} />
          </nav>
          <div className='container'>
            <Signin user={this.props.user} dispatch={this.props.dispatch}/>
          </div>
        </div>
      );
    }
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