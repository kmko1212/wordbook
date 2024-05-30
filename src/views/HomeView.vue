<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const toResisterView = () => {
  router.push('/resister')
}
const toConfirmView = () => {
  router.push('/confirm')
}
</script>

<template>
  <div>
    <h2>Wordbook</h2>
    <button @click="toResisterView">登録</button>
    <button @click="toConfirmView">確認</button>
  </div>
</template>
