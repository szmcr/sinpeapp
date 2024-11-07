export const formatDate = (date: Date): string => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isToday = date >= today;
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  if (isToday) {
    return `Hoy ${date.toLocaleTimeString("es-CR", timeOptions)}`;
  } else {
    const dateOptions: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    };
    return `${date.toLocaleDateString(
      "es-CR",
      dateOptions
    )} ${date.toLocaleTimeString("es-CR", timeOptions)}`;
  }
};
