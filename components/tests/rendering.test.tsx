import React from 'react';
import { Input, InputLeftAddon, InputRightAddon } from "../done/input";
import { Button } from "../done/button";
import { Accordion } from "../done/accordion";
import { Avatar } from "../done/avatar";
import { Card } from "../done/card";
import { Divider } from "../done/divider";
import { Drawer } from "../done/drawer";
import { Label } from "../done/label";
import { Link } from "../done/link";
import { Slider } from "../done/slider";
import { Switch } from "../done/switch";
import { Textarea } from "../done/textarea";
import { describe, expect, it } from "@jest/globals";
import "@testing-library/jest-dom";
import { renderComponent } from "../tests/renderComponent";


describe("Global Component Rendering", () => {
    const componentsToTest = [
        { name: "Input", Component: Input, props: { labelText: "Test Input" } },
        { name: "InputLeftAddon", Component: InputLeftAddon, props: { children: "Left Addon" } },
        { name: "InputRightAddon", Component: InputRightAddon, props: { children: "Right Addon" } },
        { name: "Button", Component: Button, props: { children: "Click Me" } },
        { name: "Accordion", Component: Accordion, props: { title: "Accordion Title", children: "Accordion Content" } },
        { name: "Avatar", Component: Avatar, props: { alt: "User Avatar", src: "avatar.jpg" } },
        { name: "Card", Component: Card, props: { children: "Card Content" } },
        { name: "Divider", Component: Divider },
        { name: "Drawer", Component: Drawer, props: { isOpen: true, children: "Drawer Content" } },
        { name: "Label", Component: Label, props: { children: "Label Content" } },
        { name: "Link", Component: Link, props: { href: "#", children: "Click Here" } },
        { name: "Slider", Component: Slider, props: { value: 50, min: 0, max: 100 } },
        { name: "Switch", Component: Switch, props: { isChecked: true, children: "toggle" } },
        { name: "Textarea", Component: Textarea, props: { placeholder: "Type here..." } },
    ];

    componentsToTest.forEach(({ name, Component, props }) => {
        it(`renders the ${name} component without crashing`, () => {
            const { getByText, container } = renderComponent(Component, props);

            // Check if the component is rendered properly
            if (props.children) {
                expect(getByText(props.children)).toBeInTheDocument();
            } else {
                expect(container.firstChild).toBeInTheDocument();
            }
        });
    });
});
