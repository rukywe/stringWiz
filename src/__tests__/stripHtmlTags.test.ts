import { stripHtmlTags } from '../functions/stripHtmlTags';

describe('stripHtmlTags', () => {
  it('should remove HTML tags from a string', () => {
    expect(stripHtmlTags('<p>Hello World</p>')).toBe('Hello World');
  });

  it('should handle a string without HTML tags', () => {
    expect(stripHtmlTags('Hello World')).toBe('Hello World');
  });

  it('should handle an empty string', () => {
    expect(stripHtmlTags('')).toBe('');
  });
});
