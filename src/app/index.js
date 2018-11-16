import React from 'react';
import { Provider } from 'react-redux';

import createStore from '../store/index.js';

// API Host can be changed (in abstract future) via ENV
const store = createStore('https://jsonplaceholder.typicode.com');

export default function App() {
  return (
    <Provider store={store}>
      <span>Hello</span>
    </Provider>
  );
}
