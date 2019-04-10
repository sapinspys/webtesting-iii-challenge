// Test away!
import React from "react";
import Display from "./Display.js";
import { render, fireEvent, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe("<Display />", () => {
  it("renders successfully", () => {
    render(<Display />);
  });

  it("should display unlocked on default", () => {
    const { getByText } = render(<Display />);

    getByText(/unlocked/i);
  });

  it("should display open on default", () => {
    const { getByText } = render(<Display />);

    getByText(/open/i);
  });

  it("should display closed if closed prop is true", () => {
    const { getByText } = render(<Display closed={true} />);

    getByText(/closed/i);
  });

  it("should display open if closed prop is false", () => {
    const { getByText } = render(<Display closed={false} />);

    getByText(/open/i);
  });
});
