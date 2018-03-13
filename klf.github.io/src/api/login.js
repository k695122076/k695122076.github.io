import axios from 'axios'
import {ORIGIN} from './config'

export function login(data) {
    let url = ORIGIN + 'api/login'

    return axios.post(url, data).then((res) => {
        return Promise.resolve(res.data)
    })
}