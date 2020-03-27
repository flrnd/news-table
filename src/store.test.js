import { save, isStored } from "./store";
describe("Store", () => {
  const history = [
    {
      id: 1,
      url: "a",
    },
    {
      id: 2,
      url: "b",
    },
  ];
  const item = {
    id: 1,
    url: "a",
  };
  it("isStored should return item", () => {
    expect(isStored(history, item)).toStrictEqual(item);
  });
  it("isStored should return undefined", () => {
    expect(isStored(history, { id: 3, obj: "c" })).toStrictEqual(undefined);
  });
});
