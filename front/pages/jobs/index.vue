<template>
    <div>
        <NuxtLayout :name="layout">
            <div>
                <h2 class="font-bold text-xl">Jobs</h2>
                <div class="grid grid-cols-3 gap-10 my-4">
                    <JobsCard v-for="j in jobs" :key="j" :job="j"/>
                </div>
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
const { data: jobs } = await useFetch('http://localhost:5000/jobs')   
</script>

<style scoped>

</style>