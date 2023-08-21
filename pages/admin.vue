<script setup>
import { ref } from 'vue'

const active = ref(0)
const tabs = [
  "products",
  "categories",
  "sub_categories",
  "users",
  "comments",
  "site_settings",
]
</script>

<template>
  <div class="container admin">
    <div class="row">
      <div class="col-12 col-md-3">
        <div class="list-group">
          <button type="button" class="list-group-item list-group-item-action" @click="active = index"
            :class="`${active == index ? 'active' : ''}`" :aria-current="`${active == index ? 'true' : ''}`"
            v-for="(tab, index) in tabs" :key="index">
            {{ $t(tab) }}
          </button>
        </div>
      </div>
      <div class="col-12 col-md-9">
        <div class="products" v-if="active == 0">
          <div class="accordion mb-3" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProduct"
                  aria-expanded="true" aria-controls="collapseProduct">
                  {{ $t('product_add') }}
                </button>
              </h2>
              <div id="collapseProduct" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <AdminProductAdd />
                </div>
              </div>
            </div>
          </div>
          <h5 class="ps-1">{{ $t('product_list') }}</h5>
          <AdminProductList />
        </div>
        <div class="categories" v-if="active == 1">
          <div class="accordion mb-3" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProduct"
                  aria-expanded="true" aria-controls="collapseProduct">
                  Kategori Ekle
                </button>
              </h2>
              <div id="collapseProduct" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
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
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProduct"
                  aria-expanded="true" aria-controls="collapseProduct">
                  Alt Kategori Ekle
                </button>
              </h2>
              <div id="collapseProduct" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
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
        <div class="site-settings" v-if="active == 5">
          <div class="accordion mb-3" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProduct"
                  aria-expanded="true" aria-controls="collapseProduct">
                  {{ $t('page_about_us') }}
                </button>
              </h2>
              <div id="collapseProduct" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <PageAbout />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
