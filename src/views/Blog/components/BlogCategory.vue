<template>
  <div class="blogCategory">
    <h2>BlogCategory</h2>
    <RightList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import fatchData from "@/mixins/fatchData.js";
import RightList from "./RightList";
import { getBlogCategories } from "@/api/blog.js";
export default {
  mixins: [fatchData([])],
  components: {
    RightList,
  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    limit() {
      return this.$route.query.limit || 10;
    },
    list() {
      const totalArticleCount = this.data.reduce(
        (a, b) => a + b.articleCount,
        0
      );

      const data =  [
        {
          name: "全部",
          id: -1,
          articleCount: totalArticleCount
        },
        ...this.data,
      ];

      return data.map((e) => ({
        ...e,
        aside: `${e.articleCount}篇`,
        isSelect: e.id === this.categoryId,
      }));
    },
  },
  methods: {
    async fatchData() {
      return await getBlogCategories();
    },
    handleSelect(item) {
      const query = {
        page: 1,
        limit: this.limit,
      };
      // 跳转到 当前的分类id  当前的页容量  newPage的页码
      if (item.id === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: item.id,
          },
        });
      }
    },
  },
};
</script>

<style scoped lang="less">
.blogCategory {
  width: 250px;
}
</style>