<template>
  <div>
    <h1>Icon组件</h1> 
    <div class="icon-box" >
      <div class="item" v-for="t in types" :key="t">
         <Icon :type="t"/>
         <label >{{t}}</label>
      </div>
     
    </div>
    
     </div>
</template>

<script>  
import Icon, {types} from "./"; 
export default {
  name: 'App', 
  components: {  
    Icon 
  } ,
  data() {
    return {
      types
    }
  }
}
</script> 

<style scoped>
  .icon-box{
    display: flex;
    justify-content: center;
    margin: 30px auto;
    width: 580px;
    flex-wrap:wrap;
  }
  .item{
    margin: 1em;
    text-align: center;
  }
</style>
