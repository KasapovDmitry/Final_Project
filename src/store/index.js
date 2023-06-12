import { createStore } from "redux"
import thunk from 'redux-thunk'
import { applyMiddleware } from "redux"
import { rootReducer } from "./redusers"

export const store = createStore(rootReducer, applyMiddleware(thunk))
