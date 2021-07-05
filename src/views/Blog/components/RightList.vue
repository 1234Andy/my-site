<template>
  <ul class="rightList-container"> 
    <li v-for="(item, i) in list" :key="i">
      <span @click="handleClick(item)" :class="{activate : item.isSelect}">{{ item.name }}</span>
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
  methods:{
      handleClick (item){
          this.$emit("select",item);
      }
  }
};
</script> 
<style scoped lang="less">
  .rightList-container{
    width: 300px;
    height: 100%;
      margin: 0;
      list-style: none;
      .activate{
          color: red;
      }
  }
</style>