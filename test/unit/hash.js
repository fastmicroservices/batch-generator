const hexByHash = require('../../code-hex-by-hash')
const chai = require('chai')
const expect = chai.expect

describe("Hex by hash", () => {
  it('will provide the same hash for the same message', () => {
    const t1 = hexByHash('12345')
    const t2 = hexByHash('12345')
    expect(t1).to.equal(t2)
  })
  it('will provide a different hash for different messages', () => {
    const t1 = hexByHash('12345')
    const t2 = hexByHash('12346')
    expect(t1).to.not.equal(t2)
  })
})
