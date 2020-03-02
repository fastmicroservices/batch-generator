const generator = require('./generator')

const Set = require('./unicity-by-set')
const seed = require('./seed')
const hash = require('./code-hex-by-hash')
const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_='
const reencoder = require('./code-reencode')(ALPHABET, 10)
const Reporter = require('./reporter')

const count = 10000000
const set = new Set()
let collisions = 0
const g = generator(set, seed, hash, reencoder, () => {
    process.stderr.write('*')
    collisions++
})
const reportingStep = Math.ceil(count / 200)
const reportProgress = Reporter(count, process.stderr)
for (let x = 0; x < count; x++) {
    console.log(g.next().value)
    if (0 === x % reportingStep) {
        reportProgress(x)
    }
}
reportProgress(count)
process.stderr.write(`\n\nCollisions: ${collisions}\n\n`)
