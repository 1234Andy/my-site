<template>
  <div class="blog-toc-container">
      <h2>目录</h2>
      <RightList :list="toc" @select="handleClick" />
  </div>
</template>

<script>
import RightList from "./RightList";
export default {
    components:{
        RightList,
    },
    props:["toc"],
    methods:{
        handleClick(item){
            location.hash = item.anchor;
        }
    }
}
</script>

<style scoped lang="less">
.blog-toc-container {
  width: 300px;
  height: 100%;
  font-size: 12px;
  line-height: 25px; 
  list-style: none; 
  li{
    padding-left: 20px;
    cursor: pointer;
  .activate {
    color: red;
  }    
  }

}
</style>