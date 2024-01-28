import { toHeaderCase } from '../functions/toHeaderCase';

describe('toHeaderCase', () => {
  it('converts string to Header Case', () => {
    expect(toHeaderCase('content type')).toBe('Content-Type');
  });

  it('handles empty string', () => {
    expect(toHeaderCase('')).toBe('');
  });
});
