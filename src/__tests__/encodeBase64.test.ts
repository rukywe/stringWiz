import { encodeBase64 } from '../functions/encodeBase64';

describe('encodeBase64', () => {
  it('encodes a string to Base64', () => {
    expect(encodeBase64('Hello World')).toBe('SGVsbG8gV29ybGQ=');
  });
});
