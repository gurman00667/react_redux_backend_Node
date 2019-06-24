import axios from 'axios';

export const ADD_SUMMURY = 'ADD_SUMMURY';
export const LOAD_SUMMURY = 'LOAD_SUMMURY';


export function AddSummuryAction(summury){
    return {
        summury: summury,
        type: ADD_SUMMURY
    }
}

export function LoadSummuryAction(summury) {
        return {
            summury: summury,
            type: LOAD_SUMMURY
        }
}

export  function LoadSummuryActionThunk() {
    return (dispatch)=>{
            axios.get(`http://localhost:8080/api/summary`).then(res=>{
                console.log(res);
                dispatch(LoadSummuryAction(res.data[0]))
            })
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