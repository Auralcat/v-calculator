import { expect } from 'chai'
import { mutations } from '@/store'

// Destructure assign mutations
const { addchar } = mutations
describe('mutations', () => {
  it("ADDCHAR should add that char to current value", function() {
    const state = { current: '0' }
    addchar(state, 'A')
    expect(state.current).to.equal('0A')
  });


})
