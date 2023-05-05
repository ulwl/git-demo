<script setup>
import MyHeader from './components/MyHeader/index.vue'
import MyMain from './components/MyMain/index.vue'
</script>
<template>
  <div class="container">
    <header>
      <MyHeader></MyHeader>
    </header>
    <main><MyMain></MyMain>
    </main>
    <footer></footer>
  </div>
</template>
<style scoped lang="less">
.container {
  header {
    height: 60px;
  }
}
</style>