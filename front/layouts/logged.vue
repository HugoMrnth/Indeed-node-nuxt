<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto w-12/12 flex justify-between items-center h-16">
                <NuxtLink to="/" class="font-bold">Indidier</NuxtLink>
                <ul class="flex gap-4 items-center">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/jobs">Jobs</NuxtLink></li>
                    <li v-if="isACompany"><NuxtLink to="/jobs/add">Add</NuxtLink></li>
                    <li><UButton @click="handleLogOut">Log out</UButton></li>
                </ul>
            </nav>            
        </header>

        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>

<script setup>
const { session, refresh, update, reset } = await useSession();
// const sessionCompany = window.sessionStorage.getItem('isACompany')
const isACompany = session.value?.isACompany || false;

async function handleLogOut() {
    const accessToken = session.value.accessToken;
    console.log(session.value);
    if(accessToken) {
        await reset();
        return navigateTo('/auth');
    }
}

</script>

<style scoped>

</style>