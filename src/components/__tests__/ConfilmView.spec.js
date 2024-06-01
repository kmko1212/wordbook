import { createRouter, createMemoryHistory } from 'vue-router'
import { describe, it, expect, beforeEach } from 'vitest'
import { reactive } from 'vue'

import { mount } from '@vue/test-utils'
import HomeView from '../../views/HomeView.vue'
import RegisterView from '../../views/RegisterView.vue'
import ConfirmView from '../../views/ConfirmView.vue'

const wordObj = reactive({
  word: 'apple',
  meaning: 'りんご'
})

let router

beforeEach(() => {
  router = createRouter({
    history: createMemoryHistory(),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/resister',
        name: 'resister',
        component: RegisterView
      },
      {
        path: '/confirm',
        name: 'confirm',
        component: ConfirmView
      }
    ]
  })
  localStorage.setItem('wordCount', 3)
  localStorage.setItem(
    1,
    JSON.stringify({
      word: 'apple',
      meaning: 'りんご'
    })
  )
  localStorage.setItem(
    2,
    JSON.stringify({
      word: 'orange',
      meaning: 'みかん'
    })
  )
  localStorage.setItem(
    3,
    JSON.stringify({
      word: 'banana',
      meaning: 'バナナ'
    })
  )
})

describe('ConfilmView', () => {
  it('renders properly', async () => {
    const wrapper = mount(ConfirmView, { global: { plugins: [router] } })
    const vm = wrapper.vm
    vm.word = wordObj.word
    vm.meaning = wordObj.meaning
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('navigates to / when #button-home is clicked', async () => {
    const wrapper = mount(ConfirmView, { global: { plugins: [router] } })

    await wrapper.find('#button-home').trigger('click')

    await router.isReady()

    expect(router.currentRoute.value.path).toBe('/')
  })
  it('when getWord is called with 3', () => {
    const wrapper = mount(ConfirmView, { global: { plugins: [router] } })
    wrapper.vm.getWord(3)
    expect(wrapper.vm.word).toBe('banana')
    expect(wrapper.vm.meaning).toBe('バナナ')
  })
  it('when toNextWord is called', async () => {
    const wrapper = mount(ConfirmView, { global: { plugins: [router] } })

    const vm = wrapper.vm
    vm.key = 1
    vm.word = 'りんご'
    vm.meaning = 'apple'
    await wrapper.vm.$nextTick()

    await wrapper.find('#button-next').trigger('click')
    expect(wrapper.vm.word).toBe('orange')
    expect(wrapper.vm.meaning).toBe('みかん')
  })
})
