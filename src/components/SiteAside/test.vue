<template>
  <div class="site-aside">
    <SiteAside />
  </div>
</template>

<script>
import SiteAside from "./";
export default {
  components: {
    SiteAside,
  },
};
</script>

<style lang="less" >
@import "~@/styles/global.less";
.site-aside {
  width: 300px;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #202020;
}
</style>