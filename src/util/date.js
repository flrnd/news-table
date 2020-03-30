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

  return `${pad(parsedDate.getDate())}/${pad(
    parsedDate.getMonth() + 1
  )}/${parsedDate.getFullYear()} - ${parsedDate.toLocaleTimeString()}`;
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

const createFilter = (date) => {
  const current = new Date(date);
  const day = current.getDate();
  const month = current.getMonth();
  const year = current.getFullYear();
  const hour = current.getHours();
  const minutes = current.getMinutes();
  const seconds = current.getSeconds() - 1;
  const isPositive = (s) => (s > 0 ? s : 0);
  return new Date(
    `${year}-${pad(month)}-${pad(day)}T${pad(hour)}:${pad(minutes)}:${pad(
      isPositive(seconds)
    )}`
  );
};

export const filterByDates = (date, keys) => {
  console.log(createFilter(date));
  const isEqual = (item) => item >= createFilter(date);
  const parsedKeys = keys.map((k) => parseInt(k));
  return parsedKeys.filter(isEqual);
};
