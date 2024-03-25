"use client"

import { useState } from "react"
import { MountainIcon } from "lucide-react"
import {
  GiBanana,
  GiCarrot,
  GiChickenLeg,
  GiGarlic,
  GiMeat,
  GiOrange,
  GiPumpkin,
  GiRoastChicken,
  GiShinyApple,
} from "react-icons/gi"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Input,
  Slider,
  Switch, Textarea,
} from "@/components/done"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/not-done/card"
import Combobox from "@/components/not-done/Combobox"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  DataTable,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTrigger,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/reviewing/"
import { columns } from "@/components/reviewing/data-table.components"
import { fetchUsers } from "@/components/reviewing/data-table.input"

import { frameworks, rowItems, sideBar } from "./page.inputs"
import {Calendar12Filled, Calendar3Day16Filled} from "@fluentui/react-icons";

type SideBarType = keyof typeof sideBar

type ItemsType = {
  [Key in SideBarType]: (typeof sideBar)[Key][number]
}[SideBarType]

type StatusType = "neutral" | "success" | "fail" | "warning"

export default function Page() {
  const [currentDocs, setCurrentDocs] = useState<ItemsType>("Button")
  const [status, setStatus] = useState<StatusType>("neutral")
  const [iconOnly, setIconOnly] = useState(false)
  const [input, setInput] = useState<string>("")

  const states = ["neutral", "success", "fail", "warning"]

  const sideBarKeys = Object.keys(sideBar)
  return (
    <div className="flex h-full min-h-screen w-full lg:flex-row">
      <div className="flex min-h-screen w-full max-w-44 flex-col justify-between border-r-2 border-zinc-700 bg-zinc-900 pt-4">
        <div className="flex justify-start gap-2 pl-1 text-black dark:text-white">
          <MountainIcon className="text-2xl" />
          <h2 className="text-xl font-bold">Fluent2</h2>
        </div>
        <Accordion
          type="multiple"
          className="flex min-h-full w-full flex-col bg-transparent pt-4"
        >
          {sideBarKeys.map((key, idx) => (
            <AccordionItem
              key={idx}
              className="bg-transparent font-bold"
              value={"item" + idx}
            >
              <AccordionTrigger>
                <span className="pb-1 text-[1.2em]">{key}</span>
              </AccordionTrigger>
              <AccordionContent>
                {sideBar[key as SideBarType].map(
                  (component: ItemsType, itemIdx: number) => (
                    <Button
                      key={itemIdx}
                      className="h-auto w-full justify-start rounded-none p-0"
                      variant="subtle"
                      onClick={() => setCurrentDocs(component)}
                      aria-labelledby={`${key}-${itemIdx}`}
                    >
                      {component}
                    </Button>
                  )
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <main className="flex h-full min-h-screen w-full flex-col items-center justify-center bg-slate-100 px-6 dark:bg-zinc-900">
        {currentDocs === "Button" && (
          <Card className="w-full bg-stone-50 lg:w-[80vw] dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="flex w-full justify-between  text-4xl">
                Buttons
              </CardTitle>
              <CardDescription className="flex w-full justify-between text-xl">
                A button component. Clicking the button triggers an action.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-8 flex w-full flex-col items-center justify-between  lg:mt-0  lg:flex-row">
              <div className="flex w-[40%] flex-col justify-around gap-5">
                <h1 className="text-2xl font-semibold">Variants</h1>
                <div id={"buttons"} className="flex flex-col gap-5">
                  <Button className={"w-fit"}>Primary</Button>
                  <Button className={"w-fit"} variant="secondary">
                    Secondary
                  </Button>
                  <Button className={"w-fit"} variant="outline">
                    Outline
                  </Button>
                  <Button className={"w-fit"} variant="subtle">
                    Subtle
                  </Button>
                  <Button className={"w-fit"} variant="transparent">
                    Transparent
                  </Button>
                </div>
              </div>
              <div className="mt-8 flex w-full flex-col gap-5 lg:mt-0 ">
                <h1 className="self-center  text-2xl font-semibold">Toggle</h1>
                <div className="flex flex-col items-center gap-5">
                  <Button className={"w-fit"} toggle/>
                  <Button className={"w-fit"} toggle variant="secondary"/>
                  <Button className={"w-fit"} toggle variant="outline"/>
                  <Button className={"w-fit"} toggle variant="subtle"/>
                  <Button className={"w-fit"} toggle variant="transparent"/>
                </div>
              </div>

              <div className="mt-8  flex w-full flex-col items-center justify-center gap-5 lg:mt-0">
                <h1 className=" font-Segoe text-2xl font-semibold">Disabled</h1>
                <div className="flex flex-col gap-5">
                  <Button className={"w-fit"} disabled>
                    Primary
                  </Button>
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
              <div className="mt-8  flex w-full flex-col items-center justify-center gap-5 lg:mt-0">
                <h1 className=" font-Segoe text-2xl font-semibold">Icon</h1>
                <div className="flex flex-col gap-5">
                  <Button icon={<Calendar3Day16Filled className={"text-2xl"}/>} className={"w-fit "} >
                    Primary
                  </Button>
                  <Button className={"w-fit"}  variant="secondary">
                    Secondary
                  </Button>
                  <Button className={"w-fit"} variant="outline">
                    Outline
                  </Button>
                  <Button className={"w-fit"}  variant="subtle">
                    Subtle
                  </Button>
                  <Button className={"w-fit"}  variant="transparent">
                    Transparent
                  </Button>
                </div>
              </div>

            </CardContent>
          </Card>
        )}
        {currentDocs === "Inputs" && (
            <Card className="w-full bg-stone-50 lg:w-[80vw] dark:bg-gray-800">
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
                      onChange={(e) => setInput(e.currentTarget.value)}
                  />
                {`${input}`}
                {/*Do not ever do something like this. Its this way just to test the input*/}
                <Button
                  onClick={() => {
                    // @ts-ignore
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
                  This inst a toggle button it shouldt appear
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
        )}
        {currentDocs === "Search" && (
          <Card className="w-full bg-stone-50 lg:w-[80vw] dark:bg-gray-800">
            <CardHeader>
              <CardTitle>Search List</CardTitle>
              <CardDescription>
                A Search List component is used by users to search for an item
                inside of a list!
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
        )}
        {currentDocs === "Select" && (
          <Card className="w-full bg-stone-50 lg:w-[80vw] dark:bg-gray-800">
            <CardHeader>
              <CardTitle>Select</CardTitle>
              <CardDescription>
                A component for a small list to select something or some state!
              </CardDescription>
            </CardHeader>
            <CardContent className={""}>
              <Select>
                <SelectTrigger className={"w-40"}>
                  <SelectValue placeholder={"Select something"}></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className={""}>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem className={""} value={"apple"}>
                      Apple
                    </SelectItem>
                    <SelectItem value={"banana"}>Banana</SelectItem>
                    <SelectItem value={"blueberry"}>Blueberry</SelectItem>
                    <SelectItem value={"grapes"}>Grapes</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        )}
        {currentDocs === "Drawer" && (
          <Card className="w-full bg-stone-50 lg:w-[80vw] dark:bg-gray-800">
            <CardHeader>
              <CardTitle>Drawer</CardTitle>
              <CardDescription>
                A component for a drawer to pop out of the bottom of the screen
                for content to be displayed
              </CardDescription>
            </CardHeader>
            <CardContent className={""}>
              <Drawer>
                <DrawerTrigger
                  className={
                    "dark:text-whitesmoke active:gray-200 duration-400 rounded-md bg-brand-primary px-4 py-1 text-white hover:bg-[#115EA3] active:border-brand-secondary active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white"
                  }
                >
                  Open drawer
                </DrawerTrigger>

                <DrawerContent>
                  <div
                    className={"flex h-[50vh] w-screen flex-col items-center"}
                  >
                    <DrawerHeader className="flex flex-col items-center">
                      Welcome to GBT-PMS!
                    </DrawerHeader>
                    <DrawerDescription className={" text-slate-50"}>
                      Grbtec`s Property Management System, is soon to come! for
                      now, try and track this little ball for as long as you
                      can!
                    </DrawerDescription>
                  </div>
                </DrawerContent>
              </Drawer>
            </CardContent>
          </Card>
        )}
        {currentDocs === "Dialog" && (
          <Card className="w-full bg-stone-50 lg:w-[80vw] dark:bg-gray-800">
            <CardHeader>
              <CardTitle>Dialog</CardTitle>
              <CardDescription>
                A dialog is a supplemental surface that can provide helpful
                interactions or require someone to take an action before they
                can continue their task, like confirming a deletion.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog>
                <DialogTrigger
                  className={
                    "dark:text-whitesmoke active:gray-200 duration-400 rounded-md bg-brand-primary px-4 py-1 text-white hover:bg-[#115EA3] active:border-brand-secondary active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white"
                  }
                >
                  Dialog
                </DialogTrigger>
                <DialogContent className={"dark:bg-gray-800"}>
                  <DialogHeader>
                    <DialogTitle className={"text-2xl font-bold "}>
                      This is a dialog.
                    </DialogTitle>
                  </DialogHeader>
                  <h2 className={"text-lg"}>
                    Dialogs are often interruptions, so use them for important
                    actions. If you need to give someone an update on an action
                    they just took but that they don't need to act on, try a
                    toast.
                  </h2>
                  <div className={"flex flex-row justify-end"}>
                    <Button
                      className={"mr-2"}
                      size={"default"}
                      variant={"secondary"}
                    >
                      Deny
                    </Button>
                    <Button className={""} variant={"default"}>
                      Agree
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        )}
        {currentDocs === "Tabs" && (
          <Card className="w-full bg-stone-50 lg:w-[80vw] dark:bg-gray-800">
            <CardHeader>
              <CardTitle>Tablist (Tabs)</CardTitle>
              <CardDescription>
                Tablists are ideal for dividing content-heavy pages into
                distinct but related categories that are easier to process and
                require less scrolling. Don’t break up a page with a tablist if
                people might need to compare information from multiple
                categories at once.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue={"fruits"} className={"  w-[full]"}>
                <TabsList className={"w-full"}>
                  <TabsTrigger value={"fruits"}>Fruits</TabsTrigger>
                  <TabsTrigger value={"vegetables"}>Vegetables</TabsTrigger>
                  <TabsTrigger value={"meat"}>Meat</TabsTrigger>
                </TabsList>
                <TabsContent value={"fruits"}>
                  <div className={"flex w-[20%] flex-row justify-between "}>
                    <GiShinyApple size={40} />
                    <GiOrange size={40} />
                    <GiBanana size={40} />
                  </div>
                </TabsContent>
                <TabsContent value={"vegetables"}>
                  <div className={"flex w-[20%] flex-row justify-between "}>
                    <GiGarlic size={40} />
                    <GiPumpkin size={40} />
                    <GiCarrot size={40} />
                  </div>
                </TabsContent>
                <TabsContent value={"meat"}>
                  <div className={"flex w-[20%] flex-row justify-between "}>
                    <GiMeat size={40} />
                    <GiChickenLeg size={40} />
                    <GiRoastChicken size={40} />
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        )}
        {currentDocs === "DataTable" && (
          <Card className="w-full bg-stone-50 lg:w-[80vw] dark:bg-gray-800">
            <CardHeader>
              <CardTitle>Data Table</CardTitle>
              <CardDescription>
                Data tables are used for keeping track of data on a list, to
                update state variables like price and more!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-10">
                <DataTable
                  columns={columns}
                  fetchUsers={fetchUsers}
                  pagination={{
                    manualPagination: true,
                    pageIndex: 0,
                    pageCount: 10,
                    pageSize: 10,
                    rowCount: 100,
                  }}
                />
              </div>
            </CardContent>
          </Card>
        )}
        {currentDocs === "Table" && (
          <Card className="w-full bg-stone-50 lg:w-[80vw] dark:bg-gray-800">
            <CardHeader>
              <CardTitle>Table</CardTitle>
              <CardDescription>
                Data tables are used for keeping track of data on a list, to
                update state variables like price and more!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-10">
                <TableRoot>
                  <TableCaption>A list of your recent invoices.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Invoice</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead className="">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rowItems.map(
                      ({ file, author, lastUpdated, lastUpdate }, idx) => (
                        <TableRow key={idx}>
                          <TableCell className="font-medium">
                            <span className="flex items-center gap-2">
                              <>{file.icon}</>
                              <>{file.label}</>
                            </span>
                          </TableCell>
                          <TableCell>
                            <span className="flex items-center gap-2">
                              <Avatar
                                aria-label={author.label}
                                status={author.status}
                                // name={author.label}
                              >
                                <AvatarImage
                                  src="https://github.com/shadcn.pn"
                                  alt="@shadcn"
                                />
                                <AvatarFallback>{author.label}</AvatarFallback>
                              </Avatar>

                              <>{author.label}</>
                            </span>
                          </TableCell>
                          <TableCell>
                            <>{lastUpdated.label}</>
                          </TableCell>
                          <TableCell>
                            <span className="flex items-center gap-2">
                              <>{lastUpdate.icon}</>
                              <>{lastUpdate.label}</>
                            </span>
                          </TableCell>
                        </TableRow>
                      )
                    )}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TableCell colSpan={3}>Total Edits</TableCell>
                      <TableCell>1</TableCell>
                    </TableRow>
                  </TableFooter>
                </TableRoot>
              </div>
            </CardContent>
          </Card>
        )}
        {currentDocs === "Slider" && (
          <Card className="w-full bg-stone-50 lg:w-[80vw] dark:bg-gray-800">
            <CardHeader>
              <CardTitle>Slider</CardTitle>
              <CardDescription>
                Sliders are used to set dynamic values to things.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Slider size={"sm"} step={1} />
            </CardContent>
          </Card>
        )}
        {currentDocs === "Accordion" && (
          <Card className="w-full bg-stone-50 lg:w-[80vw] dark:bg-gray-800">
            <CardHeader>
              <CardTitle>Accordion</CardTitle>
              <CardDescription>
                Accordions decrease cognitive load by letting people choose
                which sections of content they see, like questions in an FAQ.
                Never put information that's required for the current task
                inside an accordion. Consider a treatment that gives it more
                prominence.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it easy to use?</AccordionTrigger>
                  <AccordionContent>
                    Yes. Try it for yourself, with a few lines of code you get
                    beautiful UI!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the Fluent2
                    Aesthetic!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It's animated by default with a smooth expanding
                    motion, you can disable animations.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        )}
        {currentDocs === "Avatar" && (
          <Card className="w-full bg-stone-50 lg:w-[80vw] dark:bg-gray-800">
            <CardHeader>
              <CardTitle>Avatar</CardTitle>
              <CardDescription>
                An avatar shows an image or text to represent a person or group
                as well as give additional information like their status and
                activity.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Avatar
                className={"flex h-32 w-32 items-center text-center"}
                status={"online"}
              >
                <img alt={"avatar image"}
                  src={
                    "https://images.pexels.com/photos/20147042/pexels-photo-20147042/free-photo-of-moda-tendencia-pessoas-mulher.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  }
                />
              </Avatar>
            </CardContent>
          </Card>
        )}
        {currentDocs === "Switch" && (
          <Card className="w-full bg-stone-50 lg:w-[80vw] dark:bg-gray-800">
            <CardHeader>
              <CardTitle>Switch</CardTitle>
              <CardDescription>
                A switch lets someone choose between two mutually exclusive
                options, like on or off. Activating a switch triggers an
                immediate change.
              </CardDescription>
            </CardHeader>
            <CardContent className={"flex flex-row"}>
              <Switch></Switch>
            </CardContent>
          </Card>
        )}
        { currentDocs === "TextArea" &&  (
            <Card className={"w-full bg-stone-50 lg:w-[80vw] dark:bg-gray-800"}>
              <CardHeader>
                <CardTitle className={"text-2xl font-extrabold text-center"}>Textarea component</CardTitle>
              </CardHeader>
              <CardContent className={"w-full h-full object-contain "}>
              <Textarea classNam={"font-bold dark:text-white text-black "} labelText={"TextArea"} ></Textarea>
              </CardContent>
            </Card>
        )



        }
      </main>
    </div>
  )
}
