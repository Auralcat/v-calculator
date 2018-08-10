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

  it("Shows big numbers separated by commas", function() {
    const state = { current: '123456' };
    const wrapper = shallowMount(Visor, {
      propsData: state
    })
    expect(wrapper.text()).to.equal('123,456');
  });

})
