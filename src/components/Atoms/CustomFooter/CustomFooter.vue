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
  background: #fff;
  height: 60px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  bottom:0;
  max-width: 1000px;
  margin: auto;
}
.content {
  align-self: center;
}
.icon-content {
  margin-left: 30px;
}

.fill {
    width: 100%;
    background: #ffc426;
}
</style>
