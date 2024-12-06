import React from "react";
import { render } from "@testing-library/react";

export function renderComponent(Component: React.ElementType, props = {}) {
    return render(<Component {...props} />);
}