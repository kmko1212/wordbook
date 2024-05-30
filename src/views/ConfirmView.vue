<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const word = ref('')
const meaning = ref('')
const key = ref(1)
const wordObj = reactive({
  word: '',
  meaning: ''
})

onMounted(() => {
  getWord(key.value)
})

const toNextWord = () => {
  key.value++
  if (!localStorage.getItem(key.value)) key.value = 1
  getWord(key.value)
}

const getWord = (wordKey) => {
  Object.assign(wordObj, JSON.parse(localStorage.getItem(wordKey)))
  word.value = wordObj.word
  meaning.value = wordObj.meaning
}

const toHomeView = () => {
  router.push('/')
}
</script>

<template>
  <div>
    <h2>確認</h2>
    <p>英単語: {{ word }}</p>
    <p>意味: {{ meaning }}</p>
    <p><button @click="toNextWord">次へ</button></p>
    <p><button @click="toHomeView">Homeへ戻る</button></p>
  </div>
</template>
