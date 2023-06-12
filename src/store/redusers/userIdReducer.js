const FETCH_USER_ID = 'FETCH_USER_ID';
const FETCH_USER_ID_SUCCSESS = 'FETCH_USER_ID_SUCCSESS';
const FETCH_USER_ID_ERROR = 'FETCH_USER_ID_ERROR';

const initialState = {
    token: null,
    loading: false,
    error: null,
    user: {},
}

export const userIdReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_ID:
            return {loading: true, error: null, users: {}}
        case FETCH_USER_ID_SUCCSESS:
            return {loading: false, error: null, token:"", user: action.payload}
        case FETCH_USER_ID_ERROR:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}