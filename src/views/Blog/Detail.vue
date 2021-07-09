<template>
  <Layout>
    <div class="blogDeatil" v-loading="isLoading">
      <BlogDetail :data="data" v-if="data" />
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

export default {
  mixins: [fatchData(null)],
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
  },
  methods: {
    async fatchData() {
      return await getBlog(this.$route.params.id);
    },
  },
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