const FETCH_IS_AUTH = 'FETCH_IS_AUTH';
const FETCH_IS_AUTH_SUCCSESS = 'FETCH_IS_AUTH_SUCCSESS';
const FETCH_IS_AUTH_ERROR = 'FETCH_IS_AUTH_ERROR';

const initialState = {
    answer: null,
    error: null,
    auth: {},
}

export const isAuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_IS_AUTH:
            return {...state,  error: null, }
            
        case FETCH_IS_AUTH_SUCCSESS: {
            return {...state, answer: 'OK', auth: action.payload}
        }
        case FETCH_IS_AUTH_ERROR:
            return {...state,  error: action.payload, auth: null, answer: null}
        default:
            return state
    }
}
