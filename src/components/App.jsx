import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Navbar from './Navbar';
import SignIn from './SignIn';
import HomePage from './home/HomePage';
import Friends from './friends/FriendsPage';
import ShowsPage from './shows/ShowsPage';
import { connect } from 'react-redux';
import { getGenres, getPopularShows } from '../actions';
import PropTypes from 'prop-types';

class App extends React.Component {
  
  componentDidMount() {
    this.props.dispatch(getPopularShows());
    this.props.dispatch(getGenres());
  }

  render() {    
    return (
      <div>
        <Navbar/>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={SignIn} />
            <Route
              path='/home' 
              render={() => <HomePage media={this.props.media} />} 
            />
            <Route path='/friends' component={Friends} />
            <Route 
              path='/shows' 
              render={() => <ShowsPage media={this.props.media} dispatch={this.props.dispatch} />} 
            />
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