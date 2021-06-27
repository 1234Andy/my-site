<template>
  <div>
    <h1>App组件</h1>
    <div class="img-box">
     <ImageLoader 
        :src="src" 
        :placeholder="placeholder" 
        :duration="duration"
        @imgLoad="load"  />      
    </div>
 
    </div>
</template>

<script> 
import ImageLoader from "./"; 
export default {
  name: 'App',
  data () {
    return {
      src: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=1920&h=1080",
      placeholder:"https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100",
      duration:700
    }
  },
  components: { 
    ImageLoader
  },
  methods:{ 
    //   图片加载完成后触发
      load () {
        console.log('触发主组件');
      }
  }
}
</script> 

<style scoped>
  .img-box{
    width: 700px;
    height: 500px;
    border: 1px solid blue;
    margin: auto;
    overflow: hidden;
  }
</style>
