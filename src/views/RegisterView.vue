<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const word = ref('')
const meaning = ref('')
const key = ref(0)

const onResister = () => {
  setKey()
  console.log(key.value)
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
}

const toHomeView = async () => {
  try {
    await router.push('/')
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div>
    <h2>登録</h2>
    <p>英単語: {{ word }}</p>
    <input v-model="word" placeholder="英単語を入力" />
    <p>意味: {{ meaning }}</p>
    <input v-model="meaning" placeholder="意味を入力" />
    <p><button id="button-register" @click="onResister">登録</button></p>
    <p><button id="button-home" @click="toHomeView">Homeへ戻る</button></p>
  </div>
</template>
