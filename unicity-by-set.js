module.exports = function () {
  this._backend = new Set()
  this.addIfNew = v => {
    if (this._backend.has(v)) return false
    this._backend.add(v)
    return true
  }
  this.items = () => this._backend.keys()
  return this
}
