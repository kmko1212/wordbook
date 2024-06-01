import { createRouter, createMemoryHistory } from 'vue-router'
import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import HomeView from '../../views/HomeView.vue'
import RegisterView from '../../views/RegisterView.vue'
import ConfirmView from '../../views/ConfirmView.vue'

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
})

describe('HomeView', () => {
  it('renders properly', () => {
    const wrapper = mount(HomeView, { global: { plugins: [router] } })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('navigates to /resister when #button-resister is clicked', async () => {
    const wrapper = mount(HomeView, { global: { plugins: [router] } })

    await wrapper.find('#button-resister').trigger('click')

    await router.isReady()

    expect(router.currentRoute.value.path).toBe('/resister')
  })

  it('navigates to /confirm when #button-confirm is clicked', async () => {
    const wrapper = mount(HomeView, { global: { plugins: [router] } })

    await wrapper.find('#button-confirm').trigger('click')

    await router.isReady()

    expect(router.currentRoute.value.path).toBe('/confirm')
  })
})
