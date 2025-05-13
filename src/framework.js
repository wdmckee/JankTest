
const Reporter = require("./reporter.js");
const Assertions = require("./assertions.js");
// import Reporter from "./reporter.js";

class TestFramework {
    constructor() {
        this.tests = [];
    }

    addTest(name, testFunction) {
        this.tests.push({ name, testFunction });
    }

    runTests() {
        const results = this.tests.map(({ name, testFunction }) => {
            const start = Date.now();
            try {
                testFunction();
                return { name, status: "pass", time: Date.now() - start };
            } catch (error) {
                return { name, status: "fail", error: error.message, time: Date.now() - start };
            }
        });

        Reporter.reportResults(results); // Pass results to the reporter
    }
}

module.exports = { TestFramework, Assertions };
//export default TestFramework;

