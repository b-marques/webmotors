module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '.*\\.test\\.tsx$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/utils/__mocks__/fileMock.ts',
    '\\.(css|less)$': 'identity-obj-proxy',
    'src/(.*)': '<rootDir>/src/$1',
  },
  moduleDirectories: ['node_modules', 'src'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/styles/**', '!<rootDir>/node_modules/'],
  clearMocks: true,
  resetMocks: true,
}
