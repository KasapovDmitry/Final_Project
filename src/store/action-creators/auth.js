import axios from "axios"



export const fetchAuth = (obj) => {
    
    return async (dispatch) => {
        try {
            dispatch({type: 'FETCH_AUTH'})
            const response = await axios.post('https://sf-final-project-be.herokuapp.com/api/auth/sign_in', obj)
            

            dispatch({type: 'FETCH_AUTH_SUCCSESS', payload: response.data})
            const myToken = response.data.data.token;
            localStorage.setItem('myToken', myToken)
        } catch (e) {
            dispatch({type: 'FETCH_AUTH_ERROR', payload: 'Произошла ошибка'})
            const errorAnsver = e;
            alert(errorAnsver.response.data.message);
        }
    }
}