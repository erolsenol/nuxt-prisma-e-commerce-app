<script setup>
const foo = useFoo();
const { $helper } = useNuxtApp();
</script>

<template>
  <div class="el-page">
    <el-row>
      <el-col :span="4"> 1 </el-col>
      <el-col :span="6"> 2 </el-col>
      <el-col :span="8"> 3 </el-col>
      <el-col :span="2"> 
        <el-text class="mx-1">Default</el-text>
  <el-text class="mx-1" type="primary">Primary</el-text>
  <el-text class="mx-1" type="success">Success</el-text>
  <el-text class="mx-1" type="info">Info</el-text>
  <el-text class="mx-1" type="warning">Warning</el-text>
  <el-text class="mx-1" type="danger">Danger</el-text>
      </el-col>
    </el-row>
  </div>

</template>
