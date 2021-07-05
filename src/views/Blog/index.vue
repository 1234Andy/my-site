<template>
  <div class="blog-container"> 
    <Layout>
      <BlogCategory />
      <template #right>
          <RightList />
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import BlogCategory from "./components/BlogCategory";
import RightList from "./components/RightList";
export default {
  components:{
    Layout,
    BlogCategory,
    RightList,
  }

}
</script>

<style scoped lang="less">
  .blog-container{
    width: 100%;
    height: 100%;
  }

</style>