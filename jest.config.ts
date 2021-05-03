export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/**/*.spec.ts", "<rootDir>/**/*.spec.tsx"],
  testPathIgnorePatterns: ["/node_modules/"],
  coverageDirectory: "./coverage",
  coveragePathIgnorePatterns: ["node_modules"],
  reporters: ["default", "jest-junit"],
  globals: { "ts-jest": { diagnostics: false } },
  transform: {},
}
