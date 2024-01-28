import { reverseString } from '../index';

describe('reverseString', () => {
  it('should reverse a string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  it('should handle empty string', () => {
    expect(reverseString('')).toBe('');
  });
});
