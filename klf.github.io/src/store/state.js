import {getAutoLoginFlag} from 'common/js/cache'

const state = {
    isLoginPage: true,
    isAutoLogin: getAutoLoginFlag()
}
export default state