<template>
  <Layout>
    <div ref="Detail" class="blogDeatil" v-loading="isLoading">
      <BlogDetail :data="data" v-if="data" />
      <BlogComment v-if="data"  /> 
    </div>

    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogTOC :toc="data.toc" v-if="data" />
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import { getBlog } from "@/api/blog.js";
import fatchData from "@/mixins/fatchData.js";
import BlogDetail from "./components/BlogDetail";
import BlogTOC from "./components/BlogTOC";
import BlogComment from "./components/BlogComment";
export default {
  mixins: [fatchData(null)],
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment,
  }, 
  mounted() { 
    this.$refs.Detail.addEventListener("scroll",this.handleScroll);
  },
  beforeDestroy () {
      this.$refs.Detail.removeEventListener("scroll",this.handleScroll);    
  },
  methods: {
    async fatchData() {
      return await getBlog(this.$route.params.id);
    },
    handleScroll () {
      this.$bus.$emit("mainScroll",this.$refs.Detail);
    }
  },
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() =>{ 
      location.hash = hash;
    },0)
  }
};
</script>

<style scoped lang="less">
.blogDeatil {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
.right-container {
  width: 300px;
  height: 100%; 
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>