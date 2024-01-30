import { maskSensitiveData } from '../functions/maskSensitiveData';

describe('maskSensitiveData', () => {
  it('masks all but the last 4 characters', () => {
    expect(maskSensitiveData('1234567890123456')).toBe('************3456');
  });

  it('handles shorter strings', () => {
    expect(maskSensitiveData('1234', 2)).toBe('**34');
  });

  it('handles empty strings', () => {
    expect(maskSensitiveData('')).toBe('');
  });

  it('handles strings shorter than visibleCount', () => {
    expect(maskSensitiveData('123', 4)).toBe('123');
  });
});
