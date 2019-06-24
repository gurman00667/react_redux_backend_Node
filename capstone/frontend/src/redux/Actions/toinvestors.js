import axios from 'axios';
export const LOAD_TOINVESTORS = 'LOAD_TOINVESTORS';

export function LoadToInvestorsAction(toinvestor) {
    return {
        toinvestor: toinvestor,
        type: LOAD_TOINVESTORS
    }
}


export  function LoadToInvestorsActionThunk() {
    return (dispatch)=>{
            axios.get(`http://localhost:8080/api/toinvestors`).then(res=>{
                console.log(res);
                dispatch(LoadToInvestorsAction(res.data[0]))
            })
    }
}