import { extractEmails } from '../functions/extractEmails';

describe('extractEmails', () => {
  it('extracts email addresses from a string', () => {
    expect(extractEmails('Contact us at test@example.com')).toEqual([
      'test@example.com'
    ]);
  });
});
