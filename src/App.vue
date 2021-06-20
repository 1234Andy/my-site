<template>
  <div>
    <h1>App组件</h1>
    <Avatar
      url="http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c"
      :size="100"
    />
    <Icon type="home"/>
    <Pager @pageChange="jumpPage" :total="total" :current="current" :viewNum="viewNum" />
  </div>
</template>

<script> 
import Avatar from "./components/Avatar";
import Icon from "./components/Icon";
import Pager from "./components/Pager";
export default {
  name: 'App',
  data () {
    return {
      total:212,
      current:1,
      viewNum:10
    }
  },
  components: { 
    Avatar,
    Icon,
    Pager,
  },
  methods:{
    jumpPage (target){
      if(typeof target === 'number'){
        if(target > this.total || target < 1) return;
        this.current = target;
      }
      if(target==='one'){
        this.current = 1; 
      }else if(target==='lastPage') {
        if(this.current != 1){
          this.current--;
        }
        
      }
      if(target ==='end'){
        this.current = this.total;
      }else if(target === 'nextPage'){
        if(this.current < this.total){
           this.current++;
        }
      }
    }
  }
}
</script> 
