export function truncateMiddle(
  str: string,
  length: number,
  placeholder: string = '...'
): string {
  if (str.length <= length) return str;

  const charsToShow = length - placeholder.length;
  const frontChars = Math.ceil(charsToShow / 2);
  const backChars = Math.floor(charsToShow / 2);

  return (
    str.substr(0, frontChars) + placeholder + str.substr(str.length - backChars)
  );
}
