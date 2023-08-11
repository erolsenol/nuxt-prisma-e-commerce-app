<script setup>
const foo = useFoo();
const { $helper } = useNuxtApp();


</script>

<template>
  <div class="slider">
    <div class="container-fluid">
      <HomeSwiper />
    </div>
  </div>

  <div class="content mt-3">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <QuickAction title="test" icon="icontest"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <QuickAction title="test" icon="icontest"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <QuickAction title="test" icon="icontest"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
        </div>
      </div>
    </div>
  </div>
</template>
