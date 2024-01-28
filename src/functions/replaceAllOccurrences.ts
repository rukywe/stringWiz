export function replaceAllOccurrences(
  str: string,
  search: string,
  replacement: string
): string {
  return str.split(search).join(replacement);
}
