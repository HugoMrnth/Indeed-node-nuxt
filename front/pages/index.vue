<template>
    <div>
        <h1>Home</h1>
        <div v-for="p in peoples" :key="p.id">
            <p>{{ p.name }}</p>
            <p>test</p>
        </div>
    </div>
</template>

<script setup>
    const { data: peoples } = useFetch('http://localhost:5000/peoples')
    onMounted(() => {
        console.log(peoples);
    })
</script>

<style scoped>

</style>