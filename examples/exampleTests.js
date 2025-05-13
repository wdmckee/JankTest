const TestFramework = require("../src/framework.js");
const Assertions = require("../src/assertions.js");
//import TestFramework from "./src/framework.js";
//import Assertions from "./src/assertions.js";

const test = new TestFramework();

test.addTest("Check if 5 equals 5", () => {
    Assertions.assertEqual(5, 5, "Numbers should be equal");
});

test.addTest("Check if true is truthy", () => {
    Assertions.assertTruthy(true, "Should be truthy");
});

test.addTest("Function should throw an error", () => {
    Assertions.assertThrows(() => {
        throw new Error("Test Error");
    }, "Test Error", "Function should throw");
});

// Run tests
test.runTests();
