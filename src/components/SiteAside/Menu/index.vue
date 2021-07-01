<template>
  <div class="Menu-waper">
    <ul class="menu-main">
      <li v-for="item in menuList" class="menu-list" :key="item.link">
        <RouterLink
          :exact="item.exact"
          :to="{ name: item.link }"
          active-class="selected"
          exact-active-class=""
        >
          <Icon :type="item.icon" />
          <span>{{ item.title }}</span>
        </RouterLink>
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
        { title: "首页", link: "Home", icon: "home", exact: true },
        { title: "文章", link: "Blog", icon: "blog", exact: false },
        { title: "关于我", link: "About", icon: "about", exact: true },
        { title: "项目&效果", link: "Project", icon: "code", exact: true },
        { title: "留言板", link: "Message", icon: "chat", exact: true },
      ],
    };
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
      a {
        display: block;
        width: 100%;
        height: 100%;
        &.selected {
          background-color: @gray - 80%;
          color: @lightWords+80%;
        }
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
    }
  }
}
</style>