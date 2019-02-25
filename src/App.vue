<template>
  <div id="app">
    <SiteNav />
    <main id="main">
      <router-view></router-view>
    </main>
    <SiteFooter />
  </div>
</template>

<script>
import SiteNav from "./components/SiteNav.vue";
import SiteFooter from "./components/SiteFooter.vue";

export default {
  name: "app",
  components: {
    SiteNav,
    SiteFooter
  },
  metaInfo: {
    title: "Errington Hall",
    titleTemplate: "Errington Hall - %s"
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}

p {
  margin-bottom: 0.5em;
}
</style>
