<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const headerItems = [
    "products",
    "services",
    "news_and_publications",
    "institutional",
    "communication",
]
</script>

<template>
    <div>123</div>
    <!-- <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
        <el-menu-item class="el-menu-logo" index="0">
            <el-text class="mx-1" size="large">LOGO</el-text>
        </el-menu-item>
        <el-menu-item :index="(key + 1).toString()" v-for="(item, key) in headerItems">
            <el-text class="mx-1" size="large">{{ $t(item) }}</el-text>
        </el-menu-item> -->
        <!-- <div class="flex-grow" /> -->
        <!-- <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu> -->
    <!-- </el-menu> -->
</template>


<style>
.flex-grow {
    flex-grow: 1;
}
</style>