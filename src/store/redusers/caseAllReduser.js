const FETCH_CASES_ALL = 'FETCH_CASES_ALL';
const FETCH_CASES_ALL_SUCCSESS = 'FETCH_CASES_ALL_SUCCSESS';
const FETCH_CASES_ALL_ERROR = 'FETCH_CASES_ALL_ERROR';

const initialState = {
    token: null,
    loading: false,
    error: null,
    cases: [],
}

export const caseAllReduser = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CASES_ALL:
            return {loading: true, error: null, users: []}
        case FETCH_CASES_ALL_SUCCSESS:
            return {loading: false, error: null, token:"", cases: action.payload}
        case FETCH_CASES_ALL_ERROR:
            return {loading: false, error: action.payload, cases: []}
        default:
            return state
    }
}