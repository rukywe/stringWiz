export function generateAcronym(str: string): string {
  return str.toUpperCase().match(/\b\w/g)?.join('') || '';
}
