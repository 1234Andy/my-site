<template>
  <div class="Menu-waper">
    <nav class="menu-main">
      <RouterLink
        v-for="item in items"
        class="menu-list"
        :key="item.name"
        :exact="item.exact"
        :to="{ name: item.name }"
        active-class="selected"
        exact-active-class=""
      >
        <Icon :type="item.icon" />
        <span>{{ item.title }}</span>
      </RouterLink>
    </nav>
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
     items: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          exact: false, // 激活状态是否要精确匹配
        },
        {
          name: "About",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
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
      display: block;
      width: 100%;
      height: 100%;

      &.selected {
        background-color: @gray - 80%;
        color: @lightWords+80%;
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