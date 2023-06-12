const FETCH_AUTH = 'FETCH_AUTH';
const FETCH_AUTH_SUCCSESS = 'FETCH_AUTH_SUCCSESS';
const FETCH_AUTH_ERROR = 'FETCH_AUTH_ERROR';

const initialState = {
    loading: false,
    error: null,
    token: "",
    currentUser: {},
    values: {},
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_AUTH:
            return {...state, loading: true, error: 'Еще не прошел запрос', values: action.payload}
        case FETCH_AUTH_SUCCSESS: {
            const {token, user} = action.payload.data
            return {...state, loading: false, error: null, values: {}, token: token, currentUser: user}
        }
        case FETCH_AUTH_ERROR:
            return {...state,loading: false, error: action.payload, values: {}}
        default:
            return state
    }
}
