// Test away!
import React from "react";
import Controls from "./Controls.js";
import { render, fireEvent, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe("<Controls />", () => {
  it("should render successfully", () => {
    render(<Controls />);
  });

  it("should have two toggle buttons", () => {
    render(<Controls />);
    const buttons = document.querySelectorAll(".toggle-btn");
    expect(buttons).toHaveLength(2);
  });
  
  it("should display disabled 'lock gate' button on default", () => {
    const { getByText } = render(<Controls />);
    expect(getByText(/lock gate/i)).toBeDisabled();
  });

  it("should display enabled 'close gate' button on default", () => {
    const { getByText } = render(<Controls />);
    expect(getByText(/close gate/i)).toBeEnabled();
  });

  it("should display enabled 'lock gate' button after closing gate", () => {
    const { getByText } = render(<Controls closed={true} />);
    // fireEvent.click(getByText(/close gate/i));
    expect(getByText(/lock gate/i)).toBeEnabled();
  });

  it("should display disabled 'open gate' button after locking gate", () => {
    const { getByText } = render(<Controls closed={true} locked={true} />);
    expect(getByText(/open gate/i)).toBeDisabled();
  });

  it("should display enabled 'unlock gate' button after locking gate", () => {
    const { getByText } = render(<Controls closed={true} locked={true} />);
    expect(getByText(/unlock gate/i)).toBeEnabled();
  });
})