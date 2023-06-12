const FETCH_REMOVE = 'FETCH_REMOVE';
const FETCH_REMOVE_SUCCSESS = 'FETCH_REMOVE_SUCCSESS';
const FETCH_REMOVE_ERROR = 'FETCH_REMOVE_ERROR';

const initialState = {
    token: null,
    ok: false,
    no: null,
    user: null,
    cases: null,
}

export const removeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REMOVE:
            return {ok: true, no: null, user: null}
        case FETCH_REMOVE_SUCCSESS:
            return {ok: false, no: null, token:"", cases:action.payload, user: action.payload.officers}
        case FETCH_REMOVE_ERROR:
            return {ok: false, no: action.payload, user: null}
        default:
            return state
    }
}