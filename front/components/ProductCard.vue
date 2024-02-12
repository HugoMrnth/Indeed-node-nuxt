
<template>
    <div class="card text-center">
        <img :src="product.image" alt="product thumb" class="thumb">
        <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
        <div class="flex justify-between mx-4 items-center">
            <p class="font-bold text-gray-900s"> {{ product.price }} €</p>
            <NuxtLink :to="`/products/${product.id}`" class="btn">See more</NuxtLink>
        </div>
    </div>
</template>

<script setup>

const { product } = defineProps(['product'])


</script>

<style scoped>

</style>