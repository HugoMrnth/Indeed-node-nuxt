<template>
    <div class="card grid grid-cols-2 gap-10">
        <div class="p-7">
            <img :src="product.image" alt="" class="mx-auto my-7">
        </div>
        <div class="p-7">
            <h2 class="text-4xl my-7">{{ product.title }}</h2>
            <p class="text-2xl my-7">{{ product.price }} €</p>
            <h3 class="font-bold border-b-2 mb-4 pb-2">Description</h3>
            <p>{{ product.description }}</p>
        </div>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])

</script>

<style scoped>
img {
    max-height: 500px;
}


</style>