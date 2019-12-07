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
        <router-link v-bind:to="'/'" :key="2">Hvem er vi</router-link>
      </li>
      <li>
        <img src="@/assets/logo.png" height="100" width="100"/>
      </li>
      <li>
        <router-link v-bind:to="'/'" :key="3">Kontakt</router-link>
      </li>
      <li>
        <router-link v-bind:to="'/shop'" :key="4">Shopping Cart</router-link>
      </li> 
    </ul>
  </div>
</template>

<style scoped>
.navbar {
  max-height: 20%;
  margin: 0;
  overflow: hidden;
  background-color: #dedede;
}

.navbar-content {
  margin: 0;
  display: flex;
  padding: 0 10px;
}

.navbar-content li {
  display: flex;
  margin: 20px 5px;
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
  color: black;
  font-size: 20px;
  text-decoration: none;
  padding: 10px 25px;
}

svg {
  fill: #9CBEFF;
}
</style>