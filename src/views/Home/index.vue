<template>
  <div class="home-container" ref="container">
    <ul class="container-list" :style="{ marginTop: marginTop }">
      <li
        v-for="item in banners"
        :key="item.id"
        :style="{ height: clientHeight + 'px' }"
      >
        <CarouslItem :description="item.description" :bigImg="item.bigImg" />
      </li>
    </ul>
    <div class="jump-up" v-show="index !== 0" @click="switchTo(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div
      class="jump-down"
      v-show="index < banners.length - 1"
      @click="switchTo(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        v-for="(item, i) in banners"
        :key="item.id"
        @click="switchTo(i)"
        :class="{ activate: index === i }"
      ></li>
    </ul>
  </div>
</template>

<script>
import { getBanners } from "@/api/banner";
import CarouslItem from "./CarouslItem";
import Icon from "@/components/Icon";
export default {
  components: {
    CarouslItem,
    Icon,
  },
  data() {
    return {
      banners: [],
      clientHeight: 0,
      index: 0,
    };
  },
  async created() {
    this.banners = await getBanners();
  },
  computed: {
    marginTop() {
      return -this.clientHeight * this.index + "px";
    },
  },
  mounted() {
    this.clientHeight = this.$refs.container.clientHeight;
  },
  methods: {
    switchTo(index) {
      this.index = index;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.home-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .container-list {
    width: 100%;
    height: auto;
    transition: 800ms;
    transition-timing-function:ease;
  }
  .jump-up,
  .jump-down {
    .self-center();
    cursor: pointer;
    font-size: 30px;
    color: #b4b8bc;
  }
  .jump-up {
    top: 20px;
    animation: jumpArrowsUp 1.5s infinite;
  }
  .jump-down {
    bottom: 20px;
    top: auto;
    animation: jumpArrowsDown 1.5s infinite;
  }
  @keyframes jumpArrowsUp {
    0% {
      transform: translateY(15%);
    }
    50% {
      transform: translateY(30%);
    }
    100% {
      transform: translateY(15%);
    }
  }
  @keyframes jumpArrowsDown {
    0% {
      transform: translateY(-15%);
    }
    50% {
      transform: translateY(-30%);
    }
    100% {
      transform: translateY(-15%);
    }
  }
  .indicator {
    position: absolute;
    top: 50%;
    left: auto;
    right: 20px;
    transform: translateY(-50%);
    li {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #373737;
      cursor: pointer;
      margin-bottom: 10px;
      border: 1px solid #fff;
      box-sizing: border-box;
      &.activate {
        background-color: #fff;
      }
    }
  }
}
</style>