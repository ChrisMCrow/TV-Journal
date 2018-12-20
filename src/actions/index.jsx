import firebase from 'firebase';
import constants from './../constants';

const { c, firebaseConfig } = constants;
const MOVIEDB_API_KEY = '?api_key=4ecfbbe47d132ddcc6b98ce77d71b265';


//API Actions
export function getPopularShows() {
  return async function(dispatch) {
    try {
      const response = await fetch(`${c.API_URL}/trending/tv/week${MOVIEDB_API_KEY}`);
      const json = await response.json();
      dispatch({
        type: c.GET_TRENDING,
        data: json.results
      });
    }
    catch (error) {
      console.log('An error occurred.', error);
    }
  }
}

export function getGenres() {
  return async function(dispatch) {
    try {
      const response = await fetch(`${c.API_URL}/genre/tv/list${MOVIEDB_API_KEY}`);
      const json = await response.json();
      dispatch({
        type: c.GET_GENRES,
        data: json.genres
      });
    }
    catch (error) {
      console.log('An error occurred.', error);
    }
  }
}

export function discoverGenre(id, pageNumber = 1) {
  return async function(dispatch) {
    try {
      const response = await fetch(`${c.API_URL}/discover/tv${MOVIEDB_API_KEY}&language=en-US&sort_by=popularity.desc&page=${pageNumber}&with_genres=${id}`);
      const json = await response.json();
      dispatch({
        type: c.DISCOVER_GENRE,
        id,
        results: json.results, 
        page: json.page
      });
    }
    catch (error) {
      console.log('An error occurred', error);
    }
  }
}

export function searchTV(query, pageNumber=1) {
  return async function(dispatch) {
    try {
      const response = await fetch(`${c.API_URL}/search/tv${MOVIEDB_API_KEY}&query=${query}&page=${pageNumber}`);
      const json = await response.json();
      dispatch({
        type: c.SEARCH_TV,
        data: json.results,
        query
      });
    } 
    catch (error) {
      console.log('An error occurred', error);
    }
  }
}


//Firebase Actions
firebase.initializeApp(firebaseConfig);
const DB = firebase.database();

export function authListener() {
  return function(dispatch) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: c.SET_USER,
          authUser: firebase.auth().currentUser.uid
        });
      } else {
        dispatch({
          type: c.SET_USER,
          authUser: null
        });
      }
    });
  }
}

export function login(email, password, dispatch) {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(() => {
  }).catch((error) => {
    dispatch({
      type: c.LOG_ERROR,
      error: error.message
    });
  });
}

export function signup(signupEmail, password, dispatch) {
  firebase.auth().createUserWithEmailAndPassword(signupEmail, password)
  .then(() => {
    let uid = firebase.auth().currentUser.uid;
    DB.ref('users').child(uid).set({"email": signupEmail});
  }).catch((error) => {
    dispatch({
      type: c.LOG_ERROR,
      error: error.message
    });
  });
}

export function logout() {
  firebase.auth().signOut();
}

export function addToShows(show) {
  console.log('addToShows activated', show);
  console.log('current user: ', );
  DB.ref().push('my_shows').set({

  })
}

