export function obfuscateEmail(email: string): string {
  const [username, domain] = email.split('@');
  const obfuscatedUsername =
    username.length > 2
      ? username[0] + '*'.repeat(username.length - 2) + username.slice(-1)
      : username;
  return `${obfuscatedUsername}@${domain}`;
}
