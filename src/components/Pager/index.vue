<template>
  <div class="pager-box">
    <a @click="toLast('one')">首页</a>
    <a @click="toLast('lastPage')">&lt;</a>
    <a
      v-for="(n, i) in arrNum"
      :class="{ selected: current === n }"
      :key="i"
      @click="Oclick(n)"
      >{{ n }}</a
    >
    <a @click="toNext('nextPage')">&gt;</a>
    <a @click="toNext('end')">尾页</a>
    <div class="jump-page">
      <span>跳转到</span>
      <input class="jump-number" type="number" v-model.number="num" />
      <span>页</span>
      <button @click="Oclick(num)">go</button>
    </div>
    <span class="all-pages">共{{ total }}页</span>
  </div>
</template> 
<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0,
    },
    current: {
      type: Number,
      default: 1,
    },
    viewNum: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      num: 1,
    };
  },
  computed: {
    arrNum() {
      let arr = [];
      let i = this.current - Math.floor(this.viewNum / 2);
      let len = Math.floor(this.viewNum / 2) + this.current;
      if (i <= 1) {
        i = 1;
        len = this.viewNum;
      }
      if (len >= this.total) {
        i = this.total - this.viewNum;
        len = this.total;
      }
      for (; i <= len; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
  methods: {
    toLast(target) {
      if (target === "one") {
        this.$emit("pageChange", 1);
      } else if (target === "lastPage") {
        if (this.current != 1) {
          this.$emit("pageChange", this.current - 1);
        }
      }
    },
    toNext(target) {
      if (target === "end") {
        this.$emit("pageChange", this.total);
      } else if (target === "nextPage") {
        if (this.current < this.total) {
          this.$emit("pageChange", this.current + 1);
        }
      }
    },
    Oclick(n) {
      if (n >= this.total || n < 1) return;
      this.$emit("pageChange", n);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.pager-box {
  font-size: 7px;
  text-align: center;
  line-height: 20px;
  > * {
    margin-right: 2.5px;
    margin-left: 2.5px;
  }
  a {
    display: inline-block;
    padding: 5px 8px;
    border: 1px solid #ebebeb;
    border-radius: 6px;
    cursor: pointer;
    &.selected {
      background-color: #98a6ad;
      color: white;
      transform: scale(1.1);
    }
    &:hover {
      transform: scale(1.1);
      background-color: #f4f6f8;
    }

    &.selected:hover {
      background-color: #98a6ad;
      color: white;
      cursor: not-allowed;
    }
  }
  .jump-page {
    display: inline-block;
    input {
      width: 30px;
      border: 1px solid #dcdfe6;
      outline: none;
      border-radius: 5px;
      margin: 0 2.5px;
      &:focus {
        border: 1px solid #98a6ad;
      }
    }
    button {
      margin: 0 3px;
      border-radius: 3px;
      background-color: inherit;
      color: @primary;
      border: 1px solid @primary;
      cursor: pointer;
    }
  }
}

// 去除input number的默认样式
input[type="number"] {
  -moz-appearance: textfield;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>