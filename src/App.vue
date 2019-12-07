<script>
import NavigationBar from './components/NavigationBar/NavigationBar'
import Footer from './components/Footer/Footer'
export default {
  name: 'App',
  components: {
    NavigationBar,
    Footer
  }
}
</script>

<template>
  <div id="app">
    <NavigationBar/>
    <router-view/>
    <Footer />
  </div>
</template>


<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
