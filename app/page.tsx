"use client"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/not-done/card"
import { Button } from "@/components/done/button"
import { Input } from "@/components/reviewing/input"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/not-done/dropdown-menu"
import { Label } from "@/components/not-done/label"
import { Textarea } from "@/components/not-done/text-area"
import { Checkbox } from "@/components/not-done/checkbox"

export default function Component() {
    return (
        <div className="flex flex-col min-h-screen dark:bg-gray-900">
            <main className="flex-1 p-6 md:p-12">
                <div className="grid gap-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Button</CardTitle>
                            <CardDescription>A button component. Clicking the button triggers an action.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <Button>Click me</Button>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Input</CardTitle>
                            <CardDescription>An input component. Enter text into the input.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <Input placeholder="Enter your text" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Dropdown</CardTitle>
                            <CardDescription>A dropdown component. Click the dropdown to open a menu.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline">Open menu</Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <div>
                                        <DropdownMenuItem>
                                            <div>Option 1</div>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <div>Option 2</div>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <div>Option 3</div>
                                        </DropdownMenuItem>
                                    </div>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Modal</CardTitle>
                            <CardDescription>A modal component. Click the button to open the modal.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div>
                                <div>
                                    <Button variant="outline">Open modal</Button>
                                </div>
                                <div>
                                    <div>
                                        <div>Modal Title</div>
                                        <div>This is a modal. Click outside the modal to close it.</div>
                                    </div>
                                    <div>
                                        <Button>Close</Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Card</CardTitle>
                            <CardDescription>A card component. This is a container for content.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Card Title</CardTitle>
                                    <CardDescription>This is a card.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>This is the card content.</p>
                                </CardContent>
                            </Card>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Layouts</CardTitle>
                            <CardDescription>A collection of layouts. These are useful for structuring your page.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Sidebar Layout</CardTitle>
                                        <CardDescription>A layout with a sidebar and main content area.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid h-20 w-full bg-gray-100 rounded-md" />
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Grid Layout</CardTitle>
                                        <CardDescription>A layout with a grid of components.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="h-20 w-full bg-gray-100 rounded-md" />
                                            <div className="h-20 w-full bg-gray-100 rounded-md" />
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Form Layout</CardTitle>
                                        <CardDescription>A layout for forms.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">Name</Label>
                                                <Input id="name" placeholder="Enter your name" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email</Label>
                                                <Input id="email" placeholder="Enter your email" type="email" />
                                            </div>
                                            <Button>Submit</Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Forms</CardTitle>
                            <CardDescription>A collection of form components.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="grid gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" placeholder="Enter your name" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" placeholder="Enter your email" type="email" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" placeholder="Enter your password" type="password" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="terms" />
                                    <Label className="text-sm" htmlFor="terms">
                                        I accept the terms & conditions
                                    </Label>
                                </div>
                                <Button>Submit</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}


