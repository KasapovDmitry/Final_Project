const FETCH_REG = 'FETCH_REG';
const FETCH_REG_SUCCSESS = 'FETCH_REG_SUCCSESS';
const FETCH_REG_ERROR = 'FETCH_REG_ERROR';

const initialState = {
    loading: false,
    error: null,
    token: null,
    values: {},
}

export const regReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REG:
            return {loading: true, error: null, token: '', values: {}}
        case FETCH_REG_SUCCSESS: {
            return {loading: false, error: null, values: action.payload, token: '' }
        }
        case FETCH_REG_ERROR:
            return {loading: false, error: action.payload, values: {}}
        default:
            return state
    }
}