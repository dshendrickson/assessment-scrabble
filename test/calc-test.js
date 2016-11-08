import { assert } from 'chai'
import Calc from '../lib/utilities/calc'

it('should be a function', () => {
  assert.isFunction(Calc.scoreWord)
})

it('should return a value of "hello"', () => {
  const word = Calc.removeLeadingTrailingSpaces('  hello ')
  assert.equal(word, 'hello')
})

it('should return a value of 0 or the word', () => {
  let word = Calc.checkEmptyOrNull('')
  assert.equal(word, 0)
  word = Calc.checkEmptyOrNull(null)
  assert.equal(word, 0)
  word = Calc.checkEmptyOrNull('hello')
  assert.equal(word, 'hello')
})

it('should return an value of 16 or 8', () => {
  const score = 8
  const multiplier = 2
  let result = Calc.scoreMultiplier(score, multiplier)
  assert.equal(result, 16)
  result = Calc.scoreMultiplier(score)
  assert.equal(result, 8)
})

it('should return an array of letters', () => {
  const chars = Calc.splitWord('hello')
  assert.deepEqual(chars, ['H', 'E', 'L', 'L', 'O'])
})

it('should return a value of 8', () => {
  const chars = Calc.splitWord('hello')
  const wordValue = Calc.calculateWordValue(chars)
  assert.equal(wordValue, 8)
})

it('should return a values of 8, 16, and 0', () => {
  let score = Calc.scoreWord('hello')
  assert.equal(score, 8)
  score = Calc.scoreWord('hello', 2)
  assert.equal(score, 16)
  score = Calc.scoreWord('')
  assert.equal(score, 0)
})
