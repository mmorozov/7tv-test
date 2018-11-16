import React, { lazy } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import createStore from '../store/index.js';
import classNames from './app.module.css';
import { withLoader } from '../components/loader';

const Posts = lazy(() => import('../pages/posts'));
const Post = lazy(() => import('../pages/post'));

// API Host can be changed (in abstract future) via ENV
const store = createStore('https://jsonplaceholder.typicode.com');

export default function App() {
  return (
    <div className={classNames.container}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={withLoader(Posts)} />
            <Route path="/post/:id" exact component={withLoader(Post)} />
            <Route
              component={() => (
                <div className="page">
                  <h1>Not found</h1>
                </div>
              )}
            />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}
