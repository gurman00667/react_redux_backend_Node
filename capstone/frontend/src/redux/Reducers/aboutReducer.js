import {LOAD_ABOUT} from '../Actions/aboutactions';

const initialState = {
    aboutArray:[]
}

export function aboutReducer(state= initialState, action){
switch(action.type){
    case (LOAD_ABOUT):{
        return {
            ...state,
            aboutArray: state.aboutArray.concat([action.about]) 
        }
    }
   
}
 return state;
}