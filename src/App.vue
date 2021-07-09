<template>
  <div class="app-conteiner">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template #default>
        <RouterView />
      </template>  
    </Layout>
  </div>
</template>

<script>
import Layout from "./components/Layout";
import SiteAside from "./components/SiteAside";
export default { 
  components: {
    Layout,
    SiteAside,
  } 
};
</script> 

<style scoped lang="less">
.app-conteiner {
  width: 100%;
  height: 100%;
  .aside {
    width: 300px;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #202020;
  }
  .right{
    width: 300px;
    height: 100%;
  }
}
</style>