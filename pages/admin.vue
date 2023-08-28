<script>
export default {
  name: "PageContact",
  components: {
    pageEditAbout,
    pageEditContact,
  }
};
</script>

<script setup>
import { ref } from 'vue'

import pageEditAbout from '~/components/page/about/index.vue'
import pageEditContact from '~/components/page/contact/index.vue'

const active = ref(0)
const activeSiteSetting = ref(0)
const tabs = [
  "products",
  "categories",
  "sub_categories",
  "users",
  "comments",
  "site_settings",
  "contact_us",
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
          <div class="accordion mb-3" id="accordionProduct">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button fs-5" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseProduct" aria-expanded="true" aria-controls="collapseProduct">
                  {{ $t('product_add') }}
                </button>
              </h2>
              <div id="collapseProduct" class="accordion-collapse collapse" data-bs-parent="#accordionProduct">
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
          <div class="accordion mb-3" id="accordionCategory">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseCategory" aria-expanded="true" aria-controls="collapseCategory">
                  {{$t('category')}} {{$t('add')}}
                </button>
              </h2>
              <div id="collapseCategory" class="accordion-collapse collapse" data-bs-parent="#accordionCategory">
                <div class="accordion-body">
                  <CategoryForm type="create" :formId="-1" />
                </div>
              </div>
            </div>
          </div>
          <CategoryList />
        </div>
        <div class="subCategory" v-if="active == 2">
          <div class="accordion mb-3" id="accordionSubCategory">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseSubCategory" aria-expanded="true" aria-controls="collapseSubCategory">
                  Alt Kategori Ekle
                </button>
              </h2>
              <div id="collapseSubCategory" class="accordion-collapse collapse" data-bs-parent="#accordionSubCategory">
                <div class="accordion-body">
                  <SubCategoryForm type="create" :formId="-1" />
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
          <div class="accordion mb-3" id="accordionSiteSettings">
            <template v-for="(page, index) in ['About', 'Contact']">
              <div class="accordion-item" :class="index > 0 ? 'mt-3' : ''">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    @click="activeSiteSetting = index" :data-bs-target="`#collapsePage${page}`" aria-expanded="true"
                    :aria-controls="`collapsePage${page}`">
                    {{ $t(`page_${page.toLowerCase()}`) }}
                  </button>
                </h2>
                <div :id="`collapsePage${page}`" class="accordion-collapse collapse"
                  data-bs-parent="#accordionSiteSettings">
                  <div class="accordion-body">
                    <template v-if="activeSiteSetting === index">
                      <component :is="`pageEdit${page}`" :key="`page${page}`"></component>
                    </template>
                  </div>
                </div>
              </div>
            </template>

            <!-- <div class="accordion-item mt-3">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapsePageContact" aria-expanded="true" aria-controls="collapsePageContact">
                  {{ $t('page_contact_us') }}
                </button>
              </h2>
              <div id="collapsePageContact" class="accordion-collapse collapse" data-bs-parent="#accordionSiteSettings">
                <div class="accordion-body">
                  PageContact
                  <PageContact :key="'pageContact'" />
                </div>
              </div>
            </div> -->
          </div>
        </div>
        <div class="contact_us" v-if="active == 6">
          <div class="accordion mb-3" id="accordionContactUs">
            <div class="accordion-item mt-3">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapsePageContact" aria-expanded="true" aria-controls="collapsePageContact">
                  {{ $t('contact_us') }}
                </button>
              </h2>
              <div id="collapsePageContact" class="accordion-collapse collapse" data-bs-parent="#accordionSiteSettings">
                <div class="accordion-body">
                  <AdminContactus />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
