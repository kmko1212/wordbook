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
  <div>
    <h2>Wordbook</h2>
    <button id="button-resister" @click="toResisterView">登録</button>
    <button id="button-confirm" @click="toConfirmView">確認</button>
  </div>
</template>
