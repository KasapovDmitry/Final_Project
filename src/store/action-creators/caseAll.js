import axios from "axios"


export const fetchAllCases = (token, met, url) => {
    return async (dispatch) => {
        try {
            dispatch({type: 'FETCH_CASES_ALL'})
            const response = await axios({
                method: `${met}`,
                url: `${url}`,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                    }
                })
                dispatch({type: 'FETCH_CASES_ALL_SUCCSESS', payload: response.data.data})
        } catch (e) {
            dispatch({type: 'FETCH_CASES_ALL_ERROR', payload: 'Произошла ошибка'})
        }
    }
}