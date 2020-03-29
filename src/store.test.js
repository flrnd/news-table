import localforage from "localforage";
import { getItem, saveItem } from "./store";

jest.mock("localforage");

describe("store", () => {
  it("saveItem should store item", () => {
    const store = [];
    const key = Date.now();
    const item = "http://someurl.com";
    const expected = { key, value: { visited: key, url: item } };

    localforage.setItem.mockImplementationOnce((k, v) => {
      store.push({ key: k, value: v });
    });

    saveItem(item);
    expect(store[0]).toEqual(expected);
  });

  it("getItem should get a item from the store", async () => {
    const key = Date.now();
    const item = "http://someurl.com";
    const store = [{ key, value: { visited: key, url: item } }];
    const expected = { key, value: { visited: key, url: item } };

    localforage.getItem.mockImplementationOnce(() => Promise.resolve(store[0]));
    await expect(getItem(key)).resolves.toEqual(expected);
  });
});
