<template>
  <app-layout>
    <router-view />
  </app-layout>
</template>

<script>
import AppLayout from "./components/global/AppLayout.vue";
export default {
  components: {
    AppLayout,
  },
  mounted() {
    const lang = localStorage.getItem("lang");
    if (lang === "rtl") {
      document.body.classList.add("rtl");
    }
  },
};
</script>

<style lang="scss">
body.rtl {
  direction: rtl;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
