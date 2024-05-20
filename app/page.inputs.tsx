import React, { ReactElement } from "react"
import {
  DocumentPdfRegular,
  DocumentRegular,
  EditRegular,
  FolderRegular,
  OpenRegular,
  PeopleRegular,
  VideoRegular,
} from "@fluentui/react-icons"
import { BsThreeDots } from "react-icons/bs"
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
  Divider,
  Input,
  InputLeftAddon,
  InputRightAddon,
  Slider,
  Switch,
  Textarea,
} from "@/components/done"
import Combobox from "@/components/done/combobox"
import InfoLabel from "@/components/done/infoLabel"
import { Label } from "@/components/done/label"
import { Link } from "@/components/done/link"
import { RadioGroup, RadioGroupItem } from "@/components/done/radio-group"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/not-done/menubar"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  DataTable,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
  FloatingAction,
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
} from "@/components/reviewing"
import { columns } from "@/components/reviewing/data-table.components"
import { fetchUsers } from "@/components/reviewing/data-table.input"
import { ToastAction } from "@/components/reviewing/toast"
import { toast } from "@/components/reviewing/use-toast"

type RowItem = {
  file: { icon: ReactElement; label: string }
  author: { label: string; status: string }
  lastUpdated: { label: string; timestamp: number }
  lastUpdate: { icon: ReactElement; label: string }
}

type ColumnItem = { columnKey: string; label: string }

