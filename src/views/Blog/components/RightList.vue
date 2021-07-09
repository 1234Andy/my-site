<template>
  <ul class="rightList-container"> 
    <li v-for="(item, i) in list" :key="i">
      <span 
      @click="handleClick(item)" 
      :class="{ activate: item.isSelect
      }">
        {{ item.name }}
      </span>
      <span 
      :class="{ activate: item.isSelect
      }"
      >
      {{item.aside}}
      </span>
      <!-- 显示当前组件 -->
      <RightList :list="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    list: {
      // [ {name:"xxx", isSelect:true, children:[ {name:"yyy", isSelect: false} ] } ]
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
      if(!item.isSelect){
         this.$emit("select", item);
      }
     
    },
  },
};
</script> 
<style scoped lang="less">
.rightList-container {
  width: 300px;
  height: 100%;
  font-size: 12px;
  line-height: 25px;
  margin: 0;
  list-style: none;
  li{
    padding-left: 20px;
    cursor: pointer;
  .activate {
    color: red;
  }    
  }

}
</style>