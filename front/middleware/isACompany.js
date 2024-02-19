export default defineNuxtRouteMiddleware(async (to, from) => {
    const { session, refresh, update, reset } = await useSession()
    const company = session.value?.isACompany || false;
    if(!company) {
        return navigateTo('/jobs');
    }
});
