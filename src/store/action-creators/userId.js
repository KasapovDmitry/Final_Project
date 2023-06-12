import axios from "axios"


export const fetchUserId = (token, met, url, id) => {
    return async (dispatch) => {
        try {
            dispatch({type: 'FETCH_USER_ID'})
            const response = await axios({
                method: `${met}`,
                url: url + id,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                    }
                })
                dispatch({type: 'FETCH_USER_ID_SUCCSESS', payload: response.data.data})
        } catch (e) {
            dispatch({type: 'FETCH_USER_ID_ERROR', payload: 'Произошла ошибка'})
        }
    }
}
