const reencode = require('../../code-reencode')
const chai = require('chai')
const expect = chai.expect

describe("Re-encoding", () => {
  const sampleHex = '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5'
  it('is idempotent', () => {
    const result = reencode('0123456789abcdef', sampleHex.length)(sampleHex)
    expect(result).to.equal(sampleHex)
  })
  it('will use alphabet and implied base with normal binary', () => {
    const result = reencode('01', 4)("A")
    expect(result).to.equal('1010')
  })
  it('will use alphabet and implied base with reveresed binary', () => {
    const result = reencode('10', 4)("A")
    expect(result).to.equal('0101')
  })
})
