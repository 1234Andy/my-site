<template>
  <div class="test-container" style="position:relative">
      <Loading />
  </div>
</template>

<script>
import Loading from "./";
export default {
    components:{
        Loading
    },
    data() {
        return {
            isLoading:true
        };
    },
}
</script>

<style scoped lang="less">
   .test-container{
       width: 100%;
       height: 100%;
   }
</style>