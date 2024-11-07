export const formatCurrency = (amount: number): string => {
  const formattedAmount = amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `₡ ${formattedAmount}`;
};

export const formatToNumeric = (input: string) => input.replace(/[^\d]/g, "");

export const addThousandSeparators = (numberString: string) =>
  numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");