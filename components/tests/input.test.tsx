import { describe, expect, it } from "@jest/globals"
import { fireEvent, render, screen } from "@testing-library/react"
import { Input, InputLeftAddon, InputRightAddon } from "../done/Input"

describe("Input Component", () => {
  it("renders correctly with default props", () => {
    render(<Input labelText="Default Input" />)
    expect(screen.getByLabelText("Default Input")).toBeInTheDocument()
  })

  it("applies the correct classes based on `variant` and `size` props", () => {
    const { container } = render(
      <Input variant="filledDark" size="lg" labelText="Styled Input" />
    )
    const inputContainer = container.querySelector(".flex.w-full")
    expect(inputContainer).toHaveClass("bg-gray-800")
    expect(inputContainer).toHaveClass("max-h-10 min-h-10 text-lg leading-10")
  })

  it("renders helper text if provided", () => {
    render(
      <Input labelText="Input with Helper" helperText="This is helper text." />
    )
    expect(screen.getByText("This is helper text.")).toBeInTheDocument()
  })

  it("triggers `onFocus` and `onBlur` events", () => {
    const onFocus = jest.fn()
    const onBlur = jest.fn()
    render(
      <Input labelText="Focusable Input" onFocus={onFocus} onBlur={onBlur} />
    )
    const input = screen.getByLabelText("Focusable Input")
    fireEvent.focus(input)
    expect(onFocus).toHaveBeenCalled()
    fireEvent.blur(input)
    expect(onBlur).toHaveBeenCalled()
  })

  it("renders with LeftAddon and RightAddon correctly", () => {
    render(
      <Input labelText="Addon Input">
        <InputLeftAddon>
          <span>Left</span>
        </InputLeftAddon>
        <InputRightAddon>
          <span>Right</span>
        </InputRightAddon>
      </Input>
    )
    expect(screen.getByText("Left")).toBeInTheDocument()
    expect(screen.getByText("Right")).toBeInTheDocument()
  })

  it("renders focus and active state styles correctly", () => {
    const { container } = render(<Input labelText="Interactive Input" />)
    const input = screen.getByLabelText("Interactive Input")
    const decoration = container.querySelector(".relative.flex.w-full")

    // Focus event
    fireEvent.focus(input)
    expect(decoration).toHaveClass("max-h-[3px] max-w-full scale-y-[1.0]")

    // Blur event
    fireEvent.blur(input)
    expect(decoration).not.toHaveClass("max-h-[3px] max-w-full scale-y-[1.0]")

    // Active state (mousedown and mouseup)
    fireEvent.mouseDown(decoration!)
    expect(decoration).toHaveClass("bg-gray-500")
    fireEvent.mouseUp(decoration!)
    expect(decoration).not.toHaveClass("bg-gray-500")
  })

  it("throws a console error when multiple addons are passed", () => {
    const consoleSpy = jest.spyOn(console, "assert")
    render(
      <Input labelText="Invalid Addons">
        <InputLeftAddon>
          <span>Left 1</span>
        </InputLeftAddon>
        <InputLeftAddon>
          <span>Left 2</span>
        </InputLeftAddon>
      </Input>
    )
    expect(consoleSpy).toHaveBeenCalledWith(
      false,
      "Only one left addon is allowed"
    )
  })
})
