let _global_count = 0
const SALT = ' bottles on ' + process.env['HOSTNAME']

module.exports = function () {
  return (++_global_count).toString() + Math.random() + SALT
}
