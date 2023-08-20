
<script>
export default {
    name: "Loading",
};
</script>
<template>
    <div class="d-flex justify-content-center">
        <div class="spinner-border m-5" role="status">
            <span class="visually-hidden">{{ $t('loading') }}</span>
        </div>
    </div>
</template>
