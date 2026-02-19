export function formatLongDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function formatShortDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function formatNumericDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB"); 
  // outputs: 25/11/2025
}

export function formatISO(dateString: string) {
  return new Date(dateString).toISOString().split("T")[0]; 
  // 2025-11-25
}

export const formatDateTimeForSQL = (date: Date) => {
  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    date.getFullYear() +
    "-" +
    pad(date.getMonth() + 1) +
    "-" +
    pad(date.getDate()) +
    " " +
    pad(date.getHours()) +
    ":" +
    pad(date.getMinutes()) +
    ":" +
    pad(date.getSeconds())
  );
};
