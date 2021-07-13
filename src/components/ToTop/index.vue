<template>
  <div v-show="show" @click="handlClick" class="ToTop-container">TOP</div>
</template>

<script>
import { debounce } from "@/utils";
export default {
  data() {
    return {
      show: false,
    };
  },
  created() {
    this.$bus.$on("mainScroll", this.handTop);
  },
  destroyed() {
    this.$off("mainScroll", this.handTop);
  },
  methods: {
    handTop(dom) {
        let self = this;  
    //   debounce(() => { 
        if (!dom) {
          self.show = false;
          return;
        }
        self.show = dom.scrollTop >= 500;
    //   }, 40);
    },
    handlClick() {
      this.$bus.$emit("setMainScroll", 0);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.ToTop-container {
  position: fixed;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: @primary;
  color: #fff;
  bottom: 30px;
  right: 50px;
  border-radius: 50%;
  cursor: pointer;
}
</style>