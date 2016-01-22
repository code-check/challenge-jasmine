var reporter = function () {
    this.suites = {};

    var failures, passes;

    this.suiteStarted = function (result) {
        failures = 0;
        passes = 0;
    };

    this.suiteDone = function (result) {
        this.suites[result.description] = {
            failures: failures,
            passes: passes,
            getTotal: function () {
                return this.passes + this.failures;
            }
        };
    };

    this.specDone = function (result) {
        if (result.status == "passed")
            passes++;
        else 
            failures++;
    };
};

module.exports = reporter;