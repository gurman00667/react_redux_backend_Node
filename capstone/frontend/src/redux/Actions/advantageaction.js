import axios from 'axios';
export const LOAD_ADVANTAGE = 'LOAD_ADVANTAGE';

export function LoadAdvantageAction(advantage) {
    return {
        advantage: advantage,
        type: LOAD_ADVANTAGE
    }
}

export  function LoadAdvantageActionThunk() {
    return (dispatch)=>{
            axios.get(`http://localhost:8080/api/advantage`).then(res=>{
                console.log(res);
                dispatch(LoadAdvantageAction(res.data[0]))
            })
    }
}