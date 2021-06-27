<template>
  <div class="Menu-waper">
    <ul class="menu-main">
      <li
        v-for="item in menuList"
        class="menu-list"
        :class="{ current: curPage(item) }"
        :key="item.link"
      >
        <a :href="item.link">
          <Icon :type="item.icon" />
          <span>{{ item.title }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      menuList: [
        { title: "首页", link: "/", icon: "home" },
        { title: "文章", link: "/blog", icon: "blog",startWith:true },
        { title: "关于我", link: "/about", icon: "about" },
        { title: "项目&效果", link: "/project", icon: "code" },
        { title: "留言板", link: "/message", icon: "chat" },
      ],
    };
  },
  methods: {
    curPage(item) {
        let link = item.link.toLowerCase();
        let curPagePath = location.pathname.toLowerCase();
      if(item.startWith){
          return curPagePath.startsWith(link);
      }else{
         return item.link === curPagePath;
      }
      
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.Menu-waper {
  width: 100%;
  color: @lightWords + 30%;
  .menu-main {
    width: 100%;
    box-sizing: border-box;
    .menu-list {
      line-height: 40px;
      padding-left: 40px;
      cursor: pointer;
      a{
          display: block;
          width: 100%;
          height: 100%;
      }
      &:hover {
        color: @lightWords+60%;
        a {
          color: @lightWords+80%;
        }
      }
      span {
        padding-left: 10px;
      }
      &.current {
        background-color: @gray - 80%;
      }
    }
  }
}
</style>