<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const toResisterView = async () => {
  try {
    await router.push('/resister')
  } catch (error) {
    console.error(error)
  }
}
const toConfirmView = async () => {
  try {
    await router.push('/confirm')
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <v-container>
    <v-btn
      color="primary"
      size="x-large"
      rounded="lg"
      variant="flat"
      class="ml-5 mt-5"
      id="button-resister"
      @click="toResisterView"
      >登録</v-btn
    >
    <v-btn
      color="secondary"
      size="x-large"
      rounded="lg"
      variant="flat"
      class="ml-5 mt-5"
      id="button-confirm"
      @click="toConfirmView"
      >確認</v-btn
    >
  </v-container>
</template>
