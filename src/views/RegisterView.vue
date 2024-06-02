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
  <v-container>
    <v-sheet class="w-50">
      <div class="text-h3 pb-5">登録</div>
      <v-text-field
        label="英単語"
        placeholder="英単語を入力"
        type="input"
        v-model="word"
      ></v-text-field>
      <v-text-field
        label="意味"
        placeholder="意味を入力"
        type="input"
        v-model="meaning"
      ></v-text-field>
      <v-btn class="ml-5 mt-5" id="button-register" @click="onResister">登録</v-btn>
      <v-btn class="ml-5 mt-5" id="button-home" @click="toHomeView">Homeへ戻る</v-btn>
    </v-sheet>
  </v-container>
</template>
