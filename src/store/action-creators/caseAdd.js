import axios from "axios"


export const fetchAddCases = (obj, url, token) => {
    return async (dispatch) => {
        try {
            dispatch({type: 'START_IS_AUTH'})
                localStorage.getItem('myToken')
            dispatch({type: 'FETCH_CASES'})
            const response = await axios.post(url, obj, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                    }
                })

                dispatch({type: 'FETCH_CASES_SUCCSESS', payload: response.data})
            alert("Ваше сообщение отправлено")
        } catch (e) {
            dispatch({type: 'FETCH_CASES_ERROR', payload: 'Произошла ошибка'})
        }
    }
}

