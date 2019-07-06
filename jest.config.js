module.exports = {
  verbose: true,
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/components/jest/__mocks__/fileMock.js",
    "\\.(css|less|scss)$": "identity-obj-proxy"
  },
  testMatch: ["**/__tests__/**/*.(js)"],
  moduleDirectories: ["node_modules"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ["<rootDir>/components/jest/setup.js"]
};
