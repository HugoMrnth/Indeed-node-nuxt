<template>
    <div>
        <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
            <UFormGroup label="Title" name="title">
              <UInput v-model="state.title" />
            </UFormGroup>

            <UFormGroup label="Short description" name="shortDescription">
              <UInput v-model="state.shortDescription" />
            </UFormGroup>
            
            <UFormGroup label="Description" name="description">
              <UTextarea v-model="state.description" :rows="9"/>
            </UFormGroup>

            <UFormGroup label="Wage" name="wage">
              <UInput v-model="state.wage" />
            </UFormGroup>

            <UFormGroup label="Place of work" name="place">
              <UInput v-model="state.place" />
            </UFormGroup>

            <UFormGroup label="Hours per week" name="hours">
              <UInput v-model="state.hours" />
            </UFormGroup>

            <UButton type="submit">
              Submit
            </UButton>
        </UForm>
    </div>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'

const state = reactive({
  title: "Job 1",
  shortDescription: undefined,
  description: undefined,
  wage: "35000",
  place: "Earth",
  hours: '39',
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.title) errors.push({ path: 'title', message: 'Required' })
  if (!state.shortDescription) errors.push({ path: 'shortDescription', message: 'Required' })
  if (!state.description) errors.push({ path: 'description', message: 'Required' })
  if (!state.wage) errors.push({ path: 'wage', message: 'Required' })
  if (!state.place) errors.push({ path: 'place', message: 'Required' })
  if (!state.hours) errors.push({ path: 'hours', message: 'Required' })

  
  return errors
}

async function onSubmit (event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data)
  $fetch('http://localhost:5000/jobs', {
    method: 'POST',
    body: event.data
  })
  // await navigateTo('/jobs')
}
</script>

<style scoped>

</style>