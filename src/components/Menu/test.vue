<template>
<div id="App">
  <h1>Menu组件</h1>
  <Menu />    
</div>

</template>

<script>
import Menu from "@/components/Menu"
export default {
    components:{
        Menu
    }
}
</script>

<style lang="less" > 
@import "~@/styles/global.less";
#App{
    width: 300px; 
    height: 700px; 
    border: 1px solid blue;
    background-color: #202020; 
}
</style>