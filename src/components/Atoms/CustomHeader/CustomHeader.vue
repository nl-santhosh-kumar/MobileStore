<template>
    <div class="fill">
        <div class="main">
            <ul>
            <li><span> Home</span></li>
            <li><span> News</span></li>
            <li><span> Products</span></li>
</ul>
        </div>
    </div>
</template>
<script>

export default {
  name: 'CustomHeader',
  methods: {
    /**
         * A function to route to home page when logo is clicked
         */
    navigateToHome: function () {
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
b-navbar {
    list-style-type: none;
}
.custom-header {
    padding-left: 40px;
    max-width: 1000px;;
}
.main{
    max-width: 1000px;
    margin: auto;
}
.fill {
    width: 100%;
    background: #fff;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #fff;
}

li {
  float: left;
}

li span {
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li span:hover {
  background-color: #ffff;
}
</style>
