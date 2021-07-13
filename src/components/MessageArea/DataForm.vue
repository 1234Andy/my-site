<template>
  <div class="data-from-container">
    <form 
      id="data-from-container" 
      ref="form"
      @submit.prevent="handleSubmit"
    >
      <div class="user-name-box">
        <input 
          placeholder="用户昵称" 
          type="text" 
          maxlength="10"
          v-model="formData.nickname" 
        />
        <span class="hint">{{ formData.nickname.length }} /10</span>
        <div class="errer-text">{{ error.nickname }}</div>
      </div>
      <div class="user-content">
        <textarea 
        maxlength="300"
          placeholder="输入内容"
          v-model="formData.content"
        ></textarea>
        <span class="hint">{{ formData.content.length }} /300</span>
        <div class="errer-text">{{ error.content }}</div>
      </div>
      <button :disabled="isSubmiting" class="btn">
        {{ isSubmiting ? "提交中..." : "提交" }}
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formData:{
        nickname:"",
        content: "",
      },
      error:{
        nickname:"",
        content:"",
      },
      isSubmiting:false
    }
  },
  methods:{
    handleSubmit() {
      this.error.nickname = this.formData.nickname ? "" : "请填写昵称";
      this.error.content = this.formData.content ? "" : "请填写内容";
      if(this.error.nickname || this.error.content){
        
        // 有错误
        return;
      }
      this.isSubmiting = true; //正在提交，防止重负点击
      this.$emit("submit",this.formData,(successMsg) => {
        // 与父组件通信，通知父组件，父组件处理这个回调函数
         
        this.$showMessage({
          content:successMsg,
          type:"success",
          duration:1000,
          container:this.$refs.form, 
          callback: () =>{
            this.isSubmiting = false;
            this.formData.nickname = "";
            this.formData.content = "";
          }
        });
      })
    }
  }
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.user-name-box,
.user-content {
  position: relative;
  width: 100%;
  margin: 30px 0;
  .errer-text {
    position: absolute; 
    left: 3px;
    bottom: -25px;
    font-size: 14px;
    color: @danger;
  }
  .hint {
    position: absolute;
    bottom: 0;
    right: 4px;
    font-size: 10px;
    color: @lightWords;
  }
}

.user-name-box input,
.user-content textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  border: 1px dashed #b4b8bc;
  outline: none;
  color: #373737;
  font-size: 14px;
  border-radius: 4px;
}

.user-name-box {
  width: 50%;
  input {
    line-height: 2rem;
  }
}
textarea {
  resize: none;
  padding: 8px 15px;
  height: 120px;
}
.btn{
    position: relative;
    cursor: pointer;
    border: none;
    outline: none;
    width: 100px;
    height: 34px;
    color: #fff;
    border-radius: 4px;
    background: #6b9eee;
    &:hover{
        background: #3d80e9;
    }
}
</style>