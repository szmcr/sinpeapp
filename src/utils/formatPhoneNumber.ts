export const formatPhoneNumber = (phoneNumber: string | undefined) => {
  if (!phoneNumber || undefined) return '';

  let cleanedNumber = phoneNumber.replace(/[^+\d]/g, '');

  if (!cleanedNumber.startsWith('+506')) {
    cleanedNumber = `+506${cleanedNumber}`;
  }

  cleanedNumber = cleanedNumber.slice(0, 12);

  const countryCode = cleanedNumber.slice(0, 4);
  const firstPart = cleanedNumber.slice(4, 8);
  const secondPart = cleanedNumber.slice(8);

  return `${countryCode} ${firstPart}-${secondPart}`;
};