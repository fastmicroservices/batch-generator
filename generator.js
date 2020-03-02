module.exports = function* (workingSet, seed, hash, reencoder, reportCollision) {
  reportCollision = reportCollision || (() => {})
  for (;;) {
    const value = reencoder(hash(seed()))
    if (!workingSet.exists(value)) {
      workingSet.add(value)
      yield value
    }
    else {
      reportCollision()
    }
  }
}
