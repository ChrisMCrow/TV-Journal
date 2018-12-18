import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import middlewareLogger from './middleware/middlewareLogger';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

export const store = createStore(rootReducer, applyMiddleware(middlewareLogger, thunkMiddleware));

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();