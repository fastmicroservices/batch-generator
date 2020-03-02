const generator = require('./generator')
const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_='
const rloop = require('./reportingLoop')
const count = 10000000
let collisions = 0
const reportCollision = () => {
    process.stderr.write('\n*\n')
    collisions++
}
const g = generator(ALPHABET, 10, reportCollision)
rloop(count, () => console.log(g.next().value), process.stderr, 200)
process.stderr.write(`\n\nCollisions: ${collisions}\n\n`)
