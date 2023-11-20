module.exports = {
  clearMocks: true,

  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node",
  ],

  testEnvironment: "jest-environment-node",

  testMatch: [
    "<rootDir>/**/*.test.(js|jsx|ts|tsx)",
  ],

  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
