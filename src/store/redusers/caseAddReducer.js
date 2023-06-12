const FETCH_CASES = 'FETCH_CASES';
const FETCH_CASES_SUCCSESS = 'FETCH_CASES_SUCCSESS';
const FETCH_CASES_ERROR = 'FETCH_CASES_ERROR';

const initialState = {
    loading: false,
    error: null,
    token: null,
    message: {},
}


export const caseAddReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CASES:
            return {...state, loading: true}
        case FETCH_CASES_SUCCSESS:
            return {...state, loading: false, error: null, token: '', message: action.payload}
        case FETCH_CASES_ERROR:
            return {...state, loading: false, error: action.payload, message: {}}
        default:
            return state
    }
}
