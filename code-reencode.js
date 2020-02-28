const bigInt = require("big-integer")

module.exports = function (hexValue, newAlphabet) {
  const original = new bigInt(hexValue, 16)
  return original.toString(newAlphabet.length, newAlphabet)
}
