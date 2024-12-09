import { expect, it } from "@jest/globals"
import "@testing-library/jest-dom"
import { fireEvent, render } from "@testing-library/react"
import { Button } from "../done/button"

describe("Button component", () => {
  it("renders the button with default props", () => {
    const { getByRole } = render(<Button>Click me</Button>)
    const button = getByRole("button")
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent("Click me")
  })

  it("applies the correct classes based on variant, size, and shape", () => {
    const { getByRole } = render(
      <Button variant="secondary" size="lg" shape="circular">
        Click me
      </Button>
    )
    const button = getByRole("button")

    // Check that variant, size, and shape classes are applied
    expect(button).toHaveClass("bg-gray-200", "h-10", "rounded-full")
  })

  it("renders with an icon when provided", () => {
    const { getByRole } = render(
      <Button icon={<span>🔥</span>}>Click me</Button>
    )
    const button = getByRole("button")

    expect(button).toContainHTML("<span>🔥</span>")
  })

  it("toggles selected state when toggle is enabled", () => {
    const { getByRole } = render(<Button toggle>Click me</Button>)
    const button = getByRole("button")

    expect(button).toHaveAttribute("data-selected", "false")

    // Simulate a click to toggle selected state
    fireEvent.click(button)
    expect(button).toHaveAttribute("data-selected", "true")

    // Click again to toggle back
    fireEvent.click(button)
    expect(button).toHaveAttribute("data-selected", "false")
  })

  it("does not toggle selected state when disabled", () => {
    const { getByRole } = render(
      <Button toggle disabled>
        Click me
      </Button>
    )
    const button = getByRole("button")

    expect(button).toHaveAttribute("data-selected", "false")
    fireEvent.click(button)
    expect(button).toHaveAttribute("data-selected", "false")
  })

  it("does not respond to clicks when disabled", () => {
    const handleClick = jest.fn()
    const { getByRole } = render(
      <Button disabled onClick={handleClick}>
        Click me
      </Button>
    )
    const button = getByRole("button")

    fireEvent.click(button)
    expect(handleClick).not.toHaveBeenCalled()
  })

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn()
    const { getByRole } = render(
      <Button onClick={handleClick}>Click me</Button>
    )
    const button = getByRole("button")

    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
