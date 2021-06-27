<template>
  <div>
    <h1>Contact组件</h1>   
    <div class="contact-wraper">
      <Contact />
    </div>
  </div>
</template>

<script>
import Contact from "./";
export default {
  name: "App",
  components: {
    Contact,
  },
};
</script> 

<style lang="less" scoped> 

.contact-wraper{
    width: 300px; 
    height: 700px;
    // margin: 0 auto;
    border: 1px solid blue;
    background-color: #202020;
    padding-top: 200px;
}
</style>
