const { formatCurrency } = require('../functions/formatCurrency');

describe('formatCurrency', () => {
  it('formats a number as currency with default parameters', () => {
    expect(formatCurrency(1234.56)).toBe('$1,234.56');
  });

  it('allows custom currency symbols', () => {
    expect(formatCurrency(1234.56, '€')).toBe('€1,234.56');
  });

  it('handles different decimal places', () => {
    expect(formatCurrency(1234, '$', 0)).toBe('$1,234');
  });

  it('correctly formats negative amounts', () => {
    expect(formatCurrency(-1234.56)).toBe('$-1,234.56');
  });
});
