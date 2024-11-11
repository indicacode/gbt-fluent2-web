module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',  // Use 'jest-environment-jsdom' here
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
}