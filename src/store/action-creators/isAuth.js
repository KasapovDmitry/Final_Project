import axios from "axios"



export const fetchIsAuth = (token) => {
    
    return async (dispatch) => {
        try {
            dispatch({type: 'FETCH_IS_AUTH'})
            const response = await axios.get('https://sf-final-project-be.herokuapp.com/api/auth/', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                }
            })
            dispatch({type: 'FETCH_IS_AUTH_SUCCSESS', payload: response.data.data.user})
        } catch (e) {
            dispatch({type: 'FETCH_IS_AUTH_ERROR', payload: 'Произошла ошибка'})
        }
    }
}