var assert = require("chai").assert,
    specs = require("fs").readFileSync("./public/spec/calculator.spec.js", "utf8");

describe("Step 1", function () {
    it("Add has enough specs", function () {
        assert.property(global.reporter.suites, "Add");
        assert.equal(global.reporter.suites["Add"].getTotal(), 2, "Expected 2 specs");
    });

    it("Add has no failures", function () {
        assert.property(global.reporter.suites, "Add");
        assert.equal(global.reporter.suites["Add"].failures, 0, "The 'Add' spec failed");
    });

    it("Jasmine spec includes 'calculator.add'", function () {
        assert.notEqual(specs.indexOf("calculator.add"), -1, "calculator.spec did not include 'calculator.add'");
    });
});

describe("Step 2", function () {
    it("Substract has enough specs", function () {
        assert.property(global.reporter.suites, "Substract");
        assert.equal(global.reporter.suites["Substract"].getTotal(), 2, "Expected 2 specs");
    });

    it("Substract has no failures", function () {
        assert.property(global.reporter.suites, "Substract");
        assert.equal(global.reporter.suites["Substract"].failures, 0, "The 'Substract' spec failed");
    });

    it("Jasmine spec includes 'calculator.substract'", function () {
        assert.notEqual(specs.indexOf("calculator.substract"), -1, "calculator.spec did not include 'calculator.substract'");
    });
});

describe("Step 3", function () {
    it("Square has enough specs", function () {
        assert.property(global.reporter.suites, "Square");
        assert.equal(global.reporter.suites["Square"].getTotal(), 4, "Expected 4 specs");
    });

    it("Square has no failures", function () {
        assert.property(global.reporter.suites, "Square");
        assert.equal(global.reporter.suites["Square"].failures, 0, "The 'Square' spec failed");
    });

    it("Jasmine spec includes 'compare:'", function () {
        assert.notEqual(specs.indexOf("compare:"), -1, "calculator.spec did not include 'compare:'");
    });
});

describe("Step 4", function () {
    it("Collatz has enough specs", function () {
        assert.property(global.reporter.suites, "Collatz");
        assert.equal(global.reporter.suites["Collatz"].getTotal(), 2, "Expected 2 specs");
    });

    it("Collatz has no failures", function () {
        assert.property(global.reporter.suites, "Collatz");
        assert.equal(global.reporter.suites["Collatz"].failures, 0, "The 'Collatz' spec failed");
    });

    it("Jasmine spec includes 'spyOn'", function () {
        assert.notEqual(specs.indexOf("spyOn"), -1, "calculator.spec did not include 'spyOn'");
    });
});