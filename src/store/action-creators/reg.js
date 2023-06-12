import axios from "axios"


export const fetchRegistr = (obj, url1, token) => {
    return async (dispatch) => {
        try {
            dispatch({type: 'FETCH_REG'})
            const response = await axios.post(url1, obj, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                    }
                })


            dispatch({type: 'FETCH_REG_SUCCSESS', payload: response.data})
         alert("Пользователь успешно зарегистрирован");
        } catch (e) {
            dispatch({type: 'FETCH_REG_ERROR', payload: 'Произошла ошибка'})
            const errorAnsver = e;
            alert(errorAnsver.response.data.message);
        }
    }
}