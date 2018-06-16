import { createStore } from 'redux';
import rootReducer from './js/reducers';


export default initialState => {
  const store = createStore(
    rootReducer,
    initialState
  );
  return store;
}