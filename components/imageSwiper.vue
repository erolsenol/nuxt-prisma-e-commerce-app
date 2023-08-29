<script>
export default {
    name: "ImageSwiper",
};
</script>
<script setup>
const { images } = defineProps({
    images: {
        type: Array,
        default: () => []
    },
    imageNames: {
        type: Array,
        default: () => []
    },
    loading: {
        type: Boolean,
        default: false
    },
})
</script>

<template>
    <Swiper v-if="!loading" :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1" :loop="true"
        :effect="'creative'" :autoplay="{ delay: 5000, disableOnInteraction: true, }" :creative-effect="{
            prev: { shadow: false, translate: ['-20%', 0, -1], },
            next: { translate: ['100%', 0, 0], },
        }">
        <SwiperSlide v-for="(image, index) in images" :key="index">
            <div class="card rounded-0" style="width: 26rem;">
                <nuxt-img :src="image" class="card-img-top rounded-2 rounded-bottom-0"
                    style="width: 100%; height: 12rem;" />
                <div class="card-body">
                    <h5 class="card-title fs-5">
                        {{ $t('image_name') }}: {{ imageNames[index] }}
                    </h5>
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
</template>