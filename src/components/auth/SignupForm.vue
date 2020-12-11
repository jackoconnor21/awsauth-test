<template>
    <div>
        <form v-if="!confirmationRequired" @submit.prevent="submitForm">
            <!-- <div class="form-control">
                <div class="field-wrapper half">
                    <label for="firstName">First Name</label>
                    <input id="firstName" type="text" v-model.trim="firstName" />
                </div>
                <div class="field-wrapper half">
                    <label for="lastName">Last Name</label>
                    <input id="lastName" type="text" v-model.trim="lastName" />
                </div>
            </div> -->
            <div class="form-control">
                <div class="field-wrapper">
                    <label for="signup-username">Username</label>
                    <input id="signup-username" type="text" v-model.trim="username" />
                </div>
            </div>
            <div class="form-control">
                <div class="field-wrapper">
                    <label for="signup-email">Email</label>
                    <input id="signup-email" type="text" v-model.trim="email" />
                </div>
            </div>
            <div class="form-control">
                <div class="field-wrapper">
                    <label for="signup-password">Password</label>
                    <input id="signup-password" type="password" v-model="password" />
                </div>
            </div>
            <div class="form-control">
                <div class="field-wrapper">
                    <label for="passwordConf">Confirm Password</label>
                    <input id="passwordConf" type="password" v-model="passwordConf" />
                </div>
            </div>
            <div class="actions">
                <button>Sign Up</button>
            </div>
        </form>
        <form v-else @submit.prevent="confirmSignUp">
            <div v-if="!email" class="form-control">
                <div class="field-wrapper">
                    <label for="username">Username</label>
                    <input id="username" type="text" v-model="username" />
                </div>
            </div>
            <div class="form-control">
                <div class="field-wrapper">
                    <label for="code">Verification Code</label>
                    <input id="code" type="text" v-model="code" />
                </div>
            </div>
            <div class="actions">
                <button>Confirm</button>
                <a @click.prevent="resendConfirmation">Re-send confirmation code</a>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data: () => ({
        username: '',
        email: '',
        password: '',
        passwordConf: null,
        confirmationRequired: false,
        code: null
    }),
    methods: {
        submitForm() {
            const user = {
                username: this.username,
                email: this.email,
                password: this.password
            }

            this.$store.dispatch('auth/signUp', user).then(
                () => {
                    this.confirmationRequired = true
                }
            ).catch((err) => {
                console.log('error ', err)
            })
        },
        confirmSignUp() {
            const confirmation = {
                username: this.username,
                code: this.code
            }

            this.$store.dispatch('auth/confirmSignup', confirmation)
        },
        resendConfirmation() {
            this.$store.dispatch('auth/resendConfirmationCode', this.username).then(res => {
                console.log(res)
            })
        }
    }
}
</script>