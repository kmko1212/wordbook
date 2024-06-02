import { createVuetify } from 'vuetify'
import { createRouter, createMemoryHistory } from 'vue-router'
import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from '../../views/HomeView.vue'
import RegisterView from '../../views/RegisterView.vue'
import ConfirmView from '../../views/ConfirmView.vue'

let router
const vuetify = createVuetify()

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
})

describe('RegisterView', () => {
  it('renders properly', () => {
    const wrapper = mount(RegisterView, { global: { plugins: [router, vuetify] } })
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('navigates to / when #button-home is clicked', async () => {
    const wrapper = mount(RegisterView, { global: { plugins: [router, vuetify] } })

    await wrapper.find('#button-home').trigger('click')

    await router.isReady()

    expect(router.currentRoute.value.path).toBe('/')
  })
  it('saves word and meaning to localStorage when onRegister is called', async () => {
    const wrapper = mount(RegisterView, { global: { plugins: [router, vuetify] } })

    const vm = wrapper.vm
    vm.key = 1
    vm.word = 'りんご'
    vm.meaning = 'apple'
    await wrapper.vm.$nextTick()

    const receivedData = {
      word: 'りんご',
      meaning: 'apple'
    }

    await wrapper.find('#button-register').trigger('click')
    expect(JSON.parse(localStorage.getItem('1'))).toEqual(receivedData)
  })
})
