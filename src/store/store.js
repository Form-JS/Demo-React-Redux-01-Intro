import { legacy_createStore as createStore, combineReducers } from 'redux';
import counterReducer from './reducers/counter-reducer';
import personReducer from './reducers/person-reducer';

const reducer = combineReducers({
    counter: counterReducer,
    person: personReducer
});

export const store = createStore(reducer);
export default store;