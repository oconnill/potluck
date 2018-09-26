<template>
  <div id="app">
    <div class="text-right logout-bar" v-if="activeUser.hasOwnProperty('name')">
      <h4>Hello, {{activeUser.name}}</h4>
      <button @click="logout" class="btn btn-default">Logout</button>
    </div>
    <h1 class="main-title">Pot Luck
      <span class="period">.</span>
    </h1>
    <router-view></router-view>
  </div>
</template>

<script>

  import 'styles/main.scss'

  export default {
    name: 'app',
    mounted() {
      this.$store.dispatch('authenticate')
    },
    methods: {
      logout() {
        this.$store.dispatch('logout')
      }
    },
    computed: {
      activeUser() {
        return this.$store.state.activeUser
      }
    }
  }

</script>
