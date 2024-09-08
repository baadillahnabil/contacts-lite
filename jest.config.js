module.exports = {
  preset: 'react-native',
  modulePathIgnorePatterns: ['__mocks__'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-redux|@react-native|react-navigation|react-native-vector-icons)/)',
  ],
};
