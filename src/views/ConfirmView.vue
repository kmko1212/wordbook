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

const toHomeView = async () => {
  try {
    await router.push('/')
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <v-container>
    <v-sheet class="w-50">
      <div class="text-h3 pb-5">確認</div>
      <p class="text-subtitle-1">英単語:</p>
      <p class="text-h5">{{ word }}</p>
      <p class="text-subtitle-1">意味:</p>
      <p class="text-h5">{{ meaning }}</p>
      <v-btn class="ml-5 mt-5" id="button-next" @click="toNextWord">次へ</v-btn>
      <v-btn class="ml-5 mt-5" id="button-home" @click="toHomeView">Homeへ戻る</v-btn>
    </v-sheet>
  </v-container>
</template>
