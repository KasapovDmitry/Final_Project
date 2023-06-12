import axios from "axios"


export const fetchUsers = (token, met, url) => {
    return async (dispatch) => {
        try {
            dispatch({type: 'FETCH_USERS'})
            const response = await axios({
                method: `${met}`,
                url: `${url}`,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                    }
                })
                dispatch({type: 'FETCH_USERS_SUCCSESS', payload: response.data})

        } catch (e) {
            dispatch({type: 'FETCH_USERS_ERROR', payload: 'Произошла ошибка'})

        }
    }
}

