import { isPalindrome } from '../functions/isPalindrome';

describe('isPalindrome', () => {
  it('returns true for a palindrome', () => {
    expect(isPalindrome('racecar')).toBeTruthy();
  });

  it('returns false for a non-palindrome', () => {
    expect(isPalindrome('hello')).toBeFalsy();
  });
});
