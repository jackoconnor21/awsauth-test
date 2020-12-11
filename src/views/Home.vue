<template>
  <div class="home">
    <div v-for="todo in todos" :key="todo.id">
      {{ todo.name }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  data: () => ({
  }),
  computed: {
    ...mapGetters({
      todos: 'todos'
    })
  },
  async created() {
    await this.$store.dispatch('getTodos').catch(err => console.log('caught', err))
  }
}
</script>
