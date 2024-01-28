export function toHeaderCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase()
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('-');
}
