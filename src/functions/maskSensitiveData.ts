export function maskSensitiveData(
  str: string,
  visibleCount: number = 4
): string {
  return (
    str.slice(0, -visibleCount).replace(/./g, '*') + str.slice(-visibleCount)
  );
}
