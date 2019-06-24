import { LOGIN_SUCCESS, LOGOUT} from './actions';

const initialState = {
    isAuthenticated: localStorage.getItem('token')
};

export function AuthReducer (state = initialState, action){
    switch(action.type){
        case LOGIN_SUCCESS:
        return {
            ...state,
            isAuthenticated: true
        };
        case LOGOUT:
        return {
            ...state,
            isAuthenticated: false
        };
        default:
        return state;
    }
}