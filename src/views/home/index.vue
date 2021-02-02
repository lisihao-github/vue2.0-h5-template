<template>
  <div class="home-container">
    <div class="contant" />
    <van-button>你来抓我呀</van-button>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.home-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.contant {
  display: block;
  width: 250px;
  height: 250px;
  margin-bottom: 20px;
  background-color: yellowgreen;
}
</style>
