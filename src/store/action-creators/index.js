import * as UserActionCreators from './user'
import * as CaseAddActionCreators from './caseAdd'
import * as CaseAllActionCreators from './caseAll'
import * as RegActionCreators from './reg'
import * as AuthActionCreators from './auth'
import * as RemoveActionCreators from './remove'
import * as UserIdActionCreators from './userId'
import * as ChangeIdActionCreators from './change'
import * as IsAuthActionCreators from './isAuth'


export default {
    ...UserActionCreators,
    ...CaseAddActionCreators,
    ...CaseAllActionCreators,
    ...RegActionCreators,
    ...AuthActionCreators,
    ...RemoveActionCreators,
    ...UserIdActionCreators,
    ...ChangeIdActionCreators,
    ...IsAuthActionCreators,
}