export default defineNuxtRouteMiddleware(async (to, from) => {
    const { session, refresh, update, reset } = await useSession()
    const accessToken = session.value.accessToken;
    if(!accessToken) {
        return navigateTo('/jobs');
    } else {
        $fetch('http://localhost:5000/auth/logged', {
            method: 'GET',
            headers: {
                accessToken: accessToken
            }
        }).then((res) => {
            if(!res) {
                return navigateTo('/jobs');
            }
        })
    }
});
