<template>
  <div>
    <app-header></app-header>

    <div id="app">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    appHeader: Header,
  },
};
</script>

<style>
@import "./assets/styles/theme.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: var(--font-color);
  height: 100%;
  /* margin-top: 100px; */
}

body {
  background-color: var(--bg-color) !important;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
