<template>
  <div class="blogComment-container">
    <h1>博客评论</h1>
    <MessageArea
      title="评论列表"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fatchData from "@/mixins/fatchData.js";
import { postComment, getComments } from "@/api/blog.js";
export default {
  mixins: [fatchData({ total: 0, rows: [] })],
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  computed: {
    hasMore() {
      return this.data.rows.length < this.data.total;
    },
  },
  created() {
    this.$bus.$on("mainScroll", this.handScroll);
  },
  methods: {
    // 博客评论列表加载更多事件
    handScroll(dom) {
      if (this.isLoading || !dom) return;
      const range = 100;
      const dec = Math.abs(dom.scrollHeight - dom.scrollTop - dom.clientHeight);
      if (dec <= range) {
        this.fetchMore();
      }
    },
    async fetchMore() {
      if (!this.hasMore) return; // 没有更多了
      this.isLoading = true;
      this.page++;
      const resp = await this.fatchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows); 
      this.isLoading = false;
    },
    async fatchData() {
      return await getComments(this.$route.params.id, this.page, this.limit);
    },
    async handleSubmit(formData, callback) {
      const resp = await postComment({
        blogId: this.$route.params.id,
        ...formData,
      });
      this.data.rows.unshift(resp);
      this.data.total++;
      callback("评论成功"); //告诉子组件，我这里处理完了，你继续
      console.log("父组件收到通知了");
    },
  },
};
</script>

<style>
</style>