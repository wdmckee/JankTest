class Reporter {
    static reportResults(testResults) {
        console.log("\n📢 Running Test Report...");
        const passed = testResults.filter(t => t.status === "pass").length;
        const failed = testResults.filter(t => t.status === "fail").length;

        testResults.forEach(({ name, status, time, error }) => {
            if (status === "pass") {
                console.log(`✅ PASS: ${name} (${time}ms)`);
            } else {
                console.log(`❌ FAIL: ${name}\n   Error: ${error}`);
            }
        });

        console.log(`\n📝 Summary: Passed: ${passed}, Failed: ${failed}`);
    }
}

module.exports = Reporter;
//export default Reporter;
