import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import { AUTH_USER } from './actions/types';

import App from './components/app';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import RequireAuth from './components/auth/require-auth';
import Feature from './components/feature';
import Home from './components/home';
import reducers from './reducers';

// Create Store with Middleware
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

// Check if User has an auth token
const token = localStorage.getItem('token');

// Signin user if token is found...
if (token) {
  store.dispatch({
    type: AUTH_USER
  });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="signin" component={Signin} />
            <Route path="signout" component={Signout} />
            <Route path="signup" component={Signup} />
            <Route path="feature" component={RequireAuth(Feature)} />
        </Route>

    </Router>
  </Provider>
  , document.getElementById('app-container'));
