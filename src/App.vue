<template>
<div>
        <layout/>
        <custom-header />
        <router-view />
        <custom-footer />
</div>
</template>
<script>
import Layout from './components/Atoms/Layout/Layout.vue'
import CustomHeader from './components/Atoms/CustomHeader/CustomHeader.vue'
import CustomFooter from './components/Atoms/CustomFooter/CustomFooter.vue'
export default {
  components: {
    Layout,
    CustomHeader,
    CustomFooter
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f3f3f3;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
