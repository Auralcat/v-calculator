import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Button from '@/components/Button.vue'
import store from '@/store'

describe('Button.vue', () => {
  describe(':props', () => {
    it(':label - should render a button with the passed-in label char', () => {
      const label = '3'
      const wrapper = shallowMount(Button, {
        propsData: { label }
      })
      expect(wrapper.text()).to.include(label)
    })
  })
  it("adds a number to the visor when clicked and if it has a number as label", () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        label: "7"
      }
    })
    const button = wrapper.find('button')
    button.trigger('click')
    expect(store.state.current).to.equal("7")
  })
})
