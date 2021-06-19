<template>
  <div>
    <h1>App组件</h1>
    <Avatar
      url="http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c"
      :size="100"
    />
    <Icon type="home"/>
  </div>
</template>

<script> 
import Avatar from "./components/Avatar";
import Icon from "./components/Icon"
export default {
  name: 'App',
  components: { 
    Avatar,
    Icon
  }
}
</script> 
