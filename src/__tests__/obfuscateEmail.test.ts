import { obfuscateEmail } from '../functions/obfuscateEmail';

describe('obfuscateEmail', () => {
  it('obfuscates an email address', () => {
    expect(obfuscateEmail('test@example.com')).toBe('t**t@example.com');
  });

  it('handles short usernames', () => {
    expect(obfuscateEmail('a@b.com')).toBe('a@b.com');
  });
});
