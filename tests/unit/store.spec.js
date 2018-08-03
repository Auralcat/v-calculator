import { expect } from 'chai'
import { mutations } from '@/store'

describe('mutations', () => {
  it("addchar should add that char to current value", function() {
    const state = { current: '0' }
    mutations.addchar(state, 'A')
    expect(state.current).to.equal('0A')
  });

  it('backspace should remove the last char', function(){
    const state = { current: 'whatever' }
    mutations.backspace(state)
    expect(state.current).to.equal('whateve')
  });

  it('clear should set current value to ""', function(){
    const state = { current: 'whatever' }
    mutations.clear(state)
    expect(state.current).to.equal('')
  });

  it("addPi should change the current value to the value of PI", function() {
    const state = { current: 'whatever' }
    mutations.printPi(state)
    expect(state.current).to.equal(Math.PI.toString())
  });

  it("should be able to execute evaluations successively", function() {
    const state = { current: 'whatever' }
    mutations.printPi(state)
    mutations.squareroot(state)
    expect(state.current).to.equal(Math.sqrt(Math.PI))
  });

  it("current should be a string after operation execution", function() {
    const state = { current: '123' }
    mutations.square(state)
    expect(state.current).to.be.a('string')
  });
})

describe('math operations', function(){
  it("Operations follow standard arithmetic order", function() {
    const state = { current: '23*(12+7)/29' }
    mutations.equals(state)
    expect(state.current).to.equal(23*(12+7)/29)
  });

  it("equals should return the correct operation result", function() {
    const state = { current: '45+12' }
    mutations.equals(state)
    expect(state.current).to.equal(45+12)
  });

  it("square should return the correct result", function() {
    const state = { current: '45' }
    mutations.square(state)
    expect(state.current).to.equal(45 ** 2)
  });

  it("sin should return the correct result", function() {
    const state = { current: '45' }
    mutations.sin(state)
    expect(state.current).to.equal(Math.sin(45))
  });

  it("cos should return the correct result", function() {
    const state = { current: '45' }
    mutations.cos(state)
    expect(state.current).to.equal(Math.cos(45))
  });

  it("tan should return the correct result", function() {
    const state = { current: '45' }
    mutations.tan(state)
    expect(state.current).to.equal(Math.tan(45))
  });

  it("log10 should return the correct result", function() {
    const state = { current: '45' }
    mutations.log10(state)
    expect(state.current).to.equal(Math.log10(45))
  });

  it("squareroot should return the correct result", function() {
    const state = { current: '45' }
    mutations.squareroot(state)
    expect(state.current).to.equal(Math.sqrt(45))
  });

  it("should display the correct result when exponentiating numbers", function() {
    const state = { current: '5^3' }
    mutations.equals(state)
    expect(state.current).to.equal(Math.pow(5, 3))
  })

  it("ln should return the correct result", function() {
    const state = { current: '16' }
    mutations.ln(state)
    expect(state.current).to.equal(Math.log(16))
  });
})
