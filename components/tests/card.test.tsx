import React from 'react'
import { render, screen, fireEvent } from "@testing-library/react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    FloatingAction,
} from "../done/Card"
import {describe, expect, it} from "@jest/globals";
import '@testing-library/jest-dom';

describe("Card Component", () => {
    it("should render the Card with default props", () => {
        render(<Card>Default Card Content</Card>)
        const card = screen.getByText("Default Card Content")
        expect(card).toBeInTheDocument()
        expect(card).toHaveClass("relative flex h-fit w-full flex-col overflow-hidden rounded-md border shadow-md")
    })

    it("should apply the correct size classes", () => {
        render(<Card size="lg">Large Card Content</Card>)
        const card = screen.getByText("Large Card Content")
        expect(card.parentElement).toHaveClass(" relative flex h-fit w-full flex-col overflow-hidden rounded-md border shadow-md") // `lg` size class
    })

    it("should apply the correct variant classes", () => {
        render(<Card variant="outline">Outline Card</Card>)
        const card = screen.getByText("Outline Card")
        expect(card.parentElement).toHaveClass("border border-gray-300 shadow-none")
    })

    it("should toggle `checked` state when selectable", () => {
        render(<Card selectable>Selectable Card</Card>)
        const card = screen.getByText("Selectable Card").parentElement
        expect(card).not.toHaveClass("border-gray-400") // Not checked initially
        fireEvent.click(card!)
        expect(card).toHaveClass("border-gray-400") // Checked after click
    })

    it("should render an image if `cardPreview` is provided", () => {
        render(<Card cardPreview="/test.jpg" />)
        const img = screen.getByAltText("card preview")
        expect(img).toBeInTheDocument()
        expect(img).toHaveAttribute("src", "/test.jpg")
    })

    it("should call `onSelectionChange` when `checked` state changes", () => {
        const onSelectionChange = jest.fn()
        render(
            <Card selectable onSelectionChange={onSelectionChange}>
                <h2>  Selectable Card </h2>
            </Card>
        )
        const card = screen.getByText("Selectable Card").parentElement
        fireEvent.click(card!)
        expect(onSelectionChange).toHaveBeenCalledTimes(2)
    })

    it("should handle the `pressed` state when variant is outline", () => {
        render(<Card variant="outline">Pressed Card</Card>)
        const card = screen.getByText("Pressed Card").parentElement
        fireEvent.mouseDown(card!)
        expect(card).toHaveClass(" relative h-fit w-full overflow-hidden rounded-md border border-gray-300 shadow-none dark:border-zinc-200 dark:text-slate-50 dark:hover:bg-slate-950 flex flex-col\n")
        fireEvent.mouseUp(card!)
        expect(card).not.toHaveClass("border-gray-400")
    })

    it("should apply orientation classes", () => {
        render(<Card orientation="horizontal">Horizontal Card</Card>)
        const card = screen.getByText("Horizontal Card")
        expect(card.parentElement).toHaveClass("flex bg-transparent p-0")
    })
})

describe("CardHeader Component", () => {
    it("should render the CardHeader with children", () => {
        render(<CardHeader><h2 className={"flex w-fit items-center gap-3"}>Header Content</h2></CardHeader>)
        const header = screen.getByText("Header Content")
        expect(header).toBeInTheDocument()
        expect(header).toHaveClass("flex w-fit items-center gap-3")
    })

    it("should render an image if `image` prop is provided", () => {
        render(<CardHeader image="/header.jpg">Header Content</CardHeader>)
        const img = screen.getByAltText("card image")
        expect(img).toBeInTheDocument()
        expect(img).toHaveAttribute("src", "/header.jpg")
    })
})

describe("CardTitle Component", () => {
    it("should render the CardTitle", () => {
        render(<CardTitle>Title Content</CardTitle>)
        const title = screen.getByText("Title Content")
        expect(title).toBeInTheDocument()
        expect(title).toHaveClass("font-semibold text-stone-800")
    })
})

describe("CardDescription Component", () => {
    it("should render the CardDescription", () => {
        render(<CardDescription>Description Content</CardDescription>)
        const description = screen.getByText("Description Content")
        expect(description).toBeInTheDocument()
        expect(description).toHaveClass("text-sm text-[#616161]")
    })
})

describe("CardContent Component", () => {
    it("should render the CardContent", () => {
        render(<CardContent>Content</CardContent>)
        const content = screen.getByText("Content")
        expect(content).toBeInTheDocument()
    })

    it("should not render CardContent when orientation is horizontal", () => {
        render(<CardContent orientation="horizontal">Content</CardContent>)
        const content = screen.queryByText("Content")
        expect(content).not.toBeInTheDocument()
    })
})

describe("CardFooter Component", () => {
    it("should render the CardFooter", () => {
        render(<CardFooter>Footer Content</CardFooter>)
        const footer = screen.getByText("Footer Content")
        expect(footer).toBeInTheDocument()
    })

    it("should not render CardFooter when orientation is horizontal", () => {
        render(<CardFooter orientation="horizontal">Footer Content</CardFooter>)
        const footer = screen.queryByText("Footer Content")
        expect(footer).not.toBeInTheDocument()
    })
})

describe("FloatingAction Component", () => {
    it("should render children inside the FloatingAction", () => {
        render(<FloatingAction><h2>Floating Action</h2></FloatingAction>)
        const action = screen.getByText("Floating Action")
        expect(action).toBeInTheDocument()
        expect(action.parentElement).toHaveClass(
            "absolute right-3 top-2 max-h-fit max-w-fit cursor-pointer"
        )
    })
})