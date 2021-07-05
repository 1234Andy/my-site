<template>
  <div
    class="carouslItem-container"
    ref="container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <h2 class="title" ref="title">{{ carousel.title }}</h2>
    <p class="description" ref="description">{{ carousel.description }}</p>

    <div class="carousel-img" ref="image" :style="setImgCenter">
      <ImageLoader
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
        :duration="800"
        @imgLoad="imgLoad"
      />
    </div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props: ["carousel"],
  components: {
    ImageLoader,
  },
  data() {
    return {
      titleW: 0,
      descW: 0,

      // 图片随着鼠标滑动效果
      homeContainerSize: null,
      carouselImgSize: null,
      mouseX: 0,
      mouseY: 0,
    };
  },
  mounted() {
    // 先把文字div的width保存
    this.titleW = this.$refs.title.clientWidth;
    this.descW = this.$refs.description.clientWidth;

    //  再设置为0
    this.$refs.title.style.width = 0 + "px";
    this.$refs.description.style.width = 0 + "px";

    this.setSize();

    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize", this.setSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
  computed: {
    setImgCenter() {
      if (!this.carouselImgSize) {
        return;
      }
      const extraWidth =
        this.carouselImgSize.width - this.homeContainerSize.width;
      const extraHeight =
        this.carouselImgSize.height - this.homeContainerSize.height;
      const left = (-extraWidth / this.homeContainerSize.width) * this.mouseX;
      const top = (-extraHeight / this.homeContainerSize.height) * this.mouseY;
      return {
        transform: `translate(${left}px, ${top}px)`,
      };
    },
    center() {
      return {
        x: this.homeContainerSize.width / 2,
        y: this.homeContainerSize.height / 2,
      };
    },
  },
  methods: {
    imgLoad() {
      // 图片加载完成之后给上宽度
      this.$refs.title.style.width = this.titleW + "px";
      this.$refs.description.style.width = this.descW + "px";

      // 把文字显示出来
      this.$refs.title.style.opacity = 1;
      this.$refs.description.style.opacity = 1;

      // 加上过渡效果，先后显示
      this.$refs.title.style.transition = "1s";
      // 延迟一秒显示
      this.$refs.description.style.transition = "2s 1s";

      this.$refs.title.clientWidth;
      // console.log(this.titleW)
    },
    setSize() {
      // 获得首页容器的宽度高度
      this.homeContainerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };
      // 获得图片容器的宽高
      this.carouselImgSize = {
        width: this.$refs.image.clientWidth,
        height: this.$refs.image.clientHeight,
      };
      // console.log(this.homeContainerSize, this.carouselImgSize);
    },
    handleMouseMove(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseY = e.clientY - rect.top;
      this.mouseX = e.clientX - rect.left;
    },
    handleMouseLeave() {
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    },
  },
};
</script>

<style scoped lang="less">
.carouslItem-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .carousel-img {
    position: absolute;
    width: 110%;
    height: 110%;
    transition: 0.5s;
    .img {
      width: 100%;
      height: 100%;
    }
  }

  .title,
  .description {
    position: absolute;
    left: 50px;
    top: 40%;
    transform: translateY(50%);
    color: #fff;
    z-index: 999;
    font-size: 30px;
    font-weight: 500;
    white-space: nowrap;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
      0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
    letter-spacing: 3px;
    overflow: hidden;
  }
  .description {
    top: 50%;
    font-size: 20px;
  }
}
</style>