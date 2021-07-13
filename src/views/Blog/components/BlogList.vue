<template>
  <div class="blogList-container" ref="container" v-loading="isLoading">
    <ul class="blog-list">
      <li class="blog-browse" v-for="item in data.rows" :key="item.id">
        <RouterLink 
          :to="{
            name:'BlogDerail',
            params:{
              id:item.id
            }
          }" 
          class="blog-browse-link">
          <img v-lazy="item.thumb" alt="" />
          <div class="blog-list-right">
            <h3 class="title">{{ item.title }}</h3>
            <p class="addition">
              <span>日期:{{ getDate(item.createDate) }}</span>
              <span>浏览: {{ item.scanNumber }}</span>
              <span>评论:{{ item.commentNumber }}</span>
              <RouterLink
                :to="{
                  name:'CategoryBlog',
                  params:{
                    categoryId:item.category.id
                  }
                }"
              >
              {{ item.category.name }}
              </RouterLink>
            </p>
            <div class="blog-text">
              {{ item.description }}
            </div>
          </div>
        </RouterLink>
      </li>
    </ul>
    <Pager
      v-if="data.total"
      :total="data.total"
      :current="routeInfo.page"
      :viewNum="10"
      @pageChange="handlePage"
    />
  </div>
</template>

<script>
import Pager from "@/components/Pager";
import fatchData from "@/mixins/fatchData.js";
import mainScroll from "@/mixins/mainScroll.js";
import { getBlogs } from "@/api/blog.js";
import { getDate } from "@/utils";
export default {
  mixins: [fatchData({}),mainScroll("container")],
  components: {
    Pager,
  }, 
  computed: {
    list() {
      return this.data.rows;
    }, 
    // 获得路由信息
    routeInfo() {
      return {
        page:+this.$route.query.page || 1,
        limit:+this.$route.query.limit || 10,
        categoryId:+this.$route.params.categoryId || -1,
      };
    },
  },
  methods: {
    getDate,
    async fatchData() {
      return await getBlogs();
    },
    handlePage(newPage) {
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      }; 
      if (this.routeInfo.categoryId === -1) {
        this.$router.push({
          // 命名路由跳转
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          // 命名路由跳转
          name: "CategoryBlog",
          query,
          params:{
              categoryId:this.routeInfo.categoryId
          },
          
        });
      }
    },
  },
  watch: {
      async $route() {
        //   console.log(this.$route);
          this.$refs.container.scrollTop = 0;
          this.isLoading = true;
          this.data = await this.fatchData();
          this.isLoading = false; 
          console.log(this.data)
      } 
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.blogList-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
  .blog-list {
    width: 90%;
    //   height: 100%;
    margin: 0 auto;
    padding-bottom: 10px;
    .blog-browse {
      width: 100%;
      padding: 20px 0;
      border-bottom: 1px solid #666;
      &:hover {
        .title {
          color: @primary;
        }
      }
      .blog-browse-link {
        display: flex;
        color: inherit;
        img {
          width: 200px;
          height: 100%;
          border-radius: 15px;
        }
        .blog-list-right {
          margin-left: 10px;
          .addition {
            color: @gray;
            font-size: 12px;
          }
          .blog-text {
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>