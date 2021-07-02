<template>
  <div class="carouslItem-container" >
    <h2>{{description }}</h2>
    <img :src="bigImg" alt="" />
  </div>
</template>

<script>
export default {
    props:{
        description:{
            type:String,
        },
        bigImg:{
            type:String
        } 
    }
};
</script>

<style scoped lang="less">

  .carouslItem-container{
      width: 100%;
      height: 100%;
      img{
          width: 100%;
        //   height: 100%;
      }

  }
</style>