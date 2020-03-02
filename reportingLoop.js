const Reporter = require('./reporter')

module.exports = function (count, action, reportingTarget, reportingTimes = 100) {
    const reportingStep = Math.ceil(count / reportingTimes)
    const reportProgress = Reporter(count, reportingTarget)
    for (let x = 1; x <= count; x++) {
        action()
        if (0 === x % reportingStep) {
            reportProgress(x)
        }
    }
    reportProgress(count)    
}
