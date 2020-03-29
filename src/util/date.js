export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const pad = (n) => (n < 10 ? `0${n}` : n);

export const itemDate = (timestamp) => {
  const parsedDate = new Date(parseInt(timestamp));
  const date = parsedDate.getDate();
  const month = parsedDate.getMonth();
  const year = parsedDate.getFullYear();

  return `${pad(date)}/${pad(
    month + 1
  )}/${year} - ${parsedDate.toLocaleTimeString()}`;
};

export const getDateWithNames = (timestamp) => {
  const parsedDate = new Date(parseInt(timestamp));

  const day = daysOfWeek[parsedDate.getDay()];
  const month = monthNames[parsedDate.getMonth()];

  return `${day}, ${month} ${pad(
    parsedDate.getDate()
  )}, ${parsedDate.getFullYear()}`;
};

export const getItemTime = (timestamp) =>
  new Date(parseInt(timestamp)).toLocaleTimeString();
