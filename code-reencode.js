const bigInt = require("big-integer")

module.exports = function (newAlphabet, length) {
  return function(hexValue) {
    const original = new bigInt(hexValue, 16)
    return original.toString(newAlphabet.length, newAlphabet).substring(0, length)
  }
}
