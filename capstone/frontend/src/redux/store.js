import { applyMiddleware, combineReducers, compose, createStore} from 'redux';

<<<<<<< HEAD
import { summuryReducer } from './Reducers/summuryReducer';
=======
import { summuryReducer } from './summury/summuryReducer';
import { AuthReducer } from './auth/authReducer'
>>>>>>> 1696c66fa5d845183f5c85393b3bdec5779e573f

import { productReducer } from './Reducers/productreducer';
import { motivationReducer } from './Reducers/motivationReducer';
import { toinvestorReducer } from './Reducers/toinvestorReducer';
import {advantageReducer} from './Reducers/advantageReducer';
import {aboutReducer} from './Reducers/aboutReducer'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    summury: summuryReducer,
<<<<<<< HEAD
    product: productReducer,
    toinvestor: toinvestorReducer,
    motivation: motivationReducer,
    advantage: advantageReducer,
    about:aboutReducer
=======
    auth: AuthReducer
>>>>>>> 1696c66fa5d845183f5c85393b3bdec5779e573f
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const createReduxStore = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
}