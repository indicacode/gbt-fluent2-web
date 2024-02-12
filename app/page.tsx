"use client"

import { useState } from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/not-done/card"
import { Button } from "@/components/reviewing/button"
import { Input } from "@/components/reviewing/input"

export default function Page() {
  const [status, setStatus] = useState<
    "neutral" | "success" | "fail" | "warning"
  >("neutral")
  const [iconOnly, setIconOnly] = useState(false)
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center dark:bg-[#09090B]">
      <main className="w-2/3 flex-1 p-6 md:p-12">
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
              <CardTitle className="font-[Poppins] text-3xl">Input</CardTitle>
              {/*<CardDescription>*/}
              {/*  An input component. Enter text into the input.*/}
              {/*</CardDescription>*/}
            </CardHeader>
            <CardContent className="flex h-full w-full flex-col space-y-2">
              <div className=" flex h-fit w-full flex-col">
                <div className="flex items-center gap-2">
                  <Input
                    state={status}
                    iconOnly={iconOnly}
                    className="min-w-full"
                    label="Im a All in One Input"
                    placeholder="You read me right"
                    helperText="All in One Input"
                  />
                  {/*Do not ever do something like this. Its this way just to test the input*/}
                  <Button
                    buttonType="secondary"
                    onClick={() =>
                      setStatus((prev) =>
                        prev === "neutral"
                          ? "success"
                          : prev === "success"
                            ? "fail"
                            : prev === "fail"
                              ? "warning"
                              : prev === "warning"
                                ? "neutral"
                                : "neutral"
                      )
                    }
                  >
                    Status Toggle
                  </Button>
                  {/*Do not ever do something like this. Its this way just to test the input*/}
                  <Button
                    onClick={() => setIconOnly(!iconOnly)}
                    buttonType="default"
                  >
                    Only Icon Toggle
                  </Button>
                </div>
              </div>
              <div className="flex h-full w-full gap-10">
                <div className="flex h-full w-full flex-col">
                  <h1 className="self-center font-[Poppins] text-3xl font-semibold">
                    Variants
                  </h1>
                  <div className="flex flex-col gap-4">
                    <Input
                      label="Example of"
                      placeholder="A Outline Input"
                      helperText="Helper text"
                    />
                    <Input
                      variant="filledDark"
                      label="Example of "
                      iconOnly
                      placeholder="A FilledDark Input"
                      helperText="Helper text"
                    />
                    <Input
                      variant="filledLight"
                      label="Warning of"
                      placeholder="A FilledLight Input"
                      helperText="Helper text"
                    />
                  </div>
                </div>

                <div className="flex h-full w-full flex-col">
                  <h1 className="self-center font-[Poppins] text-3xl font-semibold">
                    States
                  </h1>
                  <div className="flex flex-col gap-4">
                    <Input
                      state="neutral"
                      label="Example of"
                      placeholder="A Input"
                      helperText="With Success"
                    />
                    <Input
                      state="warning"
                      label="Example of "
                      placeholder="A Input"
                      helperText="With Fail"
                    />
                    <Input
                      state="fail"
                      label="Example of"
                      placeholder="A Input"
                      helperText="With Warning"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          {/*<Card>*/}
          {/*  <CardHeader>*/}
          {/*    <CardTitle>Dropdown</CardTitle>*/}
          {/*    <CardDescription>*/}
          {/*      A dropdown component. Click the dropdown to open a menu.*/}
          {/*    </CardDescription>*/}
          {/*  </CardHeader>*/}
          {/*  <CardContent className="space-y-2">*/}
          {/*    <DropdownMenu>*/}
          {/*      <DropdownMenuTrigger asChild>*/}
          {/*        <Button hasIcon={true} variant="default">*/}
          {/*          Open menu*/}
          {/*        </Button>*/}
          {/*      </DropdownMenuTrigger>*/}
          {/*      <DropdownMenuContent>*/}
          {/*        <div>*/}
          {/*          <DropdownMenuItem>*/}
          {/*            <div>Option 1</div>*/}
          {/*          </DropdownMenuItem>*/}
          {/*          <DropdownMenuItem>*/}
          {/*            <div>Option 2</div>*/}
          {/*          </DropdownMenuItem>*/}
          {/*          <DropdownMenuItem>*/}
          {/*            <div>Option 3</div>*/}
          {/*          </DropdownMenuItem>*/}
          {/*        </div>*/}
          {/*      </DropdownMenuContent>*/}
          {/*    </DropdownMenu>*/}
          {/*  </CardContent>*/}
          {/*</Card>*/}
          {/*<Card>*/}
          {/*  <CardHeader>*/}
          {/*    <CardTitle>Modal</CardTitle>*/}
          {/*    <CardDescription>*/}
          {/*      A modal component. Click the button to open the modal.*/}
          {/*    </CardDescription>*/}
          {/*  </CardHeader>*/}
          {/*  <CardContent className="space-y-2">*/}
          {/*    <div>*/}
          {/*      <div>*/}
          {/*        <Button variant="outline">Open modal</Button>*/}
          {/*      </div>*/}
          {/*      <div>*/}
          {/*        <div>*/}
          {/*          <div>Modal Title</div>*/}
          {/*          <div>*/}
          {/*            This is a modal. Click outside the modal to close it.*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*        <div>*/}
          {/*          <Button>Close</Button>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </CardContent>*/}
          {/*</Card>*/}
          {/*<Card>*/}
          {/*  <CardHeader>*/}
          {/*    <CardTitle>Card</CardTitle>*/}
          {/*    <CardDescription>*/}
          {/*      A card component. This is a container for content.*/}
          {/*    </CardDescription>*/}
          {/*  </CardHeader>*/}
          {/*  <CardContent className="space-y-2">*/}
          {/*    <Card>*/}
          {/*      <CardHeader>*/}
          {/*        <CardTitle>Card Title</CardTitle>*/}
          {/*        <CardDescription>This is a card.</CardDescription>*/}
          {/*      </CardHeader>*/}
          {/*      <CardContent>*/}
          {/*        <p>This is the card content.</p>*/}
          {/*      </CardContent>*/}
          {/*    </Card>*/}
          {/*  </CardContent>*/}
          {/*</Card>*/}
          {/*<Card>*/}
          {/*  <CardHeader>*/}
          {/*    <CardTitle>Forms</CardTitle>*/}
          {/*    <CardDescription>*/}
          {/*      A collection of form components.*/}
          {/*    </CardDescription>*/}
          {/*  </CardHeader>*/}
          {/*  <CardContent className="space-y-2">*/}
          {/*    <div className="grid gap-4">*/}
          {/*      <div className="space-y-2">*/}
          {/*        <Label htmlFor="name">Name</Label>*/}
          {/*        <Input*/}
          {/*          state="neutral"*/}
          {/*          id="name"*/}
          {/*          placeholder="Enter your name"*/}
          {/*        />*/}
          {/*      </div>*/}
          {/*      <div className="space-y-2">*/}
          {/*        <Label htmlFor="email">Email</Label>*/}
          {/*        <Input*/}
          {/*          state="neutral"*/}
          {/*          id="email"*/}
          {/*          placeholder="Enter your email"*/}
          {/*          type="email"*/}
          {/*        />*/}
          {/*      </div>*/}
          {/*      <div className="space-y-2">*/}
          {/*        <Label htmlFor="password">Password</Label>*/}
          {/*        <Input*/}
          {/*          state="neutral"*/}
          {/*          id="password"*/}
          {/*          placeholder="Enter your password"*/}
          {/*          type="password"*/}
          {/*        />*/}
          {/*      </div>*/}
          {/*      <div className="space-y-2">*/}
          {/*        <Label htmlFor="message">Message</Label>*/}
          {/*        <Textarea*/}
          {/*          className="min-h-[100px]"*/}
          {/*          id="message"*/}
          {/*          placeholder="Enter your message"*/}
          {/*        />*/}
          {/*      </div>*/}
          {/*      <div className="flex items-center space-x-2">*/}
          {/*        <Checkbox id="terms" />*/}
          {/*        <Label className="text-sm" htmlFor="terms">*/}
          {/*          I accept the terms & conditions*/}
          {/*        </Label>*/}
          {/*      </div>*/}
          {/*      <Button>Submit</Button>*/}
          {/*    </div>*/}
          {/*  </CardContent>*/}
          {/*</Card>*/}
          {/*<Card className={"pb-10"}>*/}
          {/*  <CardHeader>*/}
          {/*    <CardTitle>Tabs</CardTitle>*/}
          {/*    <CardDescription>*/}
          {/*      A Component to manage displayed content through tabs*/}
          {/*    </CardDescription>*/}
          {/*  </CardHeader>*/}
          {/*  <CardContent className={"flex"}>*/}
          {/*    <Tabs>*/}
          {/*      <TabsList className={"flex justify-start"}>*/}
          {/*        <TabsTrigger value={"management"}>Management</TabsTrigger>*/}
          {/*        <TabsTrigger value={"supply"}>Supply</TabsTrigger>*/}
          {/*        <TabsTrigger value={"orders"}>Orders</TabsTrigger>*/}
          {/*      </TabsList>*/}
          {/*      <TabsContent*/}
          {/*        className={"flex flex-col items-center justify-center gap-4"}*/}
          {/*        value={"management"}*/}
          {/*      >*/}
          {/*        <div className={"flex flex-row gap-3"}>*/}
          {/*          <Button variant={"default"}>Analytics</Button>*/}
          {/*          <Button variant={"default"}>Terminal</Button>*/}
          {/*          <Button variant={"default"}>Database</Button>*/}
          {/*        </div>*/}
          {/*        <div className={"flex flex-row "}>*/}
          {/*          <motion.div*/}
          {/*            className={" mt-12 transition-colors duration-200 "}*/}
          {/*            initial={{ scale: 1, rotate: 0, backgroundColor: "blue" }}*/}
          {/*            animate={{*/}
          {/*              scale: 1.6,*/}
          {/*              rotate: 360,*/}
          {/*              backgroundColor: ["#33b3d6", "#009ec9"],*/}
          {/*            }}*/}
          {/*            transition={{*/}
          {/*              duration: 2,*/}
          {/*              repeat: Infinity,*/}
          {/*              repeatType: "reverse",*/}
          {/*              ease: "easeInOut",*/}
          {/*            }}*/}
          {/*            style={{*/}
          {/*              width: "100px",*/}
          {/*              height: "100px",*/}
          {/*              borderRadius: "46%",*/}
          {/*            }}*/}
          {/*          ></motion.div>*/}
          {/*        </div>*/}
          {/*      </TabsContent>*/}
          {/*    <TabsContent className={"flex justify-center items-center "} value={"supply"}>
                  <motion.div animate={{opacity:[0,1] }} transition={{duration:0.4}} className={"  items-center justify-center gap-4  flex"}  >
                  <Button>BUY CUPS</Button>
                    <Button>BUY MORE PLATES</Button>


                  </motion.div>
                </TabsContent>
              </Tabs>*/}
          {/*  </CardContent>*/}
          {/*</Card>*/}
        </div>
      </main>
    </div>
  )
}
