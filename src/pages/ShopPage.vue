<script>
import Shop from '@/components/Shop/Shop'

export default {
  name: 'ShopPage',
  components: Shop,
}
</script>

<template>
  <div class='container'>
    <input type="text" placeholder="Fornavn">
    <input type="text" placeholder="Efternavn">
    <input type="text" placeholder="Email">
    <input type="text" placeholder="Addresse">
    <input type="number" placeholder="Tlf nummer">
    <Shop />
    <router-link class="confirm" v-bind:to="'/confirmation'" :key="1">Bekræft din ordre!</router-link>
  </div>
</template>

<style scoped>
  .container {
    margin: auto;
    margin-top: 200px;
    width: 10%;
  }

  .confirm {
    color: black;
    font-size: 20px;
  }

  input {
    display: block;
    align-content: center;
    margin-bottom: 50px;
    width: 300px;
    height: 40px;
    -moz-appearance:textfield;
  }
</style>