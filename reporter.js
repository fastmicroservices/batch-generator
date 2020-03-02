module.exports = function(count, file) {
    const start = Date.now()
    return x => {
        const current = Date.now()
        const diff = current - start
        const percentage = x * 100 / count
        const eta = new Date(start + diff * count / x)
        const msg = `ETA: ${eta.toLocaleDateString(undefined, {hour:'numeric', minute:'2-digit'})} ${percentage}%   `
        file.write(msg)
        file.write('\b'.repeat(msg.length))
    }
}
