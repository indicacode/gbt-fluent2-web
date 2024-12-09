import { render } from "@testing-library/react"
import React from "react"

export function renderComponent(Component: React.ElementType, props = {}) {
  return render(<Component {...props} />)
}
