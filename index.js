const generator = require('./generator')

const Set = require('./unicity-by-set')
const seed = require('./seed')
const hash = require('./code-hex-by-hash')
const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_='
const reencoder = require('./code-reencode')(ALPHABET, 10)

const count = 10000000
let set = new Set()
let g = generator(set, seed, hash, reencoder)
for (let x = 0; x < count; x++) {
    console.log(g.next().value)
}
