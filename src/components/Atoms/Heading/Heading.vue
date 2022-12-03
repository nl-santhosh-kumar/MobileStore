<template>
    <h1 class="CustomHeading">
        {{title}}
    </h1>
</template>

<script>
export default {
  name: 'Heading',
  computed: {
    tranformCase () {
      return (input) => input.toUpperCase()
    }
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  filters: {
    tranformToCaps (title) {
      return title.toUpperCase()
    }
  }
}
</script>
<style scoped>
.CustomHeading {
  text-align: left;
  font-weight: bold;
  color: #090
}
</style>
