import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppRouter from './js/components/AppRouter';
import initStore from './store';
import { saveState } from './localStorage';

const store = initStore();

store.subscribe(() => {
  const curStore = store.getState();
  saveState(curStore);
});

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
