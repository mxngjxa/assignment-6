module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        "\\.(css)$": "<rootDir>/mocks/fileMock.js",
        "\\.(jpg|jpeg|png|webp)$": "<rootDir>/mocks/fileMock.js",
    }
}
