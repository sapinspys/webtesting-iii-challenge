// Test away!
import React from 'react';
import Display from './Display.js';
import { render, fireEvent, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe("<Display />", () => {
  it("renders successfully", () => {
    render(<Display />);
  });
})
