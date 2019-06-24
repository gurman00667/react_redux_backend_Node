import {LOAD_MOTIVATION} from '../Actions/motivationaction'

const initialState = {
    motivationArray : []
}

export function motivationReducer(state = initialState, action){
    switch(action.type){
        case LOAD_MOTIVATION:
            return{
                ...state,
                motivationArray: state.motivationArray.concat([action.motivation])
            }
    }
    return state;
}