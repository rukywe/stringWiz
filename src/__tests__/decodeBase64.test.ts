import { decodeBase64 } from '../functions/decodeBase64';

describe('decodeBase64', () => {
  it('decodes a Base64 string', () => {
    expect(decodeBase64('SGVsbG8gV29ybGQ=')).toBe('Hello World');
  });
});
