module.exports = { 
    clearMocks: true, 
    collectCoverage: true, 
    collectCoverageFrom: ['src/**/*.js?(x)',], 
    moduleNameMapper: { "\\.(css|less)$": "<rootDir>/src/__mocks__/styleMock.js" }, 
    //setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], 
    testMatch: ['<rootDir>/src/**/?(*.)+(test).js?(x)', '<rootDir>/src/**/?(*.)+(spec).js?(x)'], 
};