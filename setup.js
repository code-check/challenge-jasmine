var jsdom = require("jsdom"),
    fs = require("fs"),
    reporter = require("./custom/reporter.js");

before(function (done) {
    jsdom.env({
        html: '',
        resourceLoader: function (resource, callback) {
            return callback(null,
                fs.readFileSync("./public/" + resource.url.pathname, "utf-8"));
        },
        features: {},
        done: function (errors, window) {
            boot(window, done);
        }
    });
});

function boot(window, done) {
    var loadJasmine = function load_jasmine() {
            var jasmine = window.document.createElement("script");
            jasmine.src = "jasmine/jasmine.js";
            jasmine.onload = function () {
                createJasmine(window);
                loadSource();
            };
            window.document.body.appendChild(jasmine);
        },
        loadSource = function load_source() {
            var source = window.document.createElement("script");
            source.src = "src/calculator.js";
            source.onload = function () {
                loadSpecs();
            };
            window.document.body.appendChild(source);
        },
        loadSpecs = function load_specs() {
            var specs = window.document.createElement("script");
            specs.src = "spec/calculator.spec.js";
            specs.onload = function () {
                execute();
            };
            window.document.body.appendChild(specs);
        },
        execute = function execute() {
            global.env.execute();
            done();
        };

    loadJasmine();
};

function createJasmine(window) {
    var jasmineRequire = window.jasmineRequire,
        jasmine = jasmineRequire.core(jasmineRequire);

    global.env = jasmine.getEnv();
    var jasmineInterface = jasmineRequire.interface(jasmine, global.env);

    global.reporter = new reporter();
    global.env.addReporter(global.reporter);
    extend(window, jasmineInterface);
}

function extend(destination, source) {
    for (var property in source) destination[property] = source[property];
    return destination;
}