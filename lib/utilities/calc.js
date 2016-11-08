/* eslint-disable object-property-newline */

import { trim } from 'lodash'

const Calc = {

  letterScores: {
    A: 1, B: 3, C: 3, D: 2,
    E: 1, F: 4, G: 2, H: 4,
    I: 1, J: 8, K: 5, L: 1,
    M: 3, N: 1, O: 1, P: 3,
    Q: 10, R: 1, S: 1, T: 1,
    U: 1, V: 4, W: 4, X: 8,
    Y: 4, Z: 10,
  },

  scoreWord(word, multiplier) {
    word = this.checkEmptyOrNull(word)
    if (word === 0) { return word }
    word = this.removeLeadingTrailingSpaces(word)
    const chars = this.splitWord(word)
    const score = this.calculateWordValue(chars)
    return this.scoreMultiplier(score, multiplier)
  },

  checkEmptyOrNull(word) {
    if (word === '' || word === null) {
      return 0
    }
    return word
  },

  splitWord(word) {
    return word.toLocaleUpperCase().split('')
  },

  removeLeadingTrailingSpaces(word) {
    return trim(word)
  },

  calculateWordValue(chars) {
    let score = 0
    return chars.map((letter) => {
      score = Calc.letterScores[letter]
      return score
    }).reduce((a, b) => {
      return a + b
    }, 0)
  },

  scoreMultiplier(score, multiplier) {
    if (multiplier) {
      return score * multiplier
    }
    return score
  },
}

module.exports = Calc
