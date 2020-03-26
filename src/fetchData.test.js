import axios from "axios";
import { fetchData } from "./fetchData";

jest.mock("axios");

describe("fetchData", () => {
  it("should fetch articles from API", async () => {
    const resp = {
      data: {
        status: "ok",
        totalResults: 2072,
        articles: [
          {
            publishedAt: "2020-03-24T15:07:00Z",
            title:
              "Kingdom of Frost Explores How Frozen Landscapes Shaped Humanity",
            url:
              "https://earther.gizmodo.com/kingdom-of-frost-explores-how-fro",
          },
          {
            publishedAt: "2020-02-28T02:30:00Z",
            title: "Oh Hell Yeah More Isometric Landscapes",
            url: "https://kotaku.com/oh-hell-yeah-more-isometric-landscapes",
          },
        ],
      },
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(resp));
    await expect(fetchData("query")).resolves.toEqual(resp);
  });
});
