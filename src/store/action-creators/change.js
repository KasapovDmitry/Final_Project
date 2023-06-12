import axios from "axios"


export const fetchChange = (obj, url, id, token) => {
    return async (dispatch) => {
        try {
            dispatch({type: 'FETCH_CHANGE'})
            const response = await axios.put(url+id, obj, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                    }
                })


            dispatch({type: 'FETCH_CHANGE_SUCCSESS', payload: response.data})
         alert("Изменения сохранены");
        } catch (e) {
            dispatch({type: 'FETCH_CHANGE_ERROR', payload: 'Произошла ошибка'})
            const errorAnsver = e;
            alert(errorAnsver.response.data.message);
        }
    }
}