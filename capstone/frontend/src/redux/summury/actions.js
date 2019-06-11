import axios from 'axios';
import { Dispatch } from 'redux';

export const ADD_SUMMURY = 'ADD_SUMMURY';

export function AddSummuryAction(summury){
    return {
        summury: summury,
        type: ADD_SUMMURY
    }
}

export function AddSummuryActionThunk(summury){
    return(dispatch) => {
        axios.post(`${process.env.REACT_APP_API_SERVER}/api/test`, summury).then(res => {
            console.log(res)
            dispatch(AddSummuryAction(summury))
        })
    }
}