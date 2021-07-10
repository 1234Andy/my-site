<template>
  <div class="data-list-container clearfix"> 
    <ul class="lists-box">
      <li class="list-user" v-for="item in list" :key="item.id">
        <Avatar
          :url="item.avatar"
          :size="50"
        />
        <div class="users">
          <div class="user-message clearfix">
            <span class="name">{{ item.nickname }}</span>
            <div class="date">{{ getDate(item.createDate,true) }}</div>
          </div>
          <p class="text"> {{ item.content }} </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import {getDate} from "@/utils"
export default {
  components: {
    Avatar,
  },
  props:{
      list:{
          type:Array,
          default: () => [],
      }, 

  },
  methods:{
      getDate,
  }
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.list-user {
  display: flex;
  border-bottom: 1px solid #eaebec;
  padding-top: 10px;
  .users {
    margin-left: 10px;
    .user-message {
      line-height: 50px;
      .name {
        float: left;
        color: @primary;
      }
      .date {
        color: @lightWords;
        float: right;
        font-size: 12px;
      }
    }
    .text {
      font-size: 14px;
      color: @dark;
    }
  }
}
</style>