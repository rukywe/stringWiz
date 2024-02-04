export function extractEmails(str: string): string[] {
  return str.match(/[\w.-]+@[\w.-]+\.\w+/g) || [];
}
