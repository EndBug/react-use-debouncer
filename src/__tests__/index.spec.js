/* eslint-disable no-undef */
/* eslint-disable global-require */

describe('Test exports', () => {
  test('useDebouncedCallback is exported', () => {
    const { useDebouncedCallback } = require('../index');
    expect(useDebouncedCallback).toBeDefined();
  });
  test('useDebouncedState is exported', () => {
    const { useDebouncedState } = require('../index');
    expect(useDebouncedState).toBeDefined();
  });
});
