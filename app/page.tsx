"use client"

import { Button } from "@/components/done/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/not-done/card"
import { Checkbox } from "@/components/not-done/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/not-done/dropdown-menu"
import { Label } from "@/components/not-done/label"
import { Textarea } from "@/components/not-done/text-area"
import { Input } from "@/components/reviewing/input"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/done/tabs";
import {Table} from "@/components/not-done/table";
import {motion} from "framer-motion";





export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center dark:bg-[#09090B]">
      <main className="flex-1 p-6 md:p-12">
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Button</CardTitle>
              <CardDescription>
                A button component. Clicking the button triggers an action.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button>Click me</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Input</CardTitle>
              <CardDescription>
                An input component. Enter text into the input.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Input
                label="Title here"
                placeholder="Enter your text"
                helperText="subtext"
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Dropdown</CardTitle>
              <CardDescription>
                A dropdown component. Click the dropdown to open a menu.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button hasIcon={true} variant="default">Open menu</Button>
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
              <CardDescription>
                A modal component. Click the button to open the modal.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <div>
                  <Button variant="outline">Open modal</Button>
                </div>
                <div>
                  <div>
                    <div>Modal Title</div>
                    <div>
                      This is a modal. Click outside the modal to close it.
                    </div>
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
              <CardDescription>
                A card component. This is a container for content.
              </CardDescription>
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
              <CardTitle>Forms</CardTitle>
              <CardDescription>
                A collection of form components.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    placeholder="Enter your password"
                    type="password"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    className="min-h-[100px]"
                    id="message"
                    placeholder="Enter your message"
                  />
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
          <Card className={"pb-10"}>
            <CardHeader>
              <CardTitle>
                Tabs
              </CardTitle>
              <CardDescription>
                A Component to manage displayed content through tabs
              </CardDescription>
            </CardHeader>
            <CardContent className={"flex"}>
              <Tabs>
                <TabsList className={"flex justify-start"}>
                    <TabsTrigger value={"management"}>Management</TabsTrigger>
                  <TabsTrigger value={"supply"}>Supply</TabsTrigger>
                  <TabsTrigger value={"orders"}>Orders</TabsTrigger>
                </TabsList>
                <TabsContent className={"gap-4 flex-col items-center justify-center flex"} value={"management"}>
                  <div className={"flex-row gap-3 flex"}>
                    <Button variant={"default"}>Analytics</Button>
                    <Button variant={"default"}>Terminal</Button>
                    <Button variant={"default"}>Database</Button>
                  </div>
                  <div className={"flex-row flex "}>
                  <motion.div
                      className={" transition-colors mt-12 duration-200 "}
                      initial={{scale: 1, rotate: 0, backgroundColor: 'blue'}}
                      animate={{scale: 1.6, rotate: 360, backgroundColor: ["#33b3d6", "#009ec9"]}}
                      transition={{duration: 2, repeat: Infinity, repeatType: "reverse", ease: 'easeInOut'}}
                      style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '46%',

                      }}
                  >
                  </motion.div>

                  </div>
                </TabsContent>
              </Tabs>

            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
