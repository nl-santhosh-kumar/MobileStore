<template>
    <div class="notification">
        Extended due to success! Black Friday : €2.50 discount on Unlimited Data or 10 GB + 2 GB free! With device or Sim Only . Now without connection costs!
    </div>
</template>

<script>
export default {
  name: 'Notification',
  computed: {
    tranformCase () {
      return (input) => input.toUpperCase()
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
.notification {
  border-top: 4px solid #090;
  background: #090 ;
  border-radius: 12px;
  box-sizing: border-box;
  padding: 10px;
  position: sticky;
  top: 100px;
  height: 60px;
  z-index:2;
  color: black;
}

@media screen and (max-width: 641px) {
.notification {
  height: 120px;
}
}
</style>
