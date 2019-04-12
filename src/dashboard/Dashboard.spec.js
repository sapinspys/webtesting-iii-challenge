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

  // INTEGRATION TESTING?
  // it("should display enabled 'lock gate' button after closing gate with props", () => {
  //   const { getByText } = render(<Dashboard />);
  //   fireEvent.click(getByText(/close gate/i));
  //   expect(getByText(/lock gate/i)).toBeDisabled();
  // });
});