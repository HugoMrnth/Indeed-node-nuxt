<template>
    <div>
        <NuxtLink :to="`/jobs`"><UButton><UIcon name="i-ep-back" dynamic class="font-bold"/>Back</UButton></NuxtLink>
        <div class="mt-7 grid grid-cols-8 gap-10">
            <UCard class="col-span-6">
                <template #header>
                    <p class="text-xl text-gray-700 mb-5">{{ job.Company.name }}</p>
                    <h2 class="text-5xl font-bold">{{ job.title }}</h2>
                    <div class="my-5 flex items-center justify-between w-1/2">
                        <p class="font-bold"><UIcon name="i-material-symbols-location-on-outline" dynamic class="text-xl"/> {{ job.place }}</p>
                        <p class="font-bold"><UIcon name="i-ep-clock" dynamic class="text-xl"/> {{ job.hours }}h per week</p>
                        <p class="font-bold"><UIcon name="i-ep-money" dynamic class="text-xl"/> {{ job.wage }}</p>
                    </div>
                    <div class="flex justify-between items-center">
                        <p class="text-gray-500">{{ daysFromNow(job.createdAt) }}</p>
                        <UButton>Apply</UButton>
                    </div>
                </template>
                <div class="mx-auto">
                    <p class="text-2xl mb-5 font-bold">Description</p>
                    <p class="text-gray-500"> {{ job.description }}</p>
                </div>
            </UCard>
            <UCard class="col-span-2">
                <p class="text-2xl font-bold text-gray-700 mb-2">{{ job.Company.name }}</p>
                <p class="text-gray-700 mb-5">{{ job.Company.adress }} {{ job.Company.city }}, {{ job.Company.zipcode }}</p>
                <p class="text-xl font-bold text-gray-700 mb-2">Description</p>
                <p class="text-gray-500 mb-5">{{ job.Company.description }}</p>

            </UCard>
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
const id = route.params.id;
const { data: job } = await useFetch(`http://localhost:5000/jobs/${id}`)
function daysFromNow(date){
    let date_1 = new Date(date);
    let date_2 = new Date();
    let difference = date_2.getTime() - date_1.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    let days = TotalDays > 1 ? 'days' : 'day'; 
    return `Published ${TotalDays} ${days} ago`    
}
</script>

<style scoped>

</style>