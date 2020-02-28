module.exports = function* (workingSet, seed, hash, reencoder) {
  for (;;) {
    const value = reencoder(hash(seed()).substring(0, hexDigits))
    if (!workingSet.exists(value)) {
      workingSet.add(value)
      yield value
    }
  }
}
