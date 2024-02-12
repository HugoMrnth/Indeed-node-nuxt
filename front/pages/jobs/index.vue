<template>
    <div>
        <h2 class="font-bold text-xl">Jobs</h2>
        <div class="grid grid-cols-3 gap-10 my-4">
            <JobsCard v-for="j in jobs" :key="j" :job="j"/>
        </div>
    </div>
</template>

<script setup>
    const { data: jobs } = useFetch('http://localhost:5000/jobs')
    onMounted(() => {
        console.log(jobs);
    })
</script>

<style scoped>

</style>