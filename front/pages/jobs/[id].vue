<template>
    <div>
        <NuxtLink :to="`/jobs`" ><UButton><UIcon name="i-ep-back" dynamic class="font-bold"/>Back</UButton></NuxtLink>
        <UCard class="mt-7 w-2/3">
            <template #header>
                <h2 class="text-5xl font-bold"> {{ job.title }} </h2>
                <div class="my-5 flex items-center justify-between w-1/2">
                    <p class="font-bold"><UIcon name="i-material-symbols-location-on-outline" dynamic class="text-xl"/> {{ job.place }}</p>
                    <p class="font-bold"><UIcon name="i-ep-clock" dynamic class="text-xl"/> {{ job.hours }}h per week</p>
                    <p class="font-bold"><UIcon name="i-ep-money" dynamic class="text-xl"/> {{ job.wage }}</p>
                </div>
                <div class="flex justify-between items-center">
                    <p class="">{{ daysFromNow(job.createdAt) }}</p>
                    <UButton>Apply</UButton>
                </div>
            </template>
            <div class="mx-auto">
                <p class="text-2xl mb-5 font-bold">Description</p>
                <p class=""> {{ job.description }}</p>
            </div>

        </UCard>

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