import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { caseAddReducer } from "./caseAddReducer";
import { regReducer } from "./regReducer";
import { authReducer } from "./authReducer";
import { removeReducer } from "./removeReducer";
import { userIdReducer } from "./userIdReducer";
import { changeReducer } from "./changeReducer";
import { caseAllReduser } from "./caseAllReduser";
import { isAuthReducer } from "./isAuthReducer";


export const rootReducer = combineReducers({
    user: userReducer,
    case: caseAddReducer,
    caseall: caseAllReduser,
    reg: regReducer,
    auth: authReducer,
    remove: removeReducer,
    userid: userIdReducer,
    change: changeReducer,
    isAuth: isAuthReducer,
})