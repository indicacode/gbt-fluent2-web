import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
    Drawer,
    DrawerTrigger,
    DrawerContent,
    DrawerOverlay,
    DrawerHeader,
    DrawerFooter,
    DrawerTitle,
    DrawerDescription,
    DrawerClose,
} from "../done/drawer";
import {describe, expect, it} from "@jest/globals";

describe("Drawer Component", () => {
    it("renders the drawer with default props", () => {
        render(
            <Drawer defaultOpen={false}>
                <DrawerTitle>Drawer Title</DrawerTitle>
                <DrawerContent>

                </DrawerContent>
            </Drawer>
        );

        const title = screen.getByText("Drawer Title");

        expect(title).toBeInTheDocument();
        expect(title).toHaveClass("text-lg font-semibold leading-none tracking-tight");
    });

    it("renders the drawer in open state when `defaultOpen` is true", () => {
        render(
            <Drawer defaultOpen={true}>
                <DrawerContent>
                    <DrawerTitle>Drawer Title</DrawerTitle>
                </DrawerContent>
            </Drawer>
        );

        const title = screen.getByText("Drawer Title");
        expect(title).toBeVisible();
    });

    it("allows opening the drawer with the `defaultOpen` prop", () => {
        const { rerender } = render(
            <Drawer data-testid={"draweropenprops"} defaultOpen={true}>
                <DrawerContent>
                    <DrawerTitle>Drawer Title Open Prop</DrawerTitle>
                </DrawerContent>
            </Drawer>
        );

        expect(screen.getByText("Drawer Title Open Prop")).toBeInTheDocument();

        rerender(
            <Drawer open={true}>
                <DrawerContent>
                    <DrawerTitle>Drawer Title</DrawerTitle>
                </DrawerContent>
            </Drawer>
        );

        expect(screen.getByText("Drawer Title")).toBeVisible();
    });

    it("renders the overlay and applies styles", () => {
        render(
            <Drawer defaultOpen={true}>
                <DrawerContent>
                    <DrawerOverlay data-testid="drawer-overlay" />
                </DrawerContent>
            </Drawer>
        );

        const overlay = screen.getByTestId("drawer-overlay");
        expect(overlay).toBeInTheDocument();
        expect(overlay).toHaveClass("fixed inset-0 z-50 bg-black/80");
    });

    it("applies size and position styles based on props", () => {
        render(
            <Drawer  defaultOpen={true}>
                <DrawerContent  data-testid={"PosBasedProps"} size="lg" position="right">
                    <DrawerTitle  >Drawer Title</DrawerTitle>
                </DrawerContent>
            </Drawer>
        );

        const content = screen.getByTestId("PosBasedProps").closest("div");
        expect(content).toHaveClass("fixed z-50 flex h-full flex-col border border-slate-200 bg-white p-4 text-white dark:border-slate-800 dark:bg-[#292929]");
    });

    it("renders header, footer, and description correctly", () => {
        render(
            <Drawer defaultOpen={true}>
                <DrawerContent>
                    <DrawerHeader>Header Content</DrawerHeader>
                    <DrawerDescription>Description Content</DrawerDescription>
                    <DrawerFooter>Footer Content</DrawerFooter>
                </DrawerContent>
            </Drawer>
        );

        expect(screen.getByText("Header Content")).toBeInTheDocument();
        expect(screen.getByText("Description Content")).toBeInTheDocument();
        expect(screen.getByText("Footer Content")).toBeInTheDocument();
    });

    it("calls close on trigger click", () => {
        const handleClose = jest.fn();
        render(
            <Drawer defaultOpen={true}>
                <DrawerTrigger asChild>
                    <button onClick={handleClose}>Close Drawer</button>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerClose />
                </DrawerContent>
            </Drawer>
        );

        fireEvent.click(screen.getByText("Close Drawer"));
        expect(handleClose).toHaveBeenCalled();
    });

    it("renders children correctly", () => {
        render(
            <Drawer defaultOpen={true}>
                <DrawerContent>
                    <div>Drawer Content</div>
                </DrawerContent>
            </Drawer>
        );

        expect(screen.getByText("Drawer Content")).toBeInTheDocument();
    });


    it("renders without divider styles when `divider` is false", () => {
        render(
            <Drawer defaultOpen={true} divider={false} >
                <DrawerContent  className={"border-t-slate-600"} data-testid={"DrawerContentFalse"}>
                   Drawer Content
                </DrawerContent>
            </Drawer>
        );

        const content = screen.getByTestId("DrawerContentFalse").closest("div");
        expect(content).toHaveClass("border-t-slate-600");
    });
});