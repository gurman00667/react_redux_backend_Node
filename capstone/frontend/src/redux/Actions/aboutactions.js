import axios from 'axios';

export const LOAD_ABOUT = "LOAD_ABOUT"


export function LoadAboutActions(about) {
    return {
        about: about,
        type: LOAD_ABOUT
    }
}

export function LoadAboutActionsThunk(){
    
    return(dispatch)=>{
            axios.get(`http://localhost:8080/api/about`).then(res=>{
                console.log(res);
                dispatch(LoadAboutActions(res.data[0]))

        })
    
    }
}

