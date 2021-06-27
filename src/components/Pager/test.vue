<template>
  <div>
    <h1>Pager组件</h1> 
    <Pager @pageChange="jumpPage" :total="total" :current="current" :viewNum="viewNum" />
  </div>
</template>

<script>  
import Pager from "./";
export default {
  name: 'App',
  data () {
    return {
      total:212,
      current:1,
      viewNum:7
    }
  },
  components: {  
    Pager,
  },
  methods:{
    jumpPage (target){ 
      this.current = target;
    }
  }
}
</script> 
