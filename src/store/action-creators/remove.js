import axios from "axios"



export const fetchRemove = (url, num, token) => {
    return async (dispatch) => {
        try {
            dispatch({type: 'FETCH_REG'})
            console.log(`${url}:${num}`);
            console.log(token);
            const response = await axios.delete(url + num, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                    }
                })


            dispatch({type: 'FETCH_REG_SUCCSESS', payload: response.data})

        } catch (e) {
            dispatch({type: 'FETCH_REG_ERROR', payload: 'Произошла ошибка'})

        }
    }
}