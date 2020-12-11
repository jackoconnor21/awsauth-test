import { Auth } from "aws-amplify"

export default {
    async signUp(_, payload) {
        
        console.log('in signup with payload', payload)
        try {
            const user = await Auth.signUp({
                username: payload.username,
                password: payload.password,
                attributes: {
                    email: payload.email
                }
            })

            return user

        } catch (error) {
            return Promise.reject()
        }
    },
    async confirmSignup(_, payload) {
        try {
            return Auth.confirmSignUp(payload.username, payload.code)
        } catch (error) {
            console.log('error in confirming account', error)
        }
    },
    async signIn(_, payload) {
        try {
            return await Auth.signIn(payload.username, payload.password)
        } catch (error) {
            console.log('error signing in ', error)
        }
    },
    async resendConfirmationCode(_, username) {
        try {
            return await Auth.resendSignUp(username)
        } catch (error) {
            console.log('error resending confirmation code', error)
        }
    },
    async setUser({commit}) {
        Auth.currentAuthenticatedUser().then(user => {
            commit('SET_USER', user)
        }).catch(err => {
            console.log(err)
        })
    },
    async signOut({commit}) {
        try {
            Auth.signOut()
            commit('SIGN_OUT_USER')

        } catch (error) {
            console.log('error during signout', error)
        }
    }
}