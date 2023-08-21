<script>
export default {
    name: "PageDesing",
};
</script>
<script setup>
import { ref } from "vue"

</script>

<template>
    <div class="d-flex flex-row">
       <div>
        <slot name="content"></slot>
       </div>
       <div>
        <slot name="image"></slot>
       </div>
    </div>
</template>
