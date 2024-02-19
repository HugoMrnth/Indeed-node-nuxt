<template>
    <div>
        <UForm ref="form" :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
            <UFormGroup label="Email" name="email">
              <UInput v-model="state.email" />
            </UFormGroup>

            <UFormGroup label="Password" name="password">
              <UInput v-model="state.password" type="password"/>
            </UFormGroup>

            <UButton type="submit">
              Submit
            </UButton>
            
            <UFormGroup  name="error">
            </UFormGroup>
        </UForm>
    </div>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types';
const { session, refresh, update, reset } = await useSession();


const form = ref()

const state = reactive({
    email: "",
    password: "",
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.email) errors.push({ path: 'email', message: 'Required' })
  if (!state.password) errors.push({ path: 'password', message: 'Required' })
  
  return errors
}

async function onSubmit (event: FormSubmitEvent<any>) {
  // Do something with data
  // console.log(event.data)
  $fetch('http://localhost:5000/auth/login', {
    method: 'POST',
    body: event.data
  }).then(async (res: any) => {
    if(res?.error) {
      form.value.setErrors(res.error.map((err: string) => {
        return { path: "error", message: err }
      }))
    } else {
      await update({
        accessToken: res.accessToken,
        isACompany: res.isACompany
      })      
      navigateTo('/jobs');
 
    }
  })
}
</script>

<style scoped>

</style>