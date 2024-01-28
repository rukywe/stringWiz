// Dot Case
export function toDotCase(str: string): string {
  return str.replace(/\s+/g, '.').toLowerCase();
}

// Constant Case
export function toConstantCase(str: string): string {
  return str.toUpperCase().replace(/\s+/g, '_');
}

// Snake Case
export function toSnakeCase(str: string): string {
  return str.replace(/\s+/g, '_').toLowerCase();
}

// Pascal Case
export function toPascalCase(str: string): string {
  return str
    .replace(
      /\w\S*/g,
      (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
    )
    .replace(/\s+/g, '');
}
