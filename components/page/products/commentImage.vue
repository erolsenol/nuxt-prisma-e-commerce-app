<script>
export default {
    name: "ProductCommentImage",
};
</script>
<script setup>
const { images } = defineProps({
    images: {
        type: Array,
        default: () => []
    },
})
</script>

<template>
    <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1" :loop="true"
        :effect="'creative'" :autoplay="{ delay: 5000, disableOnInteraction: true, }" :creative-effect="{
            prev: { shadow: true, translate: ['-100%', 0, -1], },
            next: { translate: ['100%', 0, 0], },
        }">
        <SwiperSlide v-for="(image, index) in images" :key="index">
            <!-- <div class="card border-0 rounded-0" style="width: 100%; max-height: 20rem;"> -->
            <!-- <div style="width: 100%; max-height: 14rem;" class="d-inline-block"> -->
                <nuxt-img :src="`images/comment/${image.name}`" style="max-height: 14rem;"
                    class="img-fluid img-thumbnail mx-auto rounded-2 rounded-bottom-0" />
            <!-- </div> -->
            <!-- <div class="card-body">
                    <h5 class="card-title fs-5 text-center">
                        {{ $t('image_name') }}: {{ image.name }}
                    </h5>
                </div> -->
            <!-- </div> -->
        </SwiperSlide>
    </Swiper>
</template>

<style></style>