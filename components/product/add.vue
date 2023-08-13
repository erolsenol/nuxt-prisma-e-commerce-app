<script>
export default {
    name: 'ProductAdd'
}
</script>

<script setup>
import { ref } from 'vue'

const input_image = ref(null)
const data = ref({
    title: null,
    content: null,
    images: [],
    imageNames: []
})

function onFileChange(e) {
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length) return;
    createImage(files);
}
function createImage(files) {

    data.value.imageNames = []
    data.value.images = []

    for (var index = 0; index < files.length; index++) {
        var reader = new FileReader();
        data.value.imageNames.push(files[index].name)
        reader.onload = (event) => {
            const imageUrl = event.target.result;
            data.value.images.push(imageUrl);
        }
        reader.readAsDataURL(files[index]);
    }
}
function removeImage(index) {
    images.splice(index, 1)
}

</script>

<template>
    <div class="product-add">
        {{ data }}
        {{ images }}
        <div class="mb-3">
            <label for="product-name" class="form-label">Ürün Adı</label>
            <input :value="data.title" @change="data.title = $event.target.value" type="text" class="form-control"
                id="product-name">
        </div>
        <div class="mb-3">
            <label for="product-content" class="form-label">Ürün Açıklaması</label>
            <input :value="data.content" @change="data.content = $event.target.value" type="text" class="form-control"
                id="product-content">
        </div>
        <div id="carouselExampleIndicators" class="carousel slide mb-3">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" v-for="(image, index) in data.images">
                    <img src="..." class="d-block w-100">
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100">
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div class="mb-3">
            <label for="product-image" class="form-label">Ürün Görselli</label>
            <input @change="onFileChange" ref="input_image" class="form-control" type="file" id="product-image"
                accept="image/png, image/jpeg" multiple>
        </div>
        <button class="btn btn-primary" @click="save">Kaydet</button>
    </div>
</template>
