<template>
  <div>
    <h1>Empty组件</h1>  
    <div class="box">
        <Empty text="抱歉，这个博主很懒，没有内容" />
    </div> 
        <div class="box">
        <Empty />
    </div> 
  </div>
</template>

<script>
import Empty from "./";
export default {
  name: "App",
  components: {
    Empty,
  },
};
</script> 

<style scoped> 
.box{
    width: 500px;
    height: 300px;
    margin: 0 auto;
    border: 1px solid blue;
}
</style>
