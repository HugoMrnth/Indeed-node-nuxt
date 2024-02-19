<template>
    <div>
        <NuxtLayout :name="layout">
            <div>
                <h1 class="font-bold text-xl">Home</h1>
            </div>
        </NuxtLayout>
    </div>
</template>

<script setup>
const { session } = await useSession();
const layout = ref(session.value.accessToken ? "logged" : "default");
definePageMeta({
    layout: false
    // middleware: [
    //     'auth',
    //     // Add in more middleware here
    // ]
});
</script>

<style scoped>

</style>