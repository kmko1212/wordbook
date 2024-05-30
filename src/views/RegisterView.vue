<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const word = ref('')
const meaning = ref('')
const key = ref(0)

const onResister = () => {
  setKey()
  localStorage.setItem(
    key.value,
    JSON.stringify({
      word: word.value,
      meaning: meaning.value
    })
  )
  localStorage.setItem('wordCount', key.value)
}
const setKey = () => {
  if (!localStorage.getItem('wordCount')) {
    localStorage.setItem('wordCount', 0)
  } else {
    key.value = Number(localStorage.getItem('wordCount')) + 1
  }
  console.log('setKey')
}
const toHomeView = () => {
  router.push('/')
}
</script>

<template>
  <div>
    <h2>登録</h2>
    <p>英単語: {{ word }}</p>
    <input v-model="word" placeholder="英単語を入力" />
    <p>意味: {{ meaning }}</p>
    <input v-model="meaning" placeholder="意味を入力" />
    <p><button @click="onResister">登録</button></p>
    <p><button @click="toHomeView">Homeへ戻る</button></p>
  </div>
</template>
