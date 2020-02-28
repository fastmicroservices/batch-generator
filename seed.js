let _global_count = 0

module.exports = function () {
  return (++_global_count).toString() + Math.random()
}
