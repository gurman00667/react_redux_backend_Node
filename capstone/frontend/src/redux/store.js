import { Action, applyMiddleware, combineReducers, compose, createStore} from 'redux';

import { summuryReducer } from './summury/summuryReducer';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    summury: summuryReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const createReduxStore = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
}