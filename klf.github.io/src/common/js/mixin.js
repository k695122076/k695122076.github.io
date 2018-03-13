import {mapActions} from 'vuex'

export const setLoginPage = {
    // keep-alive激活的时候
    activated () {
        this.setLoginPage(false)
    },
    methods: {
        ...mapActions([
            'setLoginPage'
        ])
    }
}