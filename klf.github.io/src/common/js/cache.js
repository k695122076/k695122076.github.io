import storage from 'good-storage'

const AUTOLOGIN_KEY = '__AUTOLOGIN__'

const USERINFO_KEY = '__USERINFO__'

export function setAutoLoginFlag(flag) {
    storage.set(AUTOLOGIN_KEY, flag)
}

export function getAutoLoginFlag() {
    return storage.get(AUTOLOGIN_KEY, false)
}

export function getUserInfo(){
    return storage.get(USERINFO_KEY, '')
}

export function setUserInfo(obj){
    storage.set(USERINFO_KEY, obj)
}

export function removeUserInfo(){
    storage.remove(USERINFO_KEY)
}
