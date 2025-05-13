class Assertions {
    static assertEqual(actual, expected, message = "Values should be equal") {
        if (actual !== expected) {
            throw new Error(`${message} | Expected: ${expected}, Got: ${actual}`);
        }
    }

    static assertNotEqual(actual, expected, message = "Values should not be equal") {
        if (actual === expected) {
            throw new Error(`${message} | Should not be: ${expected}`);
        }
    }

    static assertTruthy(value, message = "Value should be truthy") {
        if (!value) {
            throw new Error(`${message} | Got: ${value}`);
        }
    }

    static assertFalsy(value, message = "Value should be falsy") {
        if (value) {
            throw new Error(`${message} | Got: ${value}`);
        }
    }

    static assertType(value, expectedType, message = "Type mismatch") {
        if (typeof value !== expectedType) {
            throw new Error(`${message} | Expected: ${expectedType}, Got: ${typeof value}`);
        }
    }

    static assertThrows(fn, expectedError, message = "Expected function to throw an error") {
        try {
            fn();
            throw new Error(`${message} | No error was thrown.`);
        } catch (error) {
            if (expectedError && error.message !== expectedError) {
                throw new Error(`${message} | Expected error: ${expectedError}, Got: ${error.message}`);
            }
        }
    }
}

module.exports = Assertions;
//export default Assertions;
