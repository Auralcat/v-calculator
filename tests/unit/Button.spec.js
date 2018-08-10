import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Button from '@/components/Button.vue'
import store from '@/store'

const factory = (values = {}) => {
  return shallowMount(Button, {
    propsData: { ...values }
  })
}

describe('Button.vue', () => {
  it('adds a number to the visor when clicked and if it has a number as label', () => {
    const wrapper = factory({ label: '7'})
    const button = wrapper.find('button')
    button.trigger('click')
    expect(store.state.current).to.equal('7')
  })

  it('should be able to execute function call', function () {

  })
})
