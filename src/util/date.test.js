import {
  pad,
  itemDate,
  getDateWithNames,
  getItemTime,
  filterByDates,
} from "./date";

describe("Date", () => {
  const DATE = new Date("2020-03-29T11:57:17").getTime();

  it("pad a number if < 10", () => {
    expect(pad(5)).toBe("05");
  });

  it("returns a date", () => {
    const expectedDate = "29/03/2020 - 11:57:17 AM";
    expect(itemDate(DATE)).toBe(expectedDate);
  });

  it("returns a date with day and month names", () => {
    const expectedDate = "Sunday, March 29, 2020";
    expect(getDateWithNames(DATE)).toBe(expectedDate);
  });

  it("returns the locale time string", () => {
    const expectedTime = "11:57:17 AM";
    expect(getItemTime(DATE)).toBe(expectedTime);
  });

  it("returns an array filtered by a date", () => {
    const list = [
      new Date("2020-03-29T11:58:19").getTime(),
      new Date("2020-03-28T22:17:02").getTime(),
      new Date("2020-03-29T06:17:02").getTime(),
    ];
    expect(filterByDates(DATE, list).length).toBe(1);
  });
});
