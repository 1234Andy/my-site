<template> 
  <RightList :list="list" @select="handleSelect" />
</template>

<script>
import RightList from "./RightList";
export default {
  components: {
    RightList,
  },
  data() {
    return {
      list: [
        { name: "a", isSelect: false },
        { name: "b", isSelect: false },
        {
          name: "c",
          isSelect: true,
          children: [
            { name: "c-1", isSelect: false },
            { name: "c-2", isSelect: false },
            {
              name: "c-3",
              isSelect: true,
              children: [
                { name: "c-3-1", isSelect: true },
                { name: "c-3-2", isSelect: false },
                { name: "c-3-3", isSelect: false },
              ],
            },
            { name: "c-4", isSelect: false },
          ],
        },
        { name: "d", isSelect: false },
        {
          name: "e",
          isSelect: false,
          children: [
            { name: "e-2-1", isSelect: false },
            { name: "e-2-2", isSelect: false },
            { name: "e-2-3", isSelect: false },
          ],
        },
      ],
    };
  },
  methods:{
    handleSelect (item) {
      console.log(item);
    }
  }
};
</script>

<style>
</style>