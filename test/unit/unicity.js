const unicity = require('../../unicity-by-set')
const chai = require('chai')
const chaiIterator = require('chai-iterator')
const expect = chai.expect

chai.use(chaiIterator)
describe("Unicity", () => {
  let o
  beforeEach(() => {o = new unicity()})
  it("Will find existing keys as existing", () => {
    o.add(1)
    o.add(2)
    expect(o.exists(2)).to.be.ok
    expect(o.exists(1)).to.be.ok
  })
  it("Will not find inexisting keys as existing", () => {
    o.add(1)
    o.add(2)
    expect(o.exists(3)).to.not.be.ok
    expect(o.exists(4)).to.not.be.ok
  })
  it("Will give all items passed in", () => {
    o.add(1)
    o.add(2)
    o.add(3)
    const items = o.items()
    expect(items).to.iterate.from([1,2,3])
  })
})