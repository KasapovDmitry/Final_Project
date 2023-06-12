const FETCH_CHANGE = 'FETCH_CHANGE';
const FETCH_CHANGE_SUCCSESS = 'FETCH_CHANGE_SUCCSESS';
const FETCH_CHANGE_ERROR = 'FETCH_CHANGE_ERROR';

const initialState = {
    token: null,
    loading: false,
    error: null,
    values: {},
}

export const changeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHANGE:
            return {loading: true, error: null, token: '', values: {}}
        case FETCH_CHANGE_SUCCSESS: {
            return {loading: false, error: null, values: action.payload, token: '' }
        }
        case FETCH_CHANGE_ERROR:
            return {loading: false, error: action.payload, values: {}}
        default:
            return state
    }
}