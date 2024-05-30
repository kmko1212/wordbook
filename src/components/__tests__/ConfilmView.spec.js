import { describe, it, expect } from 'vitest'
import { reactive } from 'vue'

import { mount } from '@vue/test-utils'
import ConfilmView from '../../views/ConfirmView.vue'

const wordObj = reactive({
  word: 'apple',
  meaning: 'りんご'
})

describe('ConfilmView', () => {
  it('renders properly', async () => {
    const wrapper = mount(ConfilmView)
    const vm = wrapper.vm
    vm.word = wordObj.word
    vm.meaning = wordObj.meaning
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
