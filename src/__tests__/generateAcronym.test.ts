import { generateAcronym } from '../functions/generateAcronym';

describe('generateAcronym', () => {
  it('creates acronym from a string', () => {
    expect(generateAcronym('As Soon As Possible')).toBe('ASAP');
  });

  it('handles empty string', () => {
    expect(generateAcronym('')).toBe('');
  });
});
