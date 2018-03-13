import * as types from './mutation-types'
import {setAutoLoginFlag} from 'common/js/cache'

export const setLoginPage = function({commit}, loginPage) {
    commit(types.SET_LOGINPAGE, loginPage)
}

export const setAutoLogin = function({commit}, isAutoLogin) {
    commit(types.SET_AUTOLOGIN, setAutoLoginFlag(isAutoLogin))
}