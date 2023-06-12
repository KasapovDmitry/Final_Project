const FETCH_USERS = 'FETCH_USERS';
const FETCH_USERS_SUCCSESS = 'FETCH_USERS_SUCCSESS';
const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

const initialState = {
    token: null,
    loading: false,
    error: null,
    users: [],
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {loading: true, error: null, users: []}
        case FETCH_USERS_SUCCSESS:
            return {loading: false, error: null, token:"", users: action.payload.officers}
        case FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, users: []}
        default:
            return state
    }
}