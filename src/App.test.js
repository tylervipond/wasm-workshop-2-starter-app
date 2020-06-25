import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { useAsBind } from "use-as-bind";
jest.mock("use-as-bind");

test("renders App component", async () => {
  useAsBind.mockReturnValue({
    loaded: true,
    instance: {
      exports: {
        add(a, b) {
          return a + b;
        },
      },
    },
    error: null,
  });

  const { getByText } = render(<App />);
  const linkElement = getByText(/5/i);
  expect(linkElement).toBeInTheDocument();
});
