const generator = require('./generator')

const Set = require('./unicity-by-set')
const seed = require('./seed')
const hash = require('./code-hex-by-hash')
const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_='
const reencoder = require('./code-reencode')(ALPHABET, 10)

const count = 10000000
let set = new Set()
let collisions = 0
let g = generator(set, seed, hash, reencoder, () => {
    process.stderr.write('*')
    collisions++
})
const reportingStep = Math.ceil(count / 200)
const start = Date.now()
const reportProgress = (x) => {
    const current = Date.now()
    const diff = current - start
    const percentage = x / count
    const eta = new Date(start + diff * count / x)
    process.stderr.write(`ETA: ${eta.toLocaleDateString(undefined, {hour:'numeric', minute:'2-digit'})} ${percentage}%\n`)
}
for (let x = 0; x < count; x++) {
    console.log(g.next().value)
    if (0 === x % reportingStep) {
        reportProgress(x)
    }
}
reportProgress(count)
process.stderr.write(`\nCollisions: ${collisions}`)
