import React from "react";
import { render } from "@testing-library/react";
import Table from "./Table";

describe("<Table />", () => {
  it("renders a row", () => {
    const content = ["1", "2", "3"];
  });

  it("renders a table", () => {
    const header = ["Header"];
    const body = [
      { publishedAt: "20-20-20", title: "Hello body", url: "this is a link" },
    ];
    const size = 2;
    const { getByText } = render(
      <Table header={header} body={body} columnSize={size} />
    );
    expect(getByText(header[0])).toBeInTheDocument();
    expect(getByText(body[0].publishedAt)).toBeInTheDocument();
    expect(getByText(body[0].title)).toBeInTheDocument();
    expect(getByText(body[0].url)).toBeInTheDocument();
  });
});
