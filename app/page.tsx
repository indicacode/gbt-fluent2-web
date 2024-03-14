"use client"

import { useState } from "react"
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
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Input,
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
  Table,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/reviewing/"
import {
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/reviewing/table"

import { columnItems, components, frameworks, rowItems } from "./page.inputs"

type ComponentType = (typeof components)[number]

export default function Page() {
  const [status, setStatus] = useState<
    "neutral" | "success" | "fail" | "warning"
  >("neutral")
  const states = ["neutral", "success", "fail", "warning"]
  const [currentDocs, setCurrentDocs] = useState<ComponentType>("Button")
  const [iconOnly, setIconOnly] = useState(false)

  return (
    <div className="flex h-full min-h-screen">
      <div className="h-fu ll flex min-h-screen w-full flex-col justify-center gap-4 border-r-2 border-zinc-700 bg-zinc-900 px-10 pt-4 lg:min-w-[16vw]">
        {components.map((component, idx) => (
          <Button key={idx} onClick={() => setCurrentDocs(component)}>
            {component}
          </Button>
        ))}
      </div>
      <main className="flex h-full min-h-screen w-full flex-col items-center justify-center bg-slate-100 px-6 dark:bg-zinc-900">
        {currentDocs === "Button" && (
          <Card
            id={"buttons"}
            className="bg-stone-50 lg:w-[80vw] dark:bg-gray-800"
          >
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
                  <Button className={"w-fit"} toggle />
                  <Button className={"w-fit"} toggle variant="secondary" />
                  <Button className={"w-fit"} toggle variant="outline" />
                  <Button className={"w-fit"} toggle variant="subtle" />
                  <Button className={"w-fit"} toggle variant="transparent" />
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
            </CardContent>
          </Card>
        )}
        {currentDocs === "Inputs" && (
          <Card
            id={"inputs"}
            className="bg-stone-50 lg:w-[80vw] dark:bg-gray-800"
          >
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
          <Card
            id={"search"}
            className="bg-stone-50 lg:w-[80vw] dark:bg-gray-800"
          >
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
          <Card id={"select"} className={" lg:w-[80vw] dark:bg-gray-800"}>
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
          <Card id={"drawer"} className={" lg:w-[80vw] dark:bg-gray-800  "}>
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
                    <DrawerHeader className={"flex flex-col items-center "}>
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
          <>
            <Card id={"dialog"} className={" lg:w-[80vw] dark:bg-gray-800"}>
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
                      actions. If you need to give someone an update on an
                      action they just took but that they don't need to act on,
                      try a toast.
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

            <Card id={"dialog"} className={" lg:w-[80vw] dark:bg-gray-800"}>
              <CardHeader>
                <CardTitle>Dialog</CardTitle>
                <CardDescription>
                  A dialog is a supplemental surface that can provide helpful
                  interactions or require someone to take an action before they
                  can continue their task, like confirming a deletion.
                </CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          </>
        )}
        {currentDocs === "Tabs" && (
          <Card id={"tabs"} className={" lg:w-[80vw] dark:bg-gray-800"}>
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
          <Card className={" lg:w-[80vw] dark:bg-gray-800"}>
            <CardHeader>
              <CardTitle>Data Table</CardTitle>
              <CardDescription>
                Data tables are used for keeping track of data on a list, to
                update state variables like price and more!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable />
            </CardContent>
          </Card>
        )}
        {currentDocs === "Table" && (
          <Card className={" lg:w-[80vw] dark:bg-gray-800"}>
            <CardHeader>
              <CardTitle>Table</CardTitle>
              <CardDescription>
                Data tables are used for keeping track of data on a list, to
                update state variables like price and more!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                  <TableRow>
                    {columnItems.map(({ columnKey, label }, idx) => (
                      <TableHead>{label}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rowItems.map(
                    ({ file, author, lastUpdated, lastUpdate }, idx) => (
                      <TableRow key={idx}>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2 text-center">
                            {file.icon}
                            <>{file.label}</>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="flex items-center gap-2">
                            <Avatar
                              aria-label={author.label}
                              status={author.status}
                              // name={author.label}
                            >
                              <AvatarImage
                                src="https://github.com/shadcn.png"
                                alt="@shadcn"
                              />
                              <AvatarFallback>CN</AvatarFallback>
                            </Avatar>

                            <>{author.label}</>
                          </span>
                        </TableCell>
                        <TableCell>
                          <>{lastUpdated.label}</>
                        </TableCell>
                        <TableCell className="text-right">
                          <>{lastUpdate.icon}</>
                          <>{lastUpdate.label}</>
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}
