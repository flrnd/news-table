import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("renderis a table", () => {
    const dom = render(<App />);
    const table = document.querySelector("#data");
    expect(table).toBeInTheDocument();
  });
});
