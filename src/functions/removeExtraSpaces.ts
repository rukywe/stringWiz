export function removeExtraSpaces(str: string): string {
  return str.replace(/\s+/g, ' ').trim();
}
