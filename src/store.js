import localforage from "localforage";

export const TODAY = new Date().toDateString();

export const initDB = () => {
  localforage.setItem(TODAY, [" "]);
};

export const getStore = async (day) => {
  try {
    const stored = await localforage.getItem(day);
    if (stored === null) initDB();

    return stored;
  } catch (error) {
    console.error(`[E] get ${error}`);
  }
};

export const saveStore = async (currentHistory) => {
  try {
    const storedHistory = await getStore(TODAY);
    const todayHistory = storedHistory.concat(currentHistory);
    // clear dups to avoid storing the same results.
    const uniqueHistory = todayHistory.filter(
      (item, index) =>
        todayHistory.findIndex((element) => element.url === item.url) === index
    );
    localforage.setItem(TODAY, uniqueHistory);
  } catch (error) {
    console.error(`[E] localforage: ${error}`);
  }
};
