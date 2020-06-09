module.exports = {
    bail: true,
    rootDir: '.',
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.json',
        },
    },
    moduleFileExtensions: ['ts', 'js', 'tsx', 'json'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    testMatch: ['<rootDir>/tests/**/*.test.(ts|js)'],
    testEnvironment: 'node',
};
