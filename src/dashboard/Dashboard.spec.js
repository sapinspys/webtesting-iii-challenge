// Test away!
import React from "react";
import Dashboard from "./Dashboard.js";
import { render, fireEvent, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe("<Dashboard />", () => {
  it("should render successfully", () => {
    render(<Dashboard />);
  });
});