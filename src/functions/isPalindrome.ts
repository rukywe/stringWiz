export function isPalindrome(str: string): boolean {
  const cleanStr = str.replace(/[\W_]/g, '').toLowerCase();
  return cleanStr === cleanStr.split('').reverse().join('');
}
