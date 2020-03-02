const unicity = require('../../unicity-by-set')
const chai = require('chai')
const expect = chai.expect

describe("Integration", () => {
  describe("Unicity", () => {
    let o
    beforeEach(() => { o = new unicity() })
    it("Will handle 10M elements", () => {
      for (let x = 0; x < 10000000; x++) {
        o.addIfNew(`Test${x}`)
      }
      expect(o.items()).to.be.ok
    }).timeout(100000)
  })
})