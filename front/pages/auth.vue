<template>
    <div>
        <h2 class="font-bold text-xl">Jobs</h2>
        <div class=" m-auto mt-8 max-w-lg">
            <UCard>
                <template #header>
                        <ul class="flex justify-evenly">
                            <li :class="{ 'active' : t.id === tabActive.id }" v-for="t in tabList" :key="t.id" @click="handleChangeTab(t)">{{ t.text }}</li>
                        </ul>
                </template>
                <div v-if="tabActive.id === 0">
                    <AuthLoginForm />
                </div>
                <div v-else>
                    <AuthRegistrationForm />
                </div>
            </UCard>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
  middleware: [
    'logged',
    // Add in more middleware here
  ]
});
const tabList = [
    {
        id: 0,
        text: 'Sign in',
    },
    {
        id: 1,
        text: 'Registration',
    }];
let tabActive = ref(tabList[0]);

function handleChangeTab(tabName) {
    tabActive.value = tabName;
}
</script>

<style scoped>
.active {
    color: #12b488;
    text-decoration: underline;
}


</style>