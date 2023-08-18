<script setup>
import { ref } from 'vue'

const active = ref(0)
const tabs = ["product","category", "subCategory", "user", "comment"]
</script>

<template>
  <div class="container admin">
    <div class="row">
      <div class="col-12 col-md-3">
        <div class="list-group">
          <button type="button" class="list-group-item list-group-item-action" @click="active = index"
            :class="`${active == index ? 'active' : ''}`" :aria-current="`${active == index ? 'true' : ''}`"
            v-for="(tab, index) in tabs" :key="index">
            {{ tab }}
          </button>
        </div>
      </div>
      <div class="col-12 col-md-9">
        <div class="product" v-if="active == 0">
          <div class="accordion mb-3" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                  aria-expanded="true" aria-controls="collapseOne">
                  Product Add
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <ProductAdd />
                </div>
              </div>
            </div>
          </div>
          <h5 class="ps-1">Product List</h5>
          <ProductList />
        </div>
        <div class="category" v-if="active == 1">
          <div class="accordion mb-3" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                  aria-expanded="true" aria-controls="collapseOne">
                  Kategori Ekle
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <CategoryAdd />
                </div>
              </div>
            </div>
          </div>
          <h5 class="ps-1">Kategori List</h5>
          <CategoryList />
        </div>
        <div class="subCategory" v-if="active == 2">
          <div class="accordion mb-3" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                  aria-expanded="true" aria-controls="collapseOne">
                  Alt Kategori Ekle
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <SubCategoryAdd />
                </div>
              </div>
            </div>
          </div>
          <h5 class="ps-1">Alt kategori listesi</h5>
          <SubCategoryList />
        </div>
        <div class="user" v-if="active == 3">
          user
        </div>
        <div class="comment" v-if="active == 4">
          comment
        </div>
      </div>
  </div>
</div></template>
