import { truncateMiddle } from '../functions/truncateMiddle';

describe('truncateMiddle', () => {
  it('truncates a string in the middle', () => {
    expect(truncateMiddle('HelloWorld', 7)).toBe('He...ld');
  });

  it('returns the original string if it is shorter than the specified length', () => {
    expect(truncateMiddle('Hello', 10)).toBe('Hello');
  });
});
