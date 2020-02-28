module.exports = function* (workingSet, seed, hash, reencoder) {
  for (;;) {
    const value = reencoder(hash(seed()))
    if (!workingSet.exists(value)) {
      workingSet.add(value)
      yield value
    }
  }
}
