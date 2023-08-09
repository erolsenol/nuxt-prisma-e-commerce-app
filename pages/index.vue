<script setup>
const foo = useFoo();
const { $helper } = useNuxtApp();
</script>

<template>
  <div class="my-class">
    {{ foo("99") }}
    {{ $helper("99") }}
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/dashboard">dashboard</NuxtLink>
    <LazyElButton type="warning">lazy button</LazyElButton>
    <h1 class="title">Nuxt Anime</h1>
    <div>nasilsin iyi misin ben iyiym</div>
    <el-row>
      <el-col :span="4"> 1 </el-col>
      <el-col :span="6"> 2 </el-col>
      <el-col :span="8"> 3 </el-col>
      <el-col :span="2"> 
        
      </el-col>
    </el-row>
  </div>
</template>
