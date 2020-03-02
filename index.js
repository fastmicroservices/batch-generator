const generator = require('./generator')
const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_='
const Reporter = require('./reporter')

const count = 10000000
let collisions = 0
const reportCollision = () => {
    process.stderr.write('*')
    collisions++
}
const g = generator(ALPHABET, 10, reportCollision)
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
