<template>
    <div class="container">
        <div class="auth-holder" :class="{ 'right-panel-active': panelActive} ">
            <div class="form-container sign-up-container">
                <h2 style="text-align: center">Create Account</h2>
                <signup-form />
            </div>
            <div class="form-container sign-in-container">
                <h2 style="text-align: center">Login</h2>
                <login-form />
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>
                            To keep connected with us please login with your personal info
                        </p>
                        <button class="ghost" id="signIn" @click="toggleActive">Sign In</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>Hello!</h1>
                        <p>Please register your details to begin your journey</p>
                        <button class="ghost" id="signUp" @click="toggleActive">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SignupForm from '@/components/auth/SignupForm.vue'
import LoginForm from '@/components/auth/LoginForm.vue'
import { mapGetters } from 'vuex'

export default {
    components: {
        SignupForm,
        LoginForm
    },
    data: () => ({
        mode: '',
        panelActive: false
    }),
    computed: {
        ...mapGetters({
            currentUser: 'auth/getCurrentUser'
        })
    },
    methods: {
        toggleActive() {
            this.panelActive = !this.panelActive
        }
    }
}
</script>
<style lang="scss" scoped>

    .auth-holder {
        margin-top: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
        position: relative;
        overflow: hidden;
        width: 100%;
        max-width: 100%;
        min-height: 550px;
    }
    .form-container {
        position: absolute;
        top: 0;
        height: 100%;
        transition: all 0.6s ease-in-out;
    }

    .sign-in-container {
        left: 0;
        width: 50%;
        z-index: 2;
    }

    .sign-up-container {
        left: 0;
        width: 50%;
        opacity: 0;
        z-index: 1;
    }

    .overlay-container {
        position: absolute;
        top: 0;
        left: 50%;
        width: 50%;
        height: 100%;
        overflow: hidden;
        transition: transform 0.6s ease-in-out;
        z-index: 100;
    }

    .overlay {
        background: #1f2199;
        background: -webkit-linear-gradient(to right, #3f41b5, #1f2199);
        background: linear-gradient(to right, #3f41b5, #1f2199);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 0 0;
        color: #ffffff;
        position: relative;
        left: -100%;
        height: 100%;
        width: 200%;
        transform: translateX(0);
        transition: transform 0.6s ease-in-out;
    }

    .overlay-panel {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 40px;
        text-align: center;
        top: 0;
        height: 100%;
        width: 50%;
        transform: translateX(0);
        transition: transform 0.6s ease-in-out;
    }

    .overlay-left {
        transform: translateX(-20%);
    }

    .overlay-right {
        right: 0;
        transform: translateX(0);
    }

    .right-panel-active {
        .sign-in-container {
            transform: translateX(100%);
            opacity: 0
        }
        .sign-up-container {
            transform: translateX(100%);
            opacity: 1;
            z-index: 5;
            animation: show 0.6s;
        }
        .overlay-container {
            transform: translateX(-100%);
        }
        .overlay {
            transform: translateX(50%);
        }
        .overlay-left {
            transform: translateX(0);
        }
        .overlay-right {
            transform: translateX(20%);
        }
    }

    @keyframes show {
        0%,
        49.99% {
            opacity: 0;
            z-index: 1;
        }

        50%,
        100% {
            opacity: 1;
            z-index: 5;
        }
    }

</style>