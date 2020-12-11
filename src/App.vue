<template>
  <div id="app">
    <ul id="nav">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li v-if="!currentUser"><router-link to="/auth">Login</router-link></li>
      <li v-else><a href="#" @click.prevent="signOut">Sign Out</a></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      currentUser: 'auth/getCurrentUser'
    })
  },
  methods: {
    signOut() {
      this.$store.dispatch('auth/signOut')
    }
  },
  created() {
    this.$store.dispatch('auth/setUser')
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
