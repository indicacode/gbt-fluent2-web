import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, expect, jest, it } from "@jest/globals";
import { Button } from "../done/button";

describe("Button component", () => {
    it("renders the button with default props", () => {
        const { getByRole } = render(<Button>Click me</Button>);
        const button = getByRole("button");
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent("Click me");
    });
});

