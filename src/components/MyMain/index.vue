<script setup>
// https://postimg.cc/v4L39jrc
// https://postimg.cc/d7sn9B6n
// https://postimg.cc/kVTsYbhC
// https://postimg.cc/phyZwLgF
</script>
<template>
  <div class="container">
    <el-carousel height="600px" direction="vertical" :autoplay="true">
      <el-carousel-item v-for="item in 4" :key="item">
        <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
        <!-- <img src="https://i.postimg.cc/8zx98gsB/img-1.jpg"> -->
        <img :src="`/public/img-${item}.jpg`">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<style scoped lang="less">
.container {
  width: 1200px;
  margin: 10px auto;

  // .el-carousel__item h3 {
  //   color: #475669;
  //   opacity: 0.75;
  //   line-height: 600px;
  //   margin: 0;
  //   text-align: center;
  // }

  // .el-carousel__item:nth-child(2n) {
  //   background-color: #99a9bf;
  // }

  // .el-carousel__item:nth-child(2n + 1) {
  //   background-color: #d3dce6;
  // }
}
</style>