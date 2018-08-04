<template>
  <div id="app">
    <nav class="btn-group btn-group-lg" role="group">
      <router-link to="/" class="btn btn-secondary">Home</router-link>
      <router-link to="/about" class="btn btn-secondary">About</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>
import Names from './components/Names.vue'

export default {
  name: 'app',
  components: {
    Names
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
@import "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css";

body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
}

nav {
  padding: 20px 20px 20px 0;
}

nav a {
  padding: 10px;
  text-decoration: none;
  background: #fff;
  border-radius: 3px;
  color: rgb(0, 110, 255);
  font-weight: bold;
  margin-right: 15px;
}
body, html {
  margin: 0;
  height: 100%;
}
#app {
    width: 50%;
}
</style>
