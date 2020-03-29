import localforage from "localforage";
import { filterByDates } from "./util/date";

export const getAllStored = async (startDate) => {
  const keys = await localforage.keys();
  const keysByDate = filterByDates(startDate, keys);

  console.log(keysByDate);

  const store = [];

  for (let key of keysByDate) {
    const item = await localforage.getItem(key);
    store.push({ key, value: item });
  }

  return store;
};

export const getItem = async (key) => {
  try {
    const stored = await localforage.getItem(key);
    if (stored === null) throw new Error("store is empty");

    return stored;
  } catch (error) {
    console.error(`[E] get ${error}`);
  }
};

export const saveItem = (item) => {
  try {
    const key = Date.now();
    localforage.setItem(key, item);
  } catch (error) {
    console.error(`[E] localforage: ${error}`);
  }
};
