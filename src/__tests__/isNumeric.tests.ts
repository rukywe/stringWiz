import { isNumeric } from '../functions/isNumeric';

describe('isNumeric', () => {
  it('checks if a string is numeric', () => {
    expect(isNumeric('1234')).toBe(true);
    expect(isNumeric('1234a')).toBe(false);
    expect(isNumeric('-1234')).toBe(true);
    expect(isNumeric('1234.56')).toBe(true);
  });
});
