import { cleanDuplicates } from "./store";
describe("CleanDuplicates", () => {
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
  const dup = history.concat(history);

  it("Should return an array without duplicates", () => {
    expect(cleanDuplicates(dup)).toEqual(history);
  });
});
