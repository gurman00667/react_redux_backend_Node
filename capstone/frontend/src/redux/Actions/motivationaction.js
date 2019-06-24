import axios from 'axios'
export const LOAD_MOTIVATION = 'LOAD_MOTIVATION';

export function LoadMotivationAction(motivation) {
    return {
        motivation: motivation,
        type: LOAD_MOTIVATION
    }
}


export  function LoadMotivationActionThunk() {
    return (dispatch)=>{
            axios.get(`http://localhost:8080/api/motivation`).then(res=>{
                console.log(res);
                dispatch(LoadMotivationAction(res.data[0]))
            })
    }
}

