<template>
  <div class="site-aside-waper">
      <div class="avatar-box">
          <Avatar url="https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg" :size="160" />
      </div>
      <h2 class="title-text">罗冠景的博客</h2 >
      <Menu />
      <div class="contact-box">
          <Contact />
      </div> 
      <footer class="footer">
          黑ICP备17001719号
      </footer>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Contact from "./Contact";
import Menu from "./Menu";
export default {
    components:{
        Avatar,
        Contact,
        Menu
    },

}
</script>

<style lang="less" scoped>
.site-aside-waper{
    width: 100%; 
    height: 100%; 
    padding: 50px 0; 
    .avatar-box{
        display: flex;
        justify-content: center;
    }
    .title-text{
        text-align: center;
        margin-bottom: 50px;
        color: #fff;
    }
    .contact-box{
        padding-top: 40px;
    }
    .footer{
        line-height: 100px;
        font-size: 12px;
        text-align: center;
    }
}
</style>