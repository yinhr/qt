<template>
  <div id="app" class="flex flex-col">
    <Header></Header>
    <router-view/>
  </div>
</template>

<style>
html, body, #app {
  @apply h-screen;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
