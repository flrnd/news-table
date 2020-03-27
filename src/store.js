import localforage from "localforage";

const TODAY = new Date().toDateString();

export const isStored = (storedHistory, item) =>
  storedHistory.find((history) => history.url === item.url);

export const save = async (item) => {
  try {
    const todayHistory = await localforage.getItem(TODAY);
    if (!isStored(todayHistory, item)) {
      todayHistory.push(item);
      localforage.setItem(TODAY, todayHistory);
    }
  } catch (error) {
    console.error(`[E] localforage: ${error}`);
  }
};
