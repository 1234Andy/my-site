<template>
  <div class="container" ref="container">
    <h1>首页</h1>
    <button @click="handleClick">点击弹窗</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$showMessage({
        content: "我是弹窗",
        type: "success",
        dom: this.$refs.container,
        callback() {
          console.log("成功了");
        },
      });
    },
  },
};
</script>

<style scoped lang="less">
.container {
  border: 1px solid blue;
}
</style>