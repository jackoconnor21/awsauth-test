<template>
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <div class="field-wrapper">
                <label for="username">username</label>
                <input type="username" id="username" v-model.trim="username" />
            </div>
        </div>
        <div class="form-control">
            <div class="field-wrapper">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="password" />
            </div>
        </div>
        <div class="actions">
            <button>Sign In</button>
        </div>
    </form>
</template>

<script>
export default {
    data: () => ({
        username: '',
        password: ''
    }),
    methods: {
        submitForm() {
            console.log('in submit form ')
            const user = {
                username: this.username,
                password: this.password
            }

            this.$store.dispatch('auth/signIn', user).then(res => {
                console.log('response', res)
            })
        }
    }
}
</script>