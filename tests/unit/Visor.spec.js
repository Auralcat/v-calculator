import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Visor from '@/components/Visor.vue'

describe('Visor.vue', () => {
  it('shows a blank visor when mounted', () => {
    const msg = ''
    const wrapper = shallowMount(Visor, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
