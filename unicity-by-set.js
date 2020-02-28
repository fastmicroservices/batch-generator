module.exports = function () {
  this._backend = new Set()
  this.exists = v => this._backend.has(v)
  this.add = v => this._backend.add(v)
  this.items = () => this._backend.keys()
  return this
}
