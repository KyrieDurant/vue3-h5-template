<template>
  <van-tabbar v-model="active" :placeholder="true" :route="true" fixed>
    <van-tabbar-item
      v-for="(item, index) in tabbarData"
      :key="index"
      :icon="item.icon"
      :to="item.to"
    >
      {{ item.title }}
    </van-tabbar-item>
    
  </van-tabbar>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

const active = ref(0);
const tabbarData = reactive([
  // {
  //   icon: "wap-home-o",
  //   title: "主页",
  //   to: {
  //     name: "Demo"
  //   }
  // },
  {
    icon: "edit",
    title: "编辑",
    to: {
      name: "Edit"
    }
  },
  {
    icon: "gem-o",
    title: "图册",
    to: {
      name: "Tools"
    }
  },
  {
    icon: "user-o",
    title: "我的",
    to: {
      name: "About"
    }
  }
]);
</script>
