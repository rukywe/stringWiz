export function formatCurrency(
  amount: number,
  currencySymbol: string = '$',
  decimalPlaces: number = 2
): string {
  const formattedAmount = amount.toFixed(decimalPlaces);
  const regex =
    decimalPlaces > 0 ? /\d(?=(\d{3})+\.)/g : /\d(?=(\d{3})+(?!\d))/g;
  return `${currencySymbol}${formattedAmount.replace(regex, '$&,')}`;
}
