const generator = require('./generator')

const Set = require('./unicity-by-set')
const seed = require('./seed')
const hash = require('./code-hex-by-hash')
const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_='
const reencoder = require('./code-reencode')(ALPHABET, 9)

const count = process.argv[2] || 10000000
const perPass = Math.ceil(count / ALPHABET.length)
for (let c in ALPHABET) {
    let set = new Set()
    let g = generator(set, seed, hash, reencoder)
    for (let x = 0; x < perPass; x++) {
        console.log(ALPHABET[c] + g.next().value)
    }
}
