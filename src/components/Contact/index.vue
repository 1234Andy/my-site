<template>
  <div class="contact-container">
    <ul class="contact-list">
      <li>
        <a href="">
          <span class="icon-container">
            <Icon type="github" />
          </span>
          <span class="text-container">罗冠景的Github</span>
        </a>
      </li>
       <li>
        <a href="">
          <span class="icon-container">
            <Icon type="mail" />
          </span>
          <span class="text-container">罗冠景的E-mail</span>
        </a>
      </li>
      <li>
        <a href="tencent://message/?Menu=yes&uin=1633869696&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45">
          <span class="icon-container">
            <Icon type="qq" />
          </span>
          <span class="text-container">罗冠景的QQ</span>
          <div class="pop">
            <img
              src="http://www.duyiedu.com/source/img/%E5%B0%8F%E6%B8%A1%E5%BE%AE%E4%BF%A1%E4%BA%8C%E7%BB%B4%E7%A0%81.png"
              alt=""
            />
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <span class="icon-container">
            <Icon type="weixin" />
          </span>
          <span class="text-container">罗冠景的微信</span>
          <div class="pop">
            <img
              src="http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png"
              alt=""
            />
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped >
@import "~@/styles/var.less";
@import "~@/styles/global.less";
.contact-container {
  width: 100%;
  // height: 100%;
  text-align: left;
  padding: 5px 20px;
  color: @lightWords + 40%;
  font-size: 14px;
  .contact-list {
    li {
      padding: 5px 0;
      span.text-container {
        padding-left: 8px;
      }
      span.icon-container {
        font-size: 23px;
      }

      a {
        position: relative;
        .pop {
          position: absolute;
          width: 150px;
          height: 150px;
          left: 0;
          bottom: 35px;
          border-radius: 8px;
          transform: scaleY(0);
          transform-origin: center bottom;
          transition: 0.3s;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        &:hover {
          .pop {
            transform: scaleY(1);
          }
        }
      }
    }
  }
}
</style>