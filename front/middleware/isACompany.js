export default defineNuxtRouteMiddleware(async (to, from) => {
    const { session, refresh, update, reset } = await useSession()
    const company = session.value?.isACompany || false;
    const accessToken = session.value?.accessToken || false;

    if(!company) {
        return navigateTo('/jobs');
    } else {
        $fetch('http://localhost:5000/auth/isACompany', {
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
