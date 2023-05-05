<script setup>
</script>
<template>
  <div class="container">
    <div class="header-left">
      <a href=""><img src="../../assets/logo.png"></a>
    </div>
    <div class="header-center">
      <ul>
        <li><a href="#">💻 前端</a></li>
        <li><a href="#">🎨 设计</a></li>
        <li><a href="#">📚 阅读</a></li>
        <li><a href="#">👨‍💻 我的</a></li>
      </ul>
    </div>
    <div class="header-right">
      <el-icon size="30">
        <User />
      </el-icon>
    </div>
  </div>
</template>
<style scoped lang="less">
.container {
  height: 60px;
  display: flex;
  box-shadow: 0 1px 1px 1px #ccc;

  .header-left {
    flex: 1;
    a {
      display: block;
      height: 60px;
      display: flex;

      img {
        display: block;
        width: 100px;
        margin: 0 auto;
      }
    }
  }

  .header-center {
    flex: 4;

    ul {
      display: flex;
      width: 400px;
      margin: 0 auto;

      li {
        // width: 100%;
        flex: 1;
        line-height: 60px;

        a {
          display: block;
          height: 60px;
          text-decoration: none;
          color: black;
          text-align: center;

          &:hover {
            background-color: #eee;
          }
        }
      }
    }
  }

  .header-right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}</style>