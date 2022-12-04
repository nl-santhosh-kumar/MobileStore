<template>
    <div class="fill">
        <div class="wrapper">
            <div class="content">
            </div>
        </div>
    </div>
</template>
<script>

export default {
  name: 'CustomFooter'
}
</script>
<style scoped>
.wrapper {
  height: 60px;
  width: 100%;
  bottom:0;
  max-width: 1000px;
  position: fixed;
  bottom: 0;
}
.content {
  align-self: center;
}
.icon-content {
  margin-left: 30px;
}

.fill {
    width: 100%;
    background: #090;
}
</style>
