const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

export function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number);
}
