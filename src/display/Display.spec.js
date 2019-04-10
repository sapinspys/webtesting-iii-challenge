// Test away!
import React from "react";
import Display from "./Display.js";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe("<Display />", () => {
  it("should render successfully", () => {
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

  it("should display locked if locked prop is true", () => {
    const { getByText } = render(<Display locked={true} />);
    getByText(/locked/i);
  });

  it("should display unlocked if locked prop is false", () => {
    const { getByText } = render(<Display locked={false} />);
    getByText(/unlocked/i);
  });

  it("should have red-led class if closed prop is true", () => {
    const { getByText } = render(<Display closed={true} />);
    expect(getByText(/closed/i)).toHaveClass('red-led');
  });

  it("should have red-led class if locked prop is true", () => {
    const { getByText } = render(<Display locked={true} />);
    expect(getByText(/locked/i)).toHaveClass('red-led');
  });

  it("should have green-led class if closed prop is false", () => {
    const { getByText } = render(<Display closed={false} />);
    expect(getByText(/open/i)).toHaveClass('green-led');
  });

  it("should have green-led class if locked prop is false", () => {
    const { getByText } = render(<Display locked={false} />);
    expect(getByText(/unlocked/i)).toHaveClass('green-led');
  });
});