const fontSize = 22
export const rowItems: Array<RowItem> = [
  {
    file: {
      label: "Meeting notes",
      icon: <DocumentRegular fontSize={fontSize} />,
    },
    author: { label: "Max Mustermann", status: "online" },
    lastUpdated: { label: "7h ago", timestamp: 1 },
    lastUpdate: {
      label: "You edited this",
      icon: <EditRegular fontSize={fontSize} />,
    },
  },
  {
    file: {
      label: "Thursday presentation",
      icon: <FolderRegular fontSize={fontSize} />,
    },
    author: { label: "Erika Mustermann", status: "busy" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
    lastUpdate: {
      label: "You recently opened this",
      icon: <OpenRegular fontSize={fontSize} />,
    },
  },
  {
    file: {
      label: "Training recording",
      icon: <VideoRegular fontSize={fontSize} />,
    },
    author: { label: "John Doe", status: "away" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
    lastUpdate: {
      label: "You recently opened this",
      icon: <OpenRegular fontSize={fontSize} />,
    },
  },
  {
    file: {
      label: "Purchase order",
      icon: <DocumentPdfRegular fontSize={fontSize} />,
    },
    author: { label: "Jane Doe", status: "offline" },
    lastUpdated: { label: "Tue at 9:30 AM", timestamp: 3 },
    lastUpdate: {
      label: "You shared this in a Teams chat",
      icon: <PeopleRegular fontSize={fontSize} />,
    },
  },
]

export const columnItems: Array<ColumnItem> = [
  { columnKey: "file", label: "File" },
  { columnKey: "author", label: "Author" },
  { columnKey: "lastUpdated", label: "Last updated" },
  { columnKey: "lastUpdate", label: "Last update" },
]

export const frameworks = [
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

export const components = [
  {
    header: "Button",
    subText: "Button triggers an action or event when activated.",
    cards: [
      {
        cardHeader: "Variants",
        cardSubtext: (
          <div className="inline">
            <code>(undefined)</code>: the button appears with the default style
            <br />
            <code>primary</code>: emphasizes the button as a primary action.
            <br />
            <code>outline</code>: removes background styling.
            <br />
            <code>subtle</code>: minimizes emphasis to blend into the background
            until hovered or focused
            <br />
            <code>transparent</code>: removes background and border styling.
            <br />
          </div>
        ),
        cardComponent: (
          <div className="flex gap-4">
            <Button shape="square" variant="primary">
              Primary
            </Button>
            <Button variant="secondary">Secondary</Button>
            <Button shape="circular" variant="outline">
              Outline
            </Button>
            <Button variant="subtle">Subtle</Button>
            <Button variant="transparent">Transparent</Button>
          </div>
        ),
      },
      {
        cardHeader: "Toogle",
        cardSubtext:
          "Button has an icon slot that, if specified, renders an icon either before or after the children, as specified by the iconPosition prop.",
        cardComponent: (
          <div className="flex gap-4">
            <Button toggle />
            <Button toggle variant="secondary" />
            <Button toggle variant="outline" />
            <Button toggle variant="subtle" />
            <Button toggle variant="transparent" />
          </div>
        ),
      },
      {
        cardHeader: "Disabled",
        cardSubtext: (
          <div className="inline">
            A button can be <code>disabled</code> or{" "}
            <code>disabledFocusable</code>. <code>disabledFocusable</code> is
            used in scenarios where it is important to keep a consistent tab
            order for screen reader and keyboard users. The primary example of
            this pattern is when the disabled button is in a menu or a
            commandbar and is seldom used for standalone buttons.
          </div>
        ),
        cardComponent: (
          <div className="flex gap-4">
            <Button disabled>Primary</Button>
            <Button disabled variant="secondary">
              Secondary
            </Button>
            <Button disabled variant="outline">
              Outline
            </Button>
            <Button disabled variant="subtle">
              Subtle
            </Button>
            <Button disabled variant="transparent">
              Transparent
            </Button>
          </div>
        ),
      },
    ],
  },
  {
    header: "Input",
    subText: "An input component. Enter text into the input.",
    cards: [
      {
        cardHeader: "Appearance",
        cardSubtext:
          "  An input can have different appearances. The colors adjacent to the input should have a sufficient contrast. Particularly, the color of input with filled darker and lighter styles needs to provide greater than 3 to 1 contrast ratio against the immediate surrounding color to pass accessibility requirements.",
        cardComponent: (
          <div className="flex gap-4">
            <Input
              labelText="Example of"
              placeholder="1000"
              helperText="Helper text"
              type="number"
            >
              <InputLeftAddon>$</InputLeftAddon>
              <InputRightAddon>.00</InputRightAddon>
            </Input>
            <Input
              variant="underline"
              labelText="Example of"
              placeholder="A Outline Input"
              helperText="Helper text"
            >
              <InputLeftAddon>icon</InputLeftAddon>
            </Input>
            <Input
              variant="filledDark"
              labelText="Example of "
              placeholder="A FilledDark Input"
              helperText="Helper text"
            >
              <InputLeftAddon>icon</InputLeftAddon>
            </Input>
            <Input
              variant="filledLight"
              labelText="Warning of"
              placeholder="A FilledLight Input"
              helperText="Helper text"
            >
              <InputLeftAddon>icon</InputLeftAddon>
            </Input>
          </div>
        ),
      },
      {
        cardComponent: (
          <div>
            <h2 className={"font-extrabold"}>Content before/after</h2>
            <h2>
              An input can have elements such as an icon or a button before or
              after the entered text. These elements are displayed inside the
              input border.
            </h2>
            <h2>heres an input with a left addon</h2>
            <Input
              variant={"filledLight"}
              labelText={"Left Addon"}
              placeholder={
                "The Addon is on the left! this addon is a dollar sign , for a money ammount input"
              }
            >
              <InputLeftAddon>$</InputLeftAddon>
            </Input>
            <Input
              variant={"filledLight"}
              labelText={"Right Addon"}
              placeholder={
                "The Addon is on the right! this addon is a percent sign , for a percentage input"
              }
            >
              <InputRightAddon>%</InputRightAddon>
            </Input>
          </div>
        ),
      },
      {
        cardComponent: (
          <div>
            <h2 className={"font-extrabold"}>Inline</h2>
            <h2>An input can be rendered inline with text.</h2>
            <h2 className={"flex flex-row gap-2"}>
              {" "}
              this{" "}
              <Input
                className={" "}
                placeholder={"inline input"}
                aria-label={"input"}
              ></Input>{" "}
              is rendered inline{" "}
            </h2>
          </div>
        ),
      },
      {
        cardComponent: (
          <div>
            <h2 className={"font-extrabold"}>Placeholder</h2>
            <h2>
              An input can have placeholder text. If using the placeholder as a
              label (which is not recommended for usability), be sure to provide
              an aria-label for screen reader users.
            </h2>
          </div>
        ),
      },
    ],
  },
  {
    header: "Combobox",
    subText:
      "A combobox combines a text field and a dropdown giving people a way to select an option from a list or enter their own choice.",
    cards: [
      {
        cardHeader: "",
        cardSubtext: "",
        cardComponent: (
          <Combobox
            emptyIndicator="uo"
            selectedOptions={[
              { value: "next.js", label: "Next.js" },
              { value: "remix", label: "Remix" },
            ]}
            tags
            multiselect
            creatable
            placeholder="Select you favorite frameworks"
            options={frameworks}
          />
        ),
      },
    ],
  },
  {
    header: "Divider",
    subText:
      "A Select allows one option to be selected from multiple options. The Select component is a wrapper around the native <select> element.",
    cards: [
      {
        cardHeader: "",
        cardSubtext: "",
        cardComponent: (
          <div className="flex h-fit w-full flex-col gap-10">
            <Divider orientation="horizontal" align="center">
              1
            </Divider>

            <Divider variant="subtle" orientation="horizontal" align="start">
              2
            </Divider>
            <Divider variant="brand" orientation="horizontal" align="center">
              3
            </Divider>
            <Divider variant="strong" orientation="horizontal" align="end">
              4
            </Divider>
          </div>
        ),
      },
    ],
  },
  {
    header: "Select",
    subText:
      "A Select allows one option to be selected from multiple options. The Select component is a wrapper around the native <select> element.",
    cards: [
      {
        cardHeader: "",
        cardSubtext: "",
        cardComponent: (
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
        ),
      },
    ],
  },
  {
    header: "Drawer",
    subText: (
      <div className="flex flex-col">
        <div>
          The Drawer gives users a quick entry point to configuration and
          information. It should be used when retaining context is beneficial to
          users.
        </div>
        <br />
        <div>There are three main components to represent a Drawer:</div>
        <ul className="list-disc pl-8">
          <li>
            <code>OverlayDrawer</code>: An overlay Drawer renders on top of the
            whole page. By default blocks the screen and will require the user's
            full attention. Uses Dialog component under the hood.
          </li>
          <li>
            <code>InlineDrawer</code>: An inline Drawer renders within a
            container and can be placed next to any content.
          </li>
          <li>
            <code>Drawer</code>: A combination of OverlayDrawer and
            InlineDrawer. Used when toggling between the two modes is necessary.
            Often used for responsiveness.
          </li>
        </ul>
      </div>
    ),
    cards: [
      {
        cardHeader: "",
        cardSubtext: "",
        cardComponent: (
          <Drawer position="bottom">
            <DrawerTrigger className="dark:text-whitesmoke active:gray-200 duration-400 rounded-md bg-brand-primary px-4 py-1 text-white hover:bg-[#115EA3] active:border-brand-secondary active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
              Open drawer
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader className="flex flex-col items-center">
                Im the header!
              </DrawerHeader>
              <DrawerDescription className={" text-slate-50"}>
                And i the content
              </DrawerDescription>
              <DrawerFooter>aaaaaaa</DrawerFooter>
            </DrawerContent>
          </Drawer>
        ),
      },
    ],
  },
  {
    header: "Dialog",
    subText: (
      <div className="inline">
        <code>Dialog</code> is a window overlaid on either the primary window or
        another dialog window. Windows under a modal dialog are inert. That is,
        users cannot interact with content outside an active dialog window.
        Inert content outside an active dialog is typically visually obscured or
        dimmed so it is difficult to discern, and in some implementations,
        attempts to interact with the inert content cause the dialog to close.
      </div>
    ),
    cards: [
      {
        cardHeader: "",
        cardSubtext: "",
        cardComponent: (
          <Dialog nonModal>
            <DialogTrigger>Open Dialog</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>This is a dialog.</DialogTitle>
              </DialogHeader>
              <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam exercitationem cumque repellendus eaque est dolor eius
                expedita nulla ullam? Tenetur reprehenderit aut voluptatum
                impedit voluptates in natus iure cumque eaque?
              </h2>
              <div className="flex flex-row justify-end">
                <Button className="mr-2" size="default" variant="secondary">
                  Deny
                </Button>
                <Button className="">Agree</Button>
              </div>
            </DialogContent>
          </Dialog>
        ),
      },
    ],
  },
  {
    header: "Tablist",
    subText:
      "A tab list provides single selection from tabs. When a tab is selected, the application displays content associated with the selected tab and hides other content. Each tab typically contains a text header and often includes an icon.",
    cards: [
      {
        cardHeader: "",
        cardSubtext: "",
        cardComponent: (
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
        ),
      },
    ],
  },
  {
    header: "DataGrid",
    subText: (
      <span className="inline">
        This component is a higher level extension of the <code>Table</code>
        primitive component. <code>DataGrid</code> is a feature-rich, so there
        should always be full feature parity with what can be achieved with
        primitives. This component is <strong>opinionated</strong> and this is
        intentional. If the desired scenario can be achieved easily and does not
        vary too much from documented examples, it can be very convenient. If
        the desired scenario varies a lot from the documented examples please
        use the Table components with another state management solution of
        choice.
      </span>
    ),
    cards: [
      {
        cardHeader: "",
        cardSubtext: "",
        cardComponent: (
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
        ),
      },
    ],
  },
  {
    header: "Table",
    subText: (
      <>
        <blockquote>
          💡 This component is considered <strong>low-level</strong> and should
          be used when there is a need for more <strong>customization</strong>
          and support for <strong>non-standard features</strong>. Please check
          out the <strong>DataGrid component</strong> if you don't need lots of
          customization and rely on common features. There is less work involved
          and you will benefit from first class Microsoft design and
          accessibility support.
        </blockquote>
        A Table displays sets of two-dimensional data. The primitive components
        can be fully customized to support different feature sets.
      </>
    ),
    cards: [
      {
        cardHeader: "",
        cardSubtext: "",
        cardComponent: (
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
                          size="sm"
                          // name={author.label}
                        >
                          <AvatarImage
                            src="https://github.com/shadcn.pn"
                            alt="@shadcn"
                          />
                          <AvatarFallback size="sm">
                            {author.label}
                          </AvatarFallback>
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
        ),
      },
    ],
  },
  {
    header: "Slider",
    subText:
      "A Slider represents an input that allows user to choose a value from within a specific range.",
    cards: [
      {
        cardHeader: "",
        cardSubtext: "",
        cardComponent: <Slider size={"sm"} step={1} />,
      },
    ],
  },
  {
    header: "Accordion",
    subText:
      "An accordion allows users to toggle the display of content by expanding or collapsing sections.",
    cards: [
      {
        cardHeader: "",
        cardSubtext: "",
        cardComponent: (
          <Accordion type="" size="md" collapsible className="w-full">
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
                Yes. It's animated by default with a smooth expanding motion,
                you can disable animations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ),
      },
      {
        cardHeader: "Multiple",
        cardSubtext:
          "An accordion supports multiple panels expanded simultaneously.\n" +
          "              Since it's not simple to determine which panel will be opened by\n" +
          "              default, multiple will also be collapsed by default on the first\n" +
          "              render.",
        cardComponent: (
          <Accordion
            type="multiple"
            size="md"
            collapsible={true}
            className="w-full"
          >
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
                Yes. It's animated by default with a smooth expanding motion,
                you can disable animations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ),
      },

      {
          cardHeader:"Navigation",
          cardSubtext:"An accordion supports keyboard navigation.",
        cardComponent: (
          <div>
            <Accordion
              defaultValue="item-2"
              type="multiple"
              size="md"
              collapsible={true}
              className="w-full"
            >
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
                  Yes. It's animated by default with a smooth expanding motion,
                  you can disable animations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ),
      },
      {
          cardHeader: "Multi Panels",
          cardSubtext:"An accordion supports multiple panels expanded simultaneously.\n" +
              "              Since it's not simple to determine which panel will be opened by\n" +
              "              default, multiple will also be collapsed by default on the first\n" +
              "              render.",
        cardComponent: (
          <div>

            <Accordion
              defaultValue="item-2"
              type="multiple"
              size="md"
              collapsible={true}
              className="w-full"
            >
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
                  Yes. It's animated by default with a smooth expanding motion,
                  you can disable animations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ),
      },
      {
          cardHeader:"Open Items",
          cardSubtext:" An accordion can have defined open items. If no open item is\n" +
              "              present, all panels will be closed by default.",
        cardComponent: (
          <div>

            <Accordion
              defaultValue="item-2"
              type="multiple"
              size="md"
              collapsible={true}
              className="w-full"
            >
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
                  Yes. It's animated by default with a smooth expanding motion,
                  you can disable animations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ),
      },
      {
          cardHeader:("Expand Icon Position"),
          cardSubtext:" An accordion supports multiple panels expanded simultaneously. Since it's not simple to determine which panel will be opened bydefault, multiple will also be collapsed by default on the first render",

        cardComponent: (
          <div>
            <h2 className={"font-extrabold"}></h2>
            <h2>

            </h2>
            <Accordion
              defaultValue="item-2"
              type="multiple"
              size="md"
              collapsible={true}
              className="w-full"
            >
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
                  Yes. It's animated by default with a smooth expanding motion,
                  you can disable animations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ),
      },
      {
          cardHeader:"With Icon",
        cardComponent: (
      <div>
            <h2>An accordion header can contain an icon.</h2>
            <Accordion
              defaultValue="item-2"
              type="multiple"
              size="md"
              collapsible={true}
              className="w-full"
            >
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
                  Yes. It's animated by default with a smooth expanding motion,
                  you can disable animations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ),
      },
      {
          cardHeader:"Collapsible",
        cardComponent: (
          <div>
            <h2 className={"font-extrabold"}>Collapsible</h2>
            <h2>An accordion header can contain an icon.</h2>
            <Accordion
              defaultValue="item-2"
              type="multiple"
              size="md"
              collapsible={true}
              className="w-full"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger> </AccordionTrigger>
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
                  Yes. It's animated by default with a smooth expanding motion,
                  you can disable animations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ),
      },
    ],
  },
  {
    header: "Avatar",
    subText: (
      <>
        An Avatar is a graphical representation of a user, team, or entity.
        <br />
        Avatar can display an image, icon, or initials, and supports various
        sizes and shapes.
      </>
    ),
    cards: [
      {
        cardHeader: "",
        cardSubtext: "",
        cardComponent: (
          <Avatar status="online" size="sm">
            {/*<AvatarImage src="https://avatars.githubusercontent.com/u/124599?v=4" />*/}
            <AvatarFallback size={""}>Josh Well</AvatarFallback>
          </Avatar>
        ),
      },
      {
        cardComponent: (
          <div>
            <h2 className={"font-extrabold"}>Image</h2>
            <h2>
              An avatar can display an image. It is recommended to also include
              a name in addition to the image: the initials from the name are
              displayed while the image is loading, and the name makes the
              Avatar accessible to screen readers.
            </h2>
            <Accordion>a</Accordion>
          </div>
        ),
      },
    ],
  },
  {
    header: "Switch",
    subText: (
      <>
        A switch represents a physical switch that allows someone to choose
        between two mutually exclusive options. For example, "On/Off" and
        "Show/Hide". Choosing an option should produce an immediate result.
      </>
    ),
    cards: [
      { cardHeader: "", cardSubtext: "", cardComponent: <Switch /> },
      {
        cardComponent: (
          <div className={"flex flex-col"}>
            <h2 className="font-extrabold">Required</h2>
            <h2>
              When a Switch is marked as <code>required</code>, its label also
              gets the required styling
            </h2>
            <div className={"flex flex-row"}>
              <Switch className={"mt-4"} />
              <Label className={"ml-2 mt-4"} required={true}>
                Required
              </Label>
            </div>
          </div>
        ),
      },
      {
        cardComponent: (
          <div className={"flex flex-col"}>
            <h2 className="font-extrabold">Label Wrapping</h2>
            <h2>
              The label will wrap if it is wider than the available space. The
              Switch track will stay aligned to the first line of text.
            </h2>
          </div>
        ),
      },
    ],
  },
  {
    header: "Textarea",
    subText: <>Textarea allows the user to enter and edit multiline text.</>,
    cards: [
      {
        cardHeader: "",
        cardSubtext: "",
        cardComponent: (
          <Textarea
            error={false}
            className="font-bold text-black dark:text-white"
            labelText="TextArea"
          />
        ),
      },
    ],
  },
  {
    header: "RadioGroup",
    subText:
      " A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.",
    cards: [
      {
        cardHeader: "",
        cardSubtext: "",
        cardComponent: (
          <RadioGroup defaultValue="1">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1" id="r1" />
              <Label htmlFor="r1">Example 1</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="2" id="r2" />
              <Label htmlFor="r2">Example 2</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="3" id="r3" />
              <Label htmlFor="r3">Example 3</Label>
            </div>
          </RadioGroup>
        ),
      },
      {
        cardComponent: (
          <div>
            <h2 className={"font-extrabold"}>Layout</h2>
            <h2>
              This component has layout options, you can either have it as a
              horizontal radio group, or as a vertical radio group, you can take
              advantage of this to{" "}
            </h2>
          </div>
        ),
      },
    ],
  },
  {
    header: "Card",
    subText:
      "A card is a container that holds information and actions related to a single concept or object, like a document or a contact Cards can give information prominence and create predictable patterns. While they're very flexible, it's important to use them consistently for particular use cases across experiences",
    cards: [
      {
        cardHeader: "",
        cardSubtext: "",
        cardComponent: (
          <div className="flex flex-col items-center justify-center gap-10">
            <Card
              className="w-[540px]"
              cardPreview="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.EAf0oMwvFLL7MMZOIEJKLwHaC9%26pid%3DApi&f=1&ipt=a11aa5dcda31eee8bdc446511e1ce983681641249334e18726f3b67e7e6bba8c&ipo=images"
            >
              <CardHeader image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cDhXXBPPmXB0TeWGmhYA-AHaE8%26pid%3DApi&f=1&ipt=cd7797c8ef5c996d9ca56b20a8c65b8df7bb69d45d9afe2e963243aa4e8c43cc&ipo=images">
                <CardTitle>App Name </CardTitle>
                <CardDescription>Developer</CardDescription>
              </CardHeader>
              <CardContent>
                Donut chocolate bar oat cake. Dragée tiramisu lollipop bear
                claw. Marshmallow pastry jujubes toffee sugar plum.
              </CardContent>
              <CardFooter>
                <Button>Button 1</Button>
                <Button variant="secondary">Button 2</Button>
              </CardFooter>
            </Card>
            <Card orientation="horizontal" selectable variant="filled-alt">
              <CardHeader image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cDhXXBPPmXB0TeWGmhYA-AHaE8%26pid%3DApi&f=1&ipt=cd7797c8ef5c996d9ca56b20a8c65b8df7bb69d45d9afe2e963243aa4e8c43cc&ipo=images">
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <FloatingAction>
                <BsThreeDots />
              </FloatingAction>
            </Card>
            <Card size="lg" variant="outline">
              <CardHeader>
                <CardTitle>Breakfast in Paris</CardTitle>
                <CardDescription>
                  Start your day off right with a delicious and authentic
                  Parisian breakfast.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div> A fresh croissant</div>
                <div> A cup of coffee</div>
              </CardContent>
            </Card>
            <Card variant="subtle">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>Card Content</CardContent>
              <CardFooter>Card Footer</CardFooter>
            </Card>
          </div>
        ),
      },
    ],
  },
  {
    header: "Checkbox",
    subText: <></>,
    cards: [
      {
        cardHeader: "",
        cardSubtext: "",
        cardComponent: (
          <div className="flex gap-2">
            <Checkbox
              size="large"
              onChange={(checked) => console.log(checked)}
            />
            <Checkbox checked="indeterminate" />
          </div>
        ),
      },
    ],
  },
  {
    header: "InfoLabel",
    subText: <></>,
    cards: [
      {
        cardHeader: "",
        cardSubtext: "",
        cardComponent: (
          <div className="flex gap-2">
            <InfoLabel size={"lg"}>Label</InfoLabel>
          </div>
        ),
      },
    ],
  },
  {
    header: "Menu",
    subText: <></>,
    cards: [
      {
        cardHeader: "",
        cardSubtext: "",
        cardComponent: (
          <div className="flex gap-2">
            <Menubar onValueChange={(e) => console.log(e)}>
              <MenubarMenu value={"share"}>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>New Window</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Share</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Print</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        ),
      },
    ],
  },
  {
    header: "Link",
    subText: <></>,
    cards: [
      {
        cardHeader: "",
        cardSubtext: "",
        cardComponent: (
          <div className="flex flex-col gap-2">
            <Link href="#">Link default</Link>
            <Link href="#" variant="subtle">
              Link subtle
            </Link>
            <Link href="#" disabled>
              disabled
            </Link>
          </div>
        ),
      },
    ],
  },
  {
    header: "Toast",
    subText: <></>,
    cards: [
      {
        cardHeader: "",
        cardSubtext: "",
        cardComponent: (
          <div className="flex flex-col gap-2">
            <Button
              variant="outline"
              onClick={() => {
                toast({
                  title: "Scheduled: Catch up ",
                  description: "Friday, February 10, 2023 at 5:57 PM",
                  action: (
                    <div className="flex gap-4">
                      <ToastAction altText="Goto schedule to undo">
                        Undo
                      </ToastAction>{" "}
                      <ToastAction altText="Goto schedule to undo">
                        Undo
                      </ToastAction>
                    </div>
                  ),
                })
              }}
            >
              Add to calendar
            </Button>
          </div>
        ),
      },
    ],
  },
  {
    header: "MensageBar",
    subText: <></>,
    cards: [
      {
        cardHeader: "",
        cardSubtext: "",
        cardComponent: (
          <div className="flex flex-col gap-2">
            <Button
              variant="outline"
              onClick={() => {
                toast({
                  messageBar: true,
                  variant: "info",
                  title: "Scheduled: Catch up ",
                  description: "Friday, February 10, 2023 at 5:57 PM",
                  action: (
                    <>
                      <ToastAction altText="Goto schedule to undo">
                        Undo
                      </ToastAction>
                      <ToastAction altText="Goto schedule to undo">
                        Undo
                      </ToastAction>
                    </>
                  ),
                })
              }}
            >
              Add to calendar
            </Button>
          </div>
        ),
      },
    ],
  },
] as const

export const sideBar = {
  Concepts: ["2", "1"].sort(),
  Theme: ["1", "2"].sort(),
  Components: components.map((component) => component.header).sort(),
} as const
