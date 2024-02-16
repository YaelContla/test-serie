// require('@babel/register')()

module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@babel/register'],
    // setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    transform: {
        '\\.css$': '<rootDir>/node_modules/jest-css-modules-transform',
        '^.+\\.jsx?$': 'babel-jest',
      }
  };
  
  
