<template>
  <div class="img-box">
    <img class="placeholder" v-if="!allOver" :src="placeholder"  /> 
    <img  :style="{opacity:imgBoo === true ? 1 : 0, transition:`opacity ${duration}ms`}"  @load="imgLoadOver" :src="src" />
    
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      require: true,
    },
    placeholder: {
      type: String,
      require: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      imgBoo: false,
      allOver:false
    };
  },
  methods: {
    imgLoadOver() {
      this.imgBoo = true;
      console.log("图片加载完成");
      setTimeout(()=> {
        this.allOver = true;
        this.$emit("imgLoad");
      },this.duration)
      
    },
  },
};
</script>

<style scoped>
.img-box {
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid blue;
}
img {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transition: opacity 1s;
  object-fit: cover;
} 
.placeholder{
  filter: blur(2vw);
}
</style> 