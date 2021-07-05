<template>
  <div class="layout-conteiner">
      <nav class="left">
          <slot name="left"></slot>
      </nav>
      <main class="main">
          <slot></slot>
      </main>
      <div class="right">
          <slot name="right"></slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
  .layout-conteiner{
      width:100%;
      height: 100%;
      display: flex;
      .left{
          flex: 0 0 auto;
      }
      .main{
          flex: 1 1 auto;
        //   background-color: blue;
      }
      .right{
          flex: 0 0 auto;
          height: 100%;
        //   background-color: #888;
      }
  }
</style>