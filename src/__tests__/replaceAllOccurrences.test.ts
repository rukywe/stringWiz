import { replaceAllOccurrences } from '../functions/replaceAllOccurrences';

describe('replaceAllOccurrences', () => {
  it('replaces all occurrences of a substring', () => {
    expect(replaceAllOccurrences('hello world', 'l', 'x')).toBe('hexxo worxd');
  });

  it('returns original string if substring not found', () => {
    expect(replaceAllOccurrences('hello', 'z', 'x')).toBe('hello');
  });
});
