
<template>
    <UCard>
        <template #header>
            <p class="font-bold text-gray-900 m-4 truncate text-xl">{{ job.title }}</p>
        </template>
        <div class="h-36 flex flex-col justify-between">
            <p class="text-gray-500 m-4 text-lg h-24"> {{ job.shortDescription }}</p>
            <p class="font-bold"><UIcon name="i-material-symbols-location-on-outline" dynamic class="text-xl"/> {{ job.place }}</p>
        </div>
        <template #footer>
            <div class="flex justify-between items-center">
                <p>Published {{ daysFromNow(job.createdAt) }} days ago</p>
                <NuxtLink :to="`/jobs`" ><UButton>Learn more</UButton></NuxtLink>
            </div>
        </template>
  </UCard>
</template>

<script setup>

const { job } = defineProps(['job'])
onMounted(() => {
    console.log(job.title);
})

function daysFromNow(date){
    let date_1 = new Date(date);
    let date_2 = new Date();
    let difference = date_2.getTime() - date_1.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays    
}


</script>
ep:location
<style scoped>

</style>