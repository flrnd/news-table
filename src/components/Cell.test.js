import React from "react";
import { render, queryByText } from "@testing-library/react";
import Cell from "./Cell";

test("renders a cell with text hello", () => {
  const { queryByText } = render(<Cell>hello</Cell>);
  expect(queryByText("hello")).toBeTruthy();
});
