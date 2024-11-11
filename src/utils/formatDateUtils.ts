export const formatDate = (date: Date): string => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isToday = date >= today;
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  let time = date.toLocaleTimeString("es-CR", timeOptions);


  const newTime = time.replace("", "").replace("a. m.", "a.m").replace("p. m.", "p. m.");
  if (isToday) {
    return `Hoy ${newTime}`;
  } else {
    const dateOptions: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    };
    const formattedDate = date.toLocaleDateString("es-CR", dateOptions);
    return `${formattedDate} ${newTime}`;
  }
};

export const formatSinpeDate = (dateString: string): string => {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.toLocaleString("es-ES", { month: "long" });
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const period = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12;

  return `${day} de ${capitalize(month)} ${year}, ${hours}:${minutes} ${period}`;
};

const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);
