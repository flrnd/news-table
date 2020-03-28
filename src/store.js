import localforage from "localforage";

export const getItem = async (key) => {
  try {
    const stored = await localforage.getItem(key);
    if (stored === null) throw new Error("store is empty");

    return stored;
  } catch (error) {
    console.error(`[E] get ${error}`);
  }
};

export const saveItem = (key, item) => {
  try {
    localforage.setItem(key, item);
  } catch (error) {
    console.error(`[E] localforage: ${error}`);
  }
};
