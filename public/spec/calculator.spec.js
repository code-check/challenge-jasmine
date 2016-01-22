/// <reference path="../jasmine/jasmine.js">
/// <reference path="../jasmine/boot.js">
/// <reference path="../src/calculator.js">

describe("Add", function () {
    it("1 + 1 does equal 2", function () {
        //BEGIN_CHALLENGE
        expect(calculator.add(1, 1)).toBe(2);
        //END_CHALLENGE
    });

    it("1 + -1 does not equal 2", function () {
        //BEGIN_CHALLENGE
        expect(calculator.add(1, -1)).not.toBe(2);
        //END_CHALLENGE
    });
});

describe("Substract", function () {
    it("1 - 1 does equal 0", function () {
        //BEGIN_CHALLENGE
        expect(calculator.substract(1, 1)).toBe(0);
        //END_CHALLENGE
    });

    it("1 - -1 does not equal 0", function () {
        //BEGIN_CHALLENGE
        expect(calculator.substract(1, -1)).not.toBe(0);
        //END_CHALLENGE
    });
});

describe("Square", function () {
    //BEGIN_CHALLENGE
    beforeEach(function () {
        jasmine.addMatchers({
            toBeSquareOf: function () {
                return {
                    compare: function (actual, expected) {
                        return {
                            pass: expected * expected == actual
                        };
                    }
                };
            }
        });
    });
    //END_CHALLENGE

    it("4 squared is the square of 4", function () {
        expect(calculator.square(4)).toBeSquareOf(4);
    });

    it("-4 squared is the square of 4", function () {
        expect(calculator.square(-4)).toBeSquareOf(4);
    });

    it("-4 squared is the square of -4", function () {
        expect(calculator.square(-4)).toBeSquareOf(-4);
    });

    it("-4 squared is not -16", function () {
        expect(calculator.square(-4)).not.toBe(-16);
    });
});

describe("Collatz", function () {
    it("collatz(1e5) must equal 77031", function () {
        expect(calculator.collatz(1e5)).toBe(77031);
    });

    it("must be called", function () {
        //BEGIN_CHALLENGE
        spyOn(calculator, "isEven").and.callThrough();
        //END_CHALLENGE
        calculator.collatz(6);
        expect(calculator.isEven).toHaveBeenCalledTimes(12);
    });
});