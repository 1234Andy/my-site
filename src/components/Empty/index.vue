<template>
  <div class="empty-box">
      <Icon :type="'empty'" />
      <p> {{ text }} </p>
  </div>
</template>

<script>
import Icon from "../Icon"; 
export default { 
    props:{
        text:{
            type:String,
            default:"无数据"
        }
    },
    components:{
        Icon,
    }
}
</script>

<style scoped>
.empty-box{
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 9rem;
    opacity: .6;
}
.empty-box p{
    font-size: 20%;
}

</style>