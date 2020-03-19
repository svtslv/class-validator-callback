import * as index from '../src/index';

describe('Index', () => {
  test('should return 1 exports', () => {
    expect(Object.keys(index)).toHaveLength(1);
  });
});