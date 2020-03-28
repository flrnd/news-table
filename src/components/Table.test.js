import React from "react";
import { render } from "@testing-library/react";
import Table from "./Table";

describe("<Table />", () => {
  it("renders a table", () => {
    const body = [
      {
        source: "google",
        publishedAt: "20-20-20",
        title: "Hello body",
        url: "this is a link",
      },
    ];

    const { getByText } = render(<Table body={body} />);
    expect(getByText(body[0].publishedAt)).toBeInTheDocument();
    expect(getByText(body[0].title)).toBeInTheDocument();
    expect(getByText(body[0].url)).toBeInTheDocument();
  });
});
