export function sanitizeForURL(str: string): string {
  return str
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, (char) => `%${char.charCodeAt(0).toString(16)}`);
}
