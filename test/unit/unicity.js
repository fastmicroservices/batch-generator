const unicity = require('../../unicity-by-set')
const chai = require('chai')
const chaiIterator = require('chai-iterator')
const expect = chai.expect

chai.use(chaiIterator)
describe("Unicity", () => {
  let o
  beforeEach(() => {o = new unicity()})
  it("Will find existing keys as existing", () => {
    expect(o.addIfNew(1)).to.be.ok
    expect(o.addIfNew(2)).to.be.ok
  })
  it("Will find existing keys and not allow repeat", () => {
    expect(o.addIfNew(1)).to.be.ok
    expect(o.addIfNew(1)).to.be.not.ok
  })
  it("Will give all items passed in", () => {
    o.addIfNew(1)
    o.addIfNew(2)
    o.addIfNew(3)
    const items = o.items()
    expect(items).to.iterate.from([1,2,3])
  })
})