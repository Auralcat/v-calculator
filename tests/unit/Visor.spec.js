import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Visor from '@/components/Visor.vue'
import { mutations } from '@/store'

const factory = (values = {}) => {
  return shallowMount(Visor, {
    data: { ...values }
  })
}

describe('Visor.vue', () => {
  it('shows the number 0 when mounted', () => {
    const wrapper = factory()
    expect(wrapper.find('.visor').text()).to.equal('0')
  })

  it("Shows big numbers separated by commas", function() {
    const wrapper = factory()
    expect(wrapper.find('.visor').text()).to.equal('123,456')
  });

})
