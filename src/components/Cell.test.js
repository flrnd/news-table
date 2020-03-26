import React from "react";
import { render } from "@testing-library/react";
import Cell from "./Cell";

test("renders a cell with text hello", () => {
  const table = (
    <table>
      <tbody>
        <tr>
          <Cell>hello</Cell>
        </tr>
      </tbody>
    </table>
  );
  const { queryByText } = render(table);
  expect(queryByText("hello")).toBeTruthy();
});
