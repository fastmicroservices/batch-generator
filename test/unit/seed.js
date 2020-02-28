const seed = require('../../seed')
const chai = require('chai')
const expect = chai.expect

describe("Seed", () => {
  it("should return different values in sequence", () => {
    expect(seed()).to.not.equal(seed())
    expect(seed()).to.not.equal(seed())
    expect(seed()).to.not.equal(seed())
    expect(seed()).to.not.equal(seed())
  })
})
