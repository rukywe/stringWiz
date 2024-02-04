import { sanitizeForURL } from '../functions/sanitizeForURL';

describe('sanitizeForURL', () => {
  it('sanitizes a string for URL use', () => {
    expect(sanitizeForURL('Hello World!')).toBe('hello-world%21');
    expect(sanitizeForURL('  JavaScript & Web Dev @2021  ')).toBe(
      'javascript-%26-web-dev-%402021'
    );
  });
});
