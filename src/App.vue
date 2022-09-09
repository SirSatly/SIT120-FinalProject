<template>
  <div id="app">
    <header>
      <MainNav></MainNav>
    </header>
    <router-view/>
  </div>
</template>

<script>
  import MainNav from './components/MainNav.vue'
    export default {
      name: 'App',
      components: {
        MainNav
    }
  }
</script>

<style>
body {
  background-color: #f5f3dc;
  padding-bottom: 20px;
}


</style>
