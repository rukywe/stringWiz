import { removeExtraSpaces } from '../functions/removeExtraSpaces';

describe('removeExtraSpaces', () => {
  it('removes extra spaces from a string', () => {
    expect(removeExtraSpaces('  Hello   World  ')).toBe('Hello World');
  });
});
