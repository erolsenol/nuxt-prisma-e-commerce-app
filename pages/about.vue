<script setup>
import { ref } from "vue"

const activeIndex = ref(0)

const tabs = ["Home", "Profile", "Messages", "Settings"]
</script>

<template>
  <div class="about-content">
    <div class="container">
      <div class="row">
        <div class="col-3 list">
          <div class="list-group" id="myList" role="tablist">
            <a class="list-group-item list-group-item-action" :class="index === activeIndex ? 'active' : ''"
              data-bs-toggle="list" :href="`#${tab}`" @click="activeIndex = index" role="tab"
              v-for="(tab, index) in tabs">
              <span class="fs-6 fw-medium">{{ tab }}</span>
            </a>
          </div>
        </div>
        <div class="col-9">
          <div class="tab-content">
            <div class="tab-pane" :class="index === activeIndex ? 'active' : ''" :id="tab" role="tabpanel"
              v-for="(tab, index) in tabs">
              <p class="lh-sm">
                {{ `${tab} Content` }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
