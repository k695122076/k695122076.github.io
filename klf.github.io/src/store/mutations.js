import * as types from './mutation-types'

const mutations = {
    [types.SET_LOGINPAGE](state, isLoginPage) {
        state.isLoginPage = isLoginPage
    },
    [types.SET_AUTOLOGIN](state, isAutoLogin) {
        state.isAutoLogin = isAutoLogin
    }
}

export default mutations