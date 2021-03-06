const Set = require('./unicity-by-set')
const Seed = require('./seed')
const Hash = require('./code-hex-by-hash')
const Reencoder = require('./code-reencode')

module.exports = function* (workingSetOrAlphabet, seedOrLength, reportCollision, hash, reencoder) {
  let {workingSet, seed} = {workingSetOrAlphabet, seedOrLength}
  hash = hash || Hash
  if (typeof workingSetOrAlphabet === 'string') {
    workingSet = new Set()
    seed = Seed
    reencoder = Reencoder(workingSetOrAlphabet, seedOrLength || 10)
  }
  else {
    workingSet = workingSet || new Set()
    seed = seed || Seed
    reencoder = reencoder || Reencoder('0123456789abcdefghijklmnopqrstuvwxyz', 10)
  }
  reportCollision = reportCollision || (() => {})
  for (;;) {
    const value = reencoder(hash(seed()))
    if (workingSet.addIfNew(value)) {
      yield value
    }
    else {
      reportCollision()
    }
  }
}
