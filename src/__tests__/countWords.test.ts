import { countWords } from '../functions/countWords';

describe('countWords', () => {
  it('counts words in a string', () => {
    expect(countWords('hello world')).toBe(2);
  });

  it('handles multiple spaces between words', () => {
    expect(countWords('hello   world')).toBe(2);
  });

  it('handles strings with only spaces', () => {
    expect(countWords('   ')).toBe(0);
  });
});
