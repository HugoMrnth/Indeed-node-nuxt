<template>
    <UCard class=" m-auto mt-8 max-w-lg">
        <template #header>
            <h2 class="font-bold">Add a job</h2>
        </template>
            <JobsAddForm/>
    </UCard>
</template>

<script setup>
definePageMeta({
    layout: 'logged',
    middleware: [
        'auth',
        'is-a-company',
        // Add in more middleware here
    ]
});
</script>

<style scoped>

</style>