<template>
  <div>
    <div>hello vite&vue3&pinia--{{ userStore.age }}</div>
    <div><button @click="add"> +1</button></div>
    <div>DoubleAge--{{ userStore.doubleAge }}</div>
    <div>NameAndAge--{{ userStore.getNameAndAge }}</div>
    <!-- get传参方法 -->
    <div>addAge--{{ userStore.getAddAge(10) }}</div>
    <div><button @click="updatedName">changeName</button></div>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from "./stores/user";

const userStore = useUserStore()
// useStore模块是相应式的数据
const add = () => {
  userStore.age++
}
const updatedName=()=>{
  userStore.saveName('ajun')
}
</script>