<template>
  <div class="blog-detail-container">
    <h2>{{ data.title }}</h2>
    <aside class="aside">
      <span>日期: {{ getDate(data.createDate) }}</span>
      <span>浏览: {{ data.scanNumber }}</span>
      <a href="">评论: {{ data.commentNumber }}</a>
      <a href="">{{ data.category.name }}</a>
    </aside>
    <div v-html="data.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
import { getDate } from "@/utils";
import "highlight.js/styles/github.css";
import "@/styles/markdown.css";
export default {
  props: {
    data: {
      type: Object,
      required:true,
    },
  },
  methods: {
    getDate,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less"; 
  .aside {
    font-size: 14px;
    color: @lightWords;
  } 
.markdown-body {
  margin: 2em 0;
}
</style>