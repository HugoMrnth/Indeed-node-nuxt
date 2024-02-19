export default defineNuxtRouteMiddleware(async (to, from) => {
    const { session, refresh, update, reset } = await useSession()
    const accessToken = session.value.accessToken;
    if(!accessToken) {
        return navigateTo('/jobs');
    }
});
