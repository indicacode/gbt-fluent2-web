"use client"

import React, { useState } from "react"

import { Button } from "@/components/done/button"
import { Input } from "@/components/done/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/not-done/card"
import Combobox from "@/components/not-done/Combobox"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/reviewing/select";
import {Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger} from "@/components/reviewing/drawer";
import {motion} from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/app/test-place/bruno/dialog";
import {DialogBody} from "next/dist/client/components/react-dev-overlay/internal/components/Dialog";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/done/tabs";
import {AiOutlineApple} from "react-icons/ai";
import {
  GiBanana,
  GiCarrot,
  GiChickenLeg,
  GiGarlic,
  GiMeat,
  GiOrange,
  GiPumpkin,
  GiRoastChicken,
  GiShinyApple
} from "react-icons/gi";
import {SiCucumber} from "react-icons/si";
import {TbBrandCucumber} from "react-icons/tb";
import {Salsa} from "next/dist/compiled/@next/font/dist/google";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

export default function Page() {
  const [status, setStatus] = useState<
    "neutral" | "success" | "fail" | "warning"
  >("neutral")
  const states = ["neutral", "success", "fail", "warning"]

  const [iconOnly, setIconOnly] = useState(false)
  return (
      <div className={"flex overflow-x-hidden   flex-row"}>
        <div className={"lg:min-w-[16vw] lg:min-h-screen bg-red-200"}>

        </div>
    <div className="flex min-h-screen min-w-full flex-col  bg-slate-100 dark:bg-stone-950">
      <main className="min-h-full flex-1 p-6 ">
        <div className="flex w-full flex-col gap-4">
          <Card id={"buttons"} className="bg-stone-50 lg:w-[80vw] dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="flex w-full justify-between  text-4xl">
                Buttons
              </CardTitle>
              <CardDescription className="flex w-full text-xl justify-between">
                A button component. Clicking the button triggers an action.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex w-full flex-col items-center mt-8 lg:mt-0  justify-between  lg:flex-row">
              <div className="flex w-[40%] flex-col justify-around gap-5">
                <h1 className="  text-2xl font-semibold">
                  Variants
                </h1>
                <div id={"buttons"} className="flex flex-col gap-5">
                  <Button className={"w-fit"}>Primary</Button>
                  <Button className={"w-fit"} variant="secondary">Secondary</Button>
                  <Button className={"w-fit"} variant="outline">Outline</Button>
                  <Button className={"w-fit"} variant="subtle">Subtle</Button>
                  <Button className={"w-fit"} variant="transparent">Transparent</Button>
                </div>
              </div>
              <div className="flex w-full gap-5 mt-8 lg:mt-0 flex-col ">
                <h1 className="self-center  text-2xl font-semibold">
                  Toggle
                </h1>
                <div className="flex flex-col items-center gap-5">
                  <Button  className={"w-fit"} toggle />
                  <Button className={"w-fit"} toggle variant="secondary" />
                  <Button className={"w-fit"} toggle variant="outline" />
                  <Button className={"w-fit"} toggle variant="subtle" />
                  <Button className={"w-fit"} toggle variant="transparent" />
                </div>
              </div>

              <div className="flex  w-full flex-col mt-8 lg:mt-0 items-center justify-center gap-5">
                <h1 className=" font-[Montserrat] text-2xl font-semibold">
                  Disabled
                </h1>
                <div className="flex flex-col gap-5">
                  <Button className={"w-fit"} disabled>Primary</Button>
                  <Button className={"w-fit"} disabled variant="secondary">
                    Secondary
                  </Button>
                  <Button className={"w-fit"} disabled variant="outline">
                    Outline
                  </Button>
                  <Button className={"w-fit"} disabled variant="subtle">
                    Subtle
                  </Button>
                  <Button className={"w-fit"} disabled variant="transparent">
                    Transparent
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card id={"inputs"} className="bg-stone-50 lg:w-[80vw] dark:bg-gray-800">
            <CardHeader>
              <CardTitle className=" text-4xl">Inputs</CardTitle>
              <CardDescription className={"text-xl"}>
                An input component. Enter text into the input.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex h-full w-full flex-col gap-8">
              <div className="flex h-fit flex-col items-center justify-center gap-2 lg:flex-row">
                <Input
                  state={status}
                  iconOnly={iconOnly}
                  className="min-w-full"
                  labelText="Im a All in One Input"
                  placeholder="Just toggle the states"
                />
                {/*Do not ever do something like this. Its this way just to test the input*/}
                <Button
                  onClick={() => {
                    setStatus((prev) => {
                      const currentIndex = states.indexOf(prev)
                      const nextIndex = (currentIndex + 1) % states.length
                      return states[nextIndex]
                    })
                  }}
                >
                  Status Toggle
                </Button>
                {/*Do not ever do something like this. Its this way just to test the input*/}
                <Button onClick={() => setIconOnly(!iconOnly)}>
                  Only Icon Toggle
                </Button>
              </div>
              <div className="flex h-full w-full flex-col gap-10 lg:flex-row">
                <div className="flex h-full w-full flex-col">
                  <h1 className="self-center  text-3xl font-semibold">
                    Variants
                  </h1>
                  <div className="flex flex-col gap-4">
                    <Input
                      labelText="Example of"
                      placeholder="A Outline Input"
                      helperText="Helper text"
                    />
                    <Input
                      variant="focus"
                      labelText="Example of"
                      placeholder="A Outline Input"
                      helperText="Helper text"
                    />
                    <Input
                      variant="filledDark"
                      labelText="Example of "
                      placeholder="A FilledDark Input"
                      helperText="Helper text"
                    />
                    <Input
                      variant="filledLight"
                      labelText="Warning of"
                      placeholder="A FilledLight Input"
                      helperText="Helper text"
                    />
                  </div>
                </div>

                <div className="flex h-full w-full flex-col">
                  <h1 className="self-center  text-3xl font-semibold">
                    States
                  </h1>
                  <div className="flex flex-col gap-4">
                    <Input
                      state="neutral"
                      labelText="Example of"
                      placeholder="A Neutral"
                      helperText="Input"
                    />
                    <Input
                      state="success"
                      labelText="Example of"
                      placeholder="A Input"
                      helperText="With Success"
                    />
                    <Input
                      state="warning"
                      labelText="Example of "
                      placeholder="A Input"
                      helperText="With Fail"
                    />
                    <Input
                      state="fail"
                      labelText="Example of"
                      placeholder="A Input"
                      helperText="With Warning"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-stone-50 lg:w-[80vw] dark:bg-gray-800">
            <CardHeader>
              <CardTitle>
                Search List
              </CardTitle>
              <CardDescription>
                  A Search List component is used by users to search for an item inside of a list!
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/*<Switch>aaaaaaaa</Switch>*/}
              {/*<Tabs>Tabs</Tabs>*/}
              {/*<Accordion type="multiple">acordion</Accordion>*/}
              {/*<Avatar>Avatar</Avatar>*/}
              {/*<TooltipProvider>*/}
              {/*  <Tooltip>Tooltip</Tooltip>*/}
              {/*</TooltipProvider>*/}
              <Combobox input={frameworks} />
            </CardContent>
          </Card>
          {/*<Card className="dark:bg-blue-900">*/}
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
          <Card id={"select"} className={" lg:w-[80vw] dark:bg-gray-800"}>
            <CardHeader>
              <CardTitle>Select</CardTitle>
              <CardDescription>A component for a small list to select something or some state!</CardDescription>
            </CardHeader>
            <CardContent className={""}>
              <Select >
                <SelectTrigger className={"w-40"}>
                  <SelectValue placeholder={"Select something"}></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className={""}>
                    <SelectLabel>
                      Fruits
                    </SelectLabel>
                    <SelectItem className={""} value={"apple"} >Apple</SelectItem>
                    <SelectItem value={"banana"} >Banana</SelectItem>
                    <SelectItem value={"blueberry"} >Blueberry</SelectItem>
                    <SelectItem value={"grapes"} >Grapes</SelectItem>

                  </SelectGroup>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
          <Card id={"drawer"} className={" lg:w-[80vw] dark:bg-gray-800  "}>
            <CardHeader>
              <CardTitle>Drawer</CardTitle>
              <CardDescription>A component for a drawer to pop out of the bottom of the screen for content to be displayed</CardDescription>
            </CardHeader>
            <CardContent className={""}>
              <Drawer>
                <DrawerTrigger className={"dark:text-whitesmoke py-1 px-4 active:gray-200 rounded-md duration-400 bg-brand-primary text-white hover:bg-[#115EA3] active:border-brand-secondary active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white"}>
                  Open drawer
                </DrawerTrigger>

                <DrawerContent>
                  <div className={"w-screen flex flex-col items-center h-[50vh]"}>


                    <DrawerHeader className={"flex flex-col items-center "}>

                        Welcome to GBT-PMS!
                    </DrawerHeader>
                      <DrawerDescription className={" text-slate-50"}>Grbtec`s Property Management System, is soon to
                        come! for now, try and track this little ball for as long as you can!</DrawerDescription>

                    <div className={"mt-4"}>
                      <motion.div animate={{rotate: 360}}
                                  transition={{duration: 1, repeat: Infinity,repeatType:"reverse", repeatDelay: 0.7}}
                                  className={"h-20 rounded-[49%] items-center bg-gray-300 w-20"}>
                        <motion.div animate={{rotate: 360}}
                                    transition={{duration: 1.6, repeat: Infinity,repeatType:"reverse", repeatDelay: 0.2}}
                                    className={"h-10 mr-6 rounded-[47%] items-center bg-green-600 w-10"}>
                          <motion.div animate={{rotate: 360}}
                                      transition={{duration: 1.6, repeat: Infinity,repeatType:"reverse", repeatDelay: 0.4}}
                                      className={"h-20  hover:bg-red-400 rounded-[46%] items-center bg-gray-400 w-20"}>

                          </motion.div>
                        </motion.div>
                      </motion.div>
                    </div>


                  </div>
                </DrawerContent>
              </Drawer>
            </CardContent>
          </Card>
          <Card id={"dialog"} className={" lg:w-[80vw] dark:bg-gray-800"}>
            <CardHeader>
              <CardTitle>Dialog</CardTitle>
              <CardDescription>A dialog is a supplemental surface that can provide helpful interactions or require someone to take an action before they can continue their task, like confirming a deletion.</CardDescription>
            </CardHeader>
            <CardContent>
            <Dialog >
              <DialogTrigger className={"dark:text-whitesmoke py-1 px-4 active:gray-200 rounded-md duration-400 bg-brand-primary text-white hover:bg-[#115EA3] active:border-brand-secondary active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white"}>
                 Dialog
              </DialogTrigger>
              <DialogBody>

                <DialogContent className={"dark:bg-gray-800"}>
                  <DialogHeader>
                    <DialogTitle className={"text-2xl font-bold "}>This is a dialog.</DialogTitle>

                  </DialogHeader>
                  <h2 className={"text-lg"}>Dialogs are often interruptions, so use them for important actions. If you need to give someone an update on an action they just took but that they don't need to act on, try a toast.</h2>
                  <div className={"flex justify-end flex-row"}>
                    <Button className={"mr-2"}   size={"default"} variant={"secondary"}>Deny</Button>
                    <Button className={""} variant={"default"}>Agree</Button>
                  </div>

                </DialogContent>
              </DialogBody>
            </Dialog>
            </CardContent>
          </Card>
          <Card id={"dialog"} className={" lg:w-[80vw] dark:bg-gray-800"}>
            <CardHeader>
              <CardTitle>Tablist (Tabs)</CardTitle>
              <CardDescription>Tablists are ideal for dividing content-heavy pages into distinct but related categories that are easier to process and require less scrolling. Don’t break up a page with a tablist if people might need to compare information from multiple categories at once.</CardDescription>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue={"fruits"} className={"  w-[full]"}>
                  <TabsList className={"w-full"}>
                    <TabsTrigger value={"fruits"}>Fruits</TabsTrigger>
                    <TabsTrigger value={"vegetables"}>Vegetables</TabsTrigger>
                    <TabsTrigger value={"meat"}>Meat</TabsTrigger>
                  </TabsList>
                  <TabsContent value={"fruits"}>
                    <div className={"flex w-[20%] justify-between flex-row "}>
                      <GiShinyApple size={40}/>
                      <GiOrange size={40}/>
                      <GiBanana size={40}/>
                    </div>
                  </TabsContent>
                  <TabsContent value={"vegetables"}>
                    <div className={"flex w-[20%] justify-between flex-row "}>
                      <GiGarlic size={40}/>
                      <GiPumpkin size={40}/>
                      <GiCarrot size={40}/>
                    </div>
                  </TabsContent>
                  <TabsContent value={"meat"}>
                    <div className={"flex w-[20%] justify-between flex-row "}>
                      <GiMeat size={40}/>
                      <GiChickenLeg size={40}/>
                      <GiRoastChicken size={40}/>
                    </div>
                  </TabsContent>
                </Tabs>
            </CardContent>
          </Card>
          <Card id={"dialog"} className={" lg:w-[80vw] dark:bg-gray-800"}>
            <CardHeader>
              <CardTitle>Dialog</CardTitle>
              <CardDescription>A dialog is a supplemental surface that can provide helpful interactions or require someone to take an action before they can continue their task, like confirming a deletion.</CardDescription>
            </CardHeader>
            <CardContent>

            </CardContent>
          </Card>
        </div>
      </main>
    </div>
      </div>
  )
}
