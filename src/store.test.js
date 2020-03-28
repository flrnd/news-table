import localforage from "localforage";
import { TODAY, getItem, saveItem } from "./store";

jest.mock("localforage");

describe("store", () => {
  it("saveItem should store item", () => {
    const store = [];
    const item = { a: 1, b: 2 };
    const expected = { key: TODAY, value: { a: 1, b: 2 } };

    localforage.setItem.mockImplementationOnce((d, i) => {
      store.push({ key: d, value: i });
    });

    saveItem(TODAY, item);
    expect(store[0]).toEqual(expected);
  });

  it("getItem should get a item from the store", async () => {
    const store = [{ key: TODAY, value: { a: 1, b: 2 } }];
    const expected = { key: TODAY, value: { a: 1, b: 2 } };

    localforage.getItem.mockImplementationOnce(() => Promise.resolve(store[0]));
    await expect(getItem(TODAY)).resolves.toEqual(expected);
  });
});
