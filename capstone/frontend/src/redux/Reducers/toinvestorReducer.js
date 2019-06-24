import {LOAD_TOINVESTORS} from '../Actions/toinvestors'

const initialState = {
    toinvestorArray : []
}

export function toinvestorReducer(state = initialState, action){
    switch(action.type){
        case LOAD_TOINVESTORS:
            return{
                ...state,
                toinvestorArray : state.toinvestorArray.concat([action.toinvestor])
            }
    }
    return state;
}
