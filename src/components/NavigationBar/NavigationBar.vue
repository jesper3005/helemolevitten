<script>
export default {
  name: 'NavigationBar',
}
</script>

<template>
  <div class="navbar">
    <ul class="navbar-content">
      <!-- Left content -->

      <li></li>

      <!-- Centered content -->
      <li>
        <router-link v-bind:to="'/'" :key="1">Produkt</router-link>
      </li>
      <li>
        <router-link v-bind:to="'/hvem-er-vi'" :key="2">Hvem er vi</router-link>
      </li>
      <li>
        <router-link v-bind:to="'/kontakt'" :key="3">Kontakt</router-link>
      </li>
      <li>
        <router-link v-bind:to="'/cart'" :key="4">Shopping Cart</router-link>
      </li> 
    </ul>
  </div>
</template>

<style scoped>
.navbar {
  height: 50%;
  margin: 0;
  overflow: hidden;
  background-color: #444444;
}

.navbar-content {
  margin: 0;
  display: flex;
  padding: 0 10px;
}

.navbar-content li {
  display: flex;
  margin: 15px 5px;
  justify-content: center;
}

.navbar-content li:first-of-type {
  flex: 1 0 0;
  justify-content: left;
}

.navbar-content li:last-of-type {
  flex: 1 0 0;
  justify-content: right;
}

a {
  display: flex;
  position: relative;
  color: #ffffff;
  font-size: 20px;
  text-decoration: none;
  padding: 10px 25px;
}

svg {
  fill: #9CBEFF;
}
</style>