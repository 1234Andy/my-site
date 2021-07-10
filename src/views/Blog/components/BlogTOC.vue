<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="getTOC" @select="handleClick" />
  </div>
</template>

<script>
import RightList from "./RightList";
import { debounce } from "@/utils";
export default {
  components: {
    RightList,
  },
  data() {
    return {
      activeAnchor: "",
    };
  },  
  created () {
    this.setSelectDebounce = debounce(this.setSelect, 50);
    this.$bus.$on("mainScroll", this.setSelectDebounce);
  },
  props: ["toc"],
  computed: {
    getTOC() {
      const gettoc = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isSelect: t.anchor === this.activeAnchor,
          children: gettoc(t.children),
        }));
      };
      return gettoc(this.toc);
    },
    // 获取在页面的所有锚链接的dom
    doms() {
      const domsArr = [];
      const addToDoms = (toc) => {
        for (const t of toc) {
          domsArr.push(document.getElementById(t.anchor));
          if (t.children && t.children.length) {
            addToDoms(t.children);
          }
        }
      };
      addToDoms(this.toc);
      return domsArr;
    },
  },
  beforeDestroy() {
    this.$bus.$off("mainScroll", this.setSelectDebounce);
  },
  methods: {
    handleClick(item) {
      location.hash = item.anchor;
      // console.log(this.toc);
    },
    setSelect() {
      this.activeAnchor = "";
      const range = 200;
      for (const dom of this.doms) {
        if(!dom){
          continue;
        }
        // console.log(dom.id)
        const top = dom.getBoundingClientRect().top;
        if( top <= range && top >= 0 ){
          this.activeAnchor = dom.id; 
          return;
        }else if(top > range){
          return;
        }else {
          this.activeAnchor = dom.id;
        }
      } 
    },
  },
};
</script>

<style scoped lang="less">
.blog-toc-container {
  width: 300px;
  height: 100%;
  font-size: 12px;
  line-height: 25px;
  list-style: none;
  li {
    padding-left: 20px;
    cursor: pointer;
    .activate {
      color: red;
    }
  }
}
</style>