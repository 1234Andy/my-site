module.exports = {
    // 基本路径 baseURL已经过时
    // publicPath: './',  //这个玩意儿有坑，一打开路由就有错，博客路由不能携带信息了，mmp
    // 输出文件目录
    // outputDir: 'dist', 
    devServer:{
      proxy:{
        "/api":{
          target:"http://baidu.com",
        }
      }
    }
   }