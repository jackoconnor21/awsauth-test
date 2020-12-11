export default {
    SET_USER(state, payload) {
        console.log('setting user', payload)
        state.user = payload
    },
    SIGN_OUT_USER(state) {
        state.user = null
    }
}