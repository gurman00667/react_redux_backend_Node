import { Action, applyMiddleware, combineReducers, compose, createStore} from 'redux';

import { summuryReducer } from './Reducers/summuryReducer';

import { productReducer } from './Reducers/productreducer';
import { motivationReducer } from './Reducers/motivationReducer';
import { toinvestorReducer } from './Reducers/toinvestorReducer';
import {advantageReducer} from './Reducers/advantageReducer';
import {aboutReducer} from './Reducers/aboutReducer'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    summury: summuryReducer,
    product: productReducer,
    toinvestor: toinvestorReducer,
    motivation: motivationReducer,
    advantage: advantageReducer,
    about:aboutReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const createReduxStore = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
}