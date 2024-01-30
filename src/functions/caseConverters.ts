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

// snake_case -> camelCase
export function snakeToCamelCase(str: string): string {
  if (!str.includes('_')) {
    // Return the string as-is if it doesn't contain any underscores
    return str;
  }
  return str.toLowerCase().replace(/(_\w)/g, (m) => m[1].toUpperCase());
}

// camelCase -> snake_case
export function camelToSnakeCase(str: string): string {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}
