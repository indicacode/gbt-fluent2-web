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
          cardHeader:"Placeholder",
          cardSubtext:" An input can have placeholder text. If using the placeholder as a\n" +
              "              label (which is not recommended for usability), be sure to provide\n" +
              "              an aria-label for screen reader users.",
        cardComponent: (
          <div>
            <Input placeholder={"This is the placeholder text!"}></Input>
          </div>
        ),
      },
        {
            cardHeader:"Size",
            cardSubtext:" An input can have different sizes. Those being small (sm) medium (md) and large (lg)",
            cardComponent: (
                <div className={"flex  flex-col"}>
                    <Input  size={""} placeholder={"Small Input"}></Input>

                </div>
            ),
        },
        {
            cardHeader:"Type",
            cardSubtext:" An input can have a custom text-based type such as email, url, or password based on the type of value the user will enter. Note that no custom styling is currently applied for alternative types, and some types may activate browser-default styling which does not match the Fluent design language.",
            cardComponent: (
                <div>
                    <Input placeholder={"This is the placeholder text!"}></Input>
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

        {
            cardHeader: "Filtering",
            cardSubtext:"We provide useComboboxFilter() hook to filter the options based on the user-typed string. It can be configured for a custom filter function, custom message, and custom render function. We recommend using filtering when creating a freeform Combobox.",
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
        {
            cardHeader: "Multiselect With Tags",
            cardSubtext:"Combobox can display multiselect values in custom tags. This example uses a controlled selection so the tags can be used to remove selected options Best pets",
            cardComponent: (
                <Combobox
                    emptyIndicator="uo"

                    tags
                    multiselect
                    creatable
                    placeholder="Select you favorite frameworks"
                    options={frameworks}
                />
            ),
        },
        {
            cardHeader: "Multiselect With Value Strings",
            cardSubtext:"Multiselect Combobox supports using a controlled value todisplay selected options when not in focus, similar to v8 behavior.We recommend using tags rather than the value string when possible,since they have better UX and accessibility.s",
            cardComponent: (
                <Combobox
                    emptyIndicator="uo"

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
        {
            cardHeader: "Vertical",
            cardSubtext: "",
            cardComponent: (
                <div className="flex h-fit w-full flex-col ">
                    <Divider orientation="vertical" align="center">
                        1
                    </Divider>
                </div>
            ),
        },
        {
            cardHeader: "Appearance",
            cardSubtext: "A divider can have a brand, subtle, or strong appearance. When not specified, it has its default experience",
            cardComponent: (
                <div className="flex h-fit w-full flex-col ">
                    <Divider orientation="horizontal" align="center">
                        1
                    </Divider>

                    <Divider variant="subtle" orientation="horizontal" align="center">
                        2
                    </Divider>
                    <Divider variant="brand" orientation="horizontal" align="center">
                        3
                    </Divider>
                    <Divider variant="strong" orientation="horizontal" align="center">
                        4
                    </Divider>
                </div>
            ),
        },
        {
            cardHeader: "Align Content",
            cardSubtext: "The label associated with the divider can be aligned at the start, center, or end of the divider line.",
            cardComponent: (
                <div className="flex h-fit w-full flex-col ">
                    <Divider orientation="horizontal" align="start">
                        Start
                    </Divider>
                    <Divider variant="subtle" orientation="horizontal" align="center">
                        Center
                    </Divider>
                    <Divider variant="brand" orientation="horizontal" align="end">
                        End
                    </Divider>
                </div>

            ),
        },
        {
            cardHeader: "Custom Styles",
            cardSubtext: "A divider can have custom styles applied to both the label and the line.",
            cardComponent: (
                <div className="flex h-fit w-full flex-col ">
                    <Divider  orientation="horizontal" align="start">
                        Start
                    </Divider>
                    <Divider variant="subtle" orientation="horizontal" align="center">
                        Center
                    </Divider>
                    <Divider variant="brand"  orientation="horizontal" align="end">
                        End
                    </Divider>
                    <Divider variant="strong" orientation="horizontal" align="center">
                        4
                    </Divider>
                    <Divider variant={"primary"} orientation={"horizontal"} align={"center"}>
                        5
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
      <div className="mt-4 flex flex-col">
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
            InlineDrawer. Used when togglin g between the two modes is necessary.
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
        {
            cardHeader: "Overlay",
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
        {
            cardHeader: "Overlay No Modal",
            cardSubtext: "An overlay is optional depending on whether or not interacting with the background content is beneficial to the user's context/scenario. By setting the modalType prop to non-modal, the Drawer will not be blocking and the user can interact with the background content."
                ,
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
        {
            cardHeader: "Inline",
            cardSubtext: "InlineDrawer is often used for navigation that is not dismissible. As it is on the same level as the main surface, users can still interact with other UI elements. This could be useful for swapping between different items in the main surface."
            ,
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
        {
            cardHeader: "Position",
            cardSubtext: "When a Drawer is invoked, it slides in from either the left or right side, or bottom of the screen. This can be specified by the position prop."
            ,
            cardComponent: (
                <div>
                <Drawer position="bottom">
                    <DrawerTrigger className="dark:text-whitesmoke active:gray-200 duration-400 rounded-md bg-brand-primary px-4 py-1 text-white hover:bg-[#115EA3] active:border-brand-secondary active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
                        Open drawer from the bottom
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
                    <Drawer position="right">
                        <DrawerTrigger className="dark:text-whitesmoke active:gray-200 duration-400 rounded-md bg-brand-primary ml-2 px-4 py-1 text-white hover:bg-[#115EA3] active:border-brand-secondary active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
                            Open drawer from the right
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
                    <Drawer position="left">
                        <DrawerTrigger className="dark:text-whitesmoke active:gray-200 duration-400 rounded-md bg-brand-primary mt-2 px-4 py-1 text-white hover:bg-[#115EA3] active:border-brand-secondary active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
                            Open drawer from the left
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

                </div>
            ),
        },
        {
            cardHeader: "Size",
            cardSubtext: "The size prop controls the width of the drawer. The default is small."
            ,
            cardComponent: (
                <div className={""}>

                    <Drawer size={"small"} position="right">
                        <DrawerTrigger className="dark:text-whitesmoke active:gray-200 duration-400 rounded-md bg-brand-primary  px-4 py-1 text-white hover:bg-[#115EA3] active:border-brand-secondary active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
                            Open small drawer
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
                    <Drawer  position="bottom">
                        <DrawerTrigger className="dark:text-whitesmoke active:gray-200 duration-400 rounded-md bg-brand-primary ml-2 px-4 py-1 text-white hover:bg-[#115EA3] active:border-brand-secondary active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
                            Open medium drawer
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
                    <Drawer  size={"lg"} position="right">
                        <DrawerTrigger className="dark:text-whitesmoke active:gray-200 duration-400 rounded-md bg-brand-primary ml-2 px-4 py-1 text-white hover:bg-[#115EA3] active:border-brand-secondary active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
                            Open large drawer
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
                </div>
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
        cardHeader: "Alert",
        cardSubtext: "An alert Dialog is a modal dialog that interrupts the user's workflow to communicate an important message and acquire a response. Examples include action confirmation prompts and error message confirmations. The alert Dialog role enables assistive technologies and browsers to distinguish alert dialogs from other dialogs so they have the option of giving alert dialogs special treatment, such as playing a system alert sound. By default clicking on backdrop will not dismiss an alert Dialog.",
        cardComponent: (
          <Dialog   >
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
                <DialogTrigger className="mr-2" size="default" variant="secondary">
                    <Button variant={"secondary"}>
                  Deny
                    </Button>
                </DialogTrigger>
                <DialogTrigger className=""> <Button variant={"primary"}>Agree</Button></DialogTrigger>
              </div>
            </DialogContent>
          </Dialog>
        ),
      },
        {
            cardHeader: "Scrolling Long Content",
            cardSubtext: "By default DialogContent should grow until it fits viewport size, overflowed content will be scrollable",
            cardComponent: (
                <Dialog   >
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
                            <DialogTrigger className="mr-2" size="default" variant="secondary">
                                <Button variant={"secondary"}>
                                    Deny
                                </Button>
                            </DialogTrigger>
                            <DialogTrigger className=""> <Button variant={"primary"}>Agree</Button></DialogTrigger>
                        </div>
                    </DialogContent>
                </Dialog>
            ),
        },
        {
            cardHeader: "Actions",
            cardSubtext: "Dialogs should be used for providing the user with quick prompt options where decisions should be made quickly. They should be used for actions that are not reversible, such as deleting an item.\n" +
                "\n" +
                "DialogActions should be used to provide the user with a set of actions to choose from. The actions should be clear and concise, and should be used to guide the user to the next step in the process.",
            cardComponent: (
                <Dialog   >
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
                            <DialogTrigger className="mr-2" size="default" variant="secondary">
                                <Button variant={"secondary"}>
                                    Deny
                                </Button>
                            </DialogTrigger>
                            <DialogTrigger className=""> <Button variant={"primary"}>Agree</Button></DialogTrigger>
                        </div>
                    </DialogContent>
                </Dialog>
            ),
        },
        {
            cardHeader: "Fluid Actions",
            cardSubtext: "Use the fluid prop on the DialogActions component so that it spans the entire width of the dialog. This prop can be useful for having large number of actions.",
            cardComponent: (
                <Dialog   >
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
                            <DialogTrigger className="mr-2" size="default" variant="secondary">
                                <Button variant={"secondary"}>
                                    Deny
                                </Button>
                            </DialogTrigger>
                            <DialogTrigger className=""> <Button variant={"primary"}>Agree</Button></DialogTrigger>
                        </div>
                    </DialogContent>
                </Dialog>
            ),
        },
        {
            cardHeader: "No Focusable Element",
            cardSubtext: " Dialog should always have at least one focusable element. Some accessibility issues might happen if no focusable element is provided, like this one caught in Talkback.\n" +
                "\n" +
                "In the case when there is no focusable element inside a Dialog the only way to close the Dialog would be clicking on the backdrop.",
            cardComponent: (
                <Dialog   >
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
                            <DialogTrigger className="mr-2" size="default" variant="secondary">
                                <Button variant={"secondary"}>
                                    Deny
                                </Button>
                            </DialogTrigger>
                            <DialogTrigger className=""> <Button variant={"primary"}>Agree</Button></DialogTrigger>
                        </div>
                    </DialogContent>
                </Dialog>
            ),
        },
        {
            cardHeader: "Change Focus",
            cardSubtext: "Changing the default focused element can be done in an effect",
            cardComponent: (
                <Dialog   >
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
                            <DialogTrigger className="mr-2" size="default" variant="secondary">
                                <Button variant={"secondary"}>
                                    Deny
                                </Button>
                            </DialogTrigger>
                            <DialogTrigger className=""> <Button variant={"primary"}>Agree</Button></DialogTrigger>
                        </div>
                    </DialogContent>
                </Dialog>
            ),
        },
        {
            cardHeader: "Trigger Outside Dialog",
            cardSubtext: " When using a Dialog without a DialogTrigger (or when using a DialogTrigger outside of a Dialog), it becomes your responsibility to control some of the dialog's behavior.You must make sure that the open state is set accordingly to the dialog's visibility (mostly this means to properly react to the events provided by onOpenChange callback on Dialog component).You must make sure that focus is properly restored once the dialog is closed (this can be achieved by using the useRestoreFocusTarget hook, or by manually invoking .focus() on the target element).The example bellow showcases both explicit responsibilities:When using a Dialog without a DialogTrigger (or when using a DialogTrigger outside of a Dialog), it becomes your responsibility to control some of the dialog's behavior.You must make sure that the open state is set accordingly to the dialog's visibility (mostly this means to properly react to the events provided by onOpenChange callback on Dialog component).You must make sure that focus is properly restored once the dialog is closed (this can be achieved by using the useRestoreFocusTarget hook, or by manually invoking .focus() on the target element). The example bellow showcases both explicit responsibilities",
            cardComponent: (
                <Dialog   >
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
                            <DialogTrigger className="mr-2" size="default" variant="secondary">
                                <Button variant={"secondary"}>
                                    Deny
                                </Button>
                            </DialogTrigger>
                            <DialogTrigger className=""> <Button variant={"primary"}>Agree</Button></DialogTrigger>
                        </div>
                    </DialogContent>
                </Dialog>
            ),
        },
        {
            cardHeader: "No Focusable Element",
            cardSubtext: " Dialog should always have at least one focusable element. Some accessibility issues might happen if no focusable element is provided, like this one caught in Talkback.\n" +
                "\n" +
                "In the case when there is no focusable element inside a Dialog the only way to close the Dialog would be clicking on the backdrop.",
            cardComponent: (
                <Dialog   >
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
                            <DialogTrigger className="mr-2" size="default" variant="secondary">
                                <Button variant={"secondary"}>
                                    Deny
                                </Button>
                            </DialogTrigger>
                            <DialogTrigger className=""> <Button variant={"primary"}>Agree</Button></DialogTrigger>
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
      <span className="inliData e Hora: 9:54 , **10/06/2024**ne">
        This component is aStatus da Casa: INSTÁVEL / *CAÍDA* higher level extension of the <code>Table</code>
        primitive componentCasa: https://blbet2.com. <code>DataGrid</code> is a feature-rich, so there
        should always be fuOperar por sua próprio risco!ll feature parity with what can be achieved with
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
                Yes. Try it for yourself, with a few lines of code you get9
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
            <h2 className={"font-extrabold"}></h2>
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
            <div className={"flex flex-row"}>
          <Avatar status="online" size="sm">
            <AvatarImage src="https://avatars.githubusercontent.com/u/124599?v=4" />
            <AvatarFallback size={""}>Josh Well</AvatarFallback>
          </Avatar>
                <Avatar status="online" size="sm">
                    <AvatarFallback size={""}>Joshua Graham</AvatarFallback>
                </Avatar>
                <Avatar status={"busy"} size="sm">
                    <AvatarFallback size={""}>Ane Parker</AvatarFallback>
                </Avatar>
                <Avatar status={"do-not-disturb"} size="sm">
                    <AvatarFallback size={""}>Helen Pereira</AvatarFallback>
                    <AvatarImage src={""}/>
                </Avatar>
                <Avatar status={"busy"} size="sm">
                    <AvatarFallback size={""}>Johnny Mans</AvatarFallback>
                    <AvatarImage src={"https://images.pexels.com/photos/23909935/pexels-photo-23909935/free-photo-of-moda-tendencia-amor-mulher.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"}/>
                </Avatar>
                <Avatar status={"online"} size="sm">
                    <AvatarFallback size={""}>Jordan Terrence</AvatarFallback>
                    <AvatarImage src={"https://images.pexels.com/photos/22884699/pexels-photo-22884699/free-photo-of-cafeina-cafe-copo-taca.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"}/>
                </Avatar>
                <Avatar status={"online"} size="sm">
                    <AvatarFallback size={""}>Fernanda Almeida</AvatarFallback>
                    <AvatarImage src={"https://images.pexels.com/photos/22814807/pexels-photo-22814807/free-photo-of-moda-tendencia-mulher-modelo.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"}/>
                </Avatar>

            </div>
        ),
      },
      {
          cardHeader: "Image",
          cardSubtext:"An avatar can display an image, It is recommended to also include a name in addition to the image: the initials from the name are displayed while the image is loading, and the name makes the Avatar accessible to screen readers.",
        cardComponent: (
          <div className={"flex flex-row"}>
                    <Avatar status={"away"}>
                        <AvatarFallback>Jordan Herrera</AvatarFallback>
                        <AvatarImage src={"https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=800"}/>
                    </Avatar>
              <Avatar status={"away"}>
                  <AvatarFallback>Kaio Telmo </AvatarFallback>
                  <AvatarImage src={"https://images.pexels.com/photos/24702820/pexels-photo-24702820/free-photo-of-moda-tendencia-pessoas-mulher.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"}/>
              </Avatar>
              <Avatar status={"online"}>
                  <AvatarFallback>Carlos John</AvatarFallback>
                  <AvatarImage src={"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"}/>
              </Avatar>
              <Avatar status={"online"}>
                  <AvatarFallback>Ana Watson</AvatarFallback>
                  <AvatarImage src={"https://images.pexels.com/photos/23201952/pexels-photo-23201952/free-photo-of-comida-alimento-refeicao-restaurante.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"}/>
              </Avatar>
          </div>
        ),
      },
        {
            cardHeader: "Badge",
            cardSubtext:"An avatar can have a badge to indicate presence status. See the PresenceBadge component for more info.\n" +
                "\n",
            cardComponent: (
                <div className={"flex flex-row"}>
                    <Avatar status={"away"}>
                        <AvatarFallback>Jordan Cummings</AvatarFallback>
                        <AvatarImage src={"https://images.pexels.com/photos/23201952/pexels-photo-23201952/free-photo-of-comida-alimento-refeicao-restaurante.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"}/>
                    </Avatar>
                    <Avatar status={"away"}>
                        <AvatarFallback>Kaio Karlos </AvatarFallback>
                        <AvatarImage src={"https://images.pexels.com/photos/24702820/pexels-photo-24702820/free-photo-of-moda-tendencia-pessoas-mulher.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"}/>
                    </Avatar>
                    <Avatar status={"online"}>
                        <AvatarFallback>Jordan Herrera</AvatarFallback>
                        <AvatarImage src={"https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=800"}/>
                    </Avatar>
                    <Avatar status={"online"}>
                        <AvatarFallback>Piccarte Artsy</AvatarFallback>
                        <AvatarImage src={"https://images.pexels.com/photos/23201952/pexels-photo-23201952/free-photo-of-comida-alimento-refeicao-restaurante.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"}/>
                    </Avatar>
                </div>
            ),
        },
        {
            cardHeader: "Avatar Icon",
            cardSubtext:"An avatar can display an image.\n" +
                "It is recommended to also include a name in addition to the image: the initials from the name are displayed while the image is loading, and the name makes the Avatar accessible to screen readers.",
            cardComponent: (
                <div className={"flex flex-row"}>
                    <Avatar status={"away"}>
                        <AvatarFallback>Jordan Herrera</AvatarFallback>
                        <AvatarImage src={"https://images.pexels.com/photos/23961099/pexels-photo-23961099/free-photo-of-homem-casal-conjuges-mulher.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"}/>
                    </Avatar>
                    <Avatar status={"away"}>
                        <AvatarFallback>Kaio Pereira </AvatarFallback>
                        <AvatarImage src={"https://images.pexels.com/photos/24279986/pexels-photo-24279986/free-photo-of-homem-terno-traje-amor.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"}/>
                    </Avatar>
                    <Avatar status={"online"}>
                        <AvatarFallback>Victoria Petes</AvatarFallback>
                        <AvatarImage src={"https://images.pexels.com/photos/21327991/pexels-photo-21327991/free-photo-of-comida-alimento-refeicao-restaurante.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"}/>
                    </Avatar>
                    <Avatar status={"online"}>
                        <AvatarFallback>Loucas Marquise</AvatarFallback>
                        <AvatarImage src={"https://images.pexels.com/photos/23201952/pexels-photo-23201952/free-photo-of-comida-alimento-refeicao-restaurante.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"}/>
                    </Avatar>
                </div>
            ),
        }, {
            cardHeader: "Badge Icon",
            cardSubtext:"An avatar can display an image.\n" +
                "It is recommended to also include a name in addition to the image: the initials from the name are displayed while the image is loading, and the name makes the Avatar accessible to screen readers.",
            cardComponent: (
                <div className={"flex flex-row"}>
                    <Avatar status={"away"}>
                        <AvatarFallback>Jordan Herrera</AvatarFallback>
                        <AvatarImage src={"https://images.pexels.com/photos/23961099/pexels-photo-23961099/free-photo-of-homem-casal-conjuges-mulher.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"}/>
                    </Avatar>
                    <Avatar status={"away"}>
                        <AvatarFallback>Alonso Rencio </AvatarFallback>
                        <AvatarImage src={"https://images.pexels.com/photos/24279986/pexels-photo-24279986/free-photo-of-homem-terno-traje-amor.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"}/>
                    </Avatar>
                    <Avatar status={"online"}>
                        <AvatarFallback>Junior Silva</AvatarFallback>
                        <AvatarImage src={"https://images.pexels.com/photos/21327991/pexels-photo-21327991/free-photo-of-comida-alimento-refeicao-restaurante.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"}/>
                    </Avatar>
                    <Avatar status={"online"}>
                        <AvatarFallback>Loucas Marquise</AvatarFallback>
                        <AvatarImage src={"https://images.pexels.com/photos/23201952/pexels-photo-23201952/free-photo-of-comida-alimento-refeicao-restaurante.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"}/>
                    </Avatar>
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
    subText: <>Checkboxes give people a way to select one or more items from a group, or switch between two mutually exclusive options (checked or unchecked).</>,
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
              <Checkbox

                  size="large"
                  checked={"true"}
                  onChange={(checked) => console.log(checked)}
              />
          </div>
        ),
      },
        {
            cardHeader: "Disabled",
            cardSubtext: "A Checkbox can be disabled.",
            cardComponent: (
                <div className="flex gap-2">
                    <Checkbox
                        disabled={true}
                        size="large"
                        onChange={(checked) => console.log(checked)}
                    />
                    <Checkbox
                        disabled={true}
                        size="large"
                        onChange={(checked) => console.log(checked)}
                        checked={"true"}
                    />
                </div>
            ),
        },
        {
            cardHeader: "Large",
            cardSubtext: "A Checkbox can be large in size.",
            cardComponent: (
                <div className="flex gap-2">
                    <Checkbox

                        size="large"
                        onChange={(checked) => console.log(checked)}
                    />
                    <Checkbox

                        size="large"
                        onChange={(checked) => console.log(checked)}
                        checked={"true"}
                    />
                </div>
            ),
        },
        {
            cardHeader: "Mixed",
            cardSubtext: "A checkbox can be initially mixed (also known as indeterminate) using the checked={indeterminate} property, In this example, the mixed state is used when a group of options has differing values.",
            cardComponent: (
                <div className="flex flex-col gap-2">
                    <div className={"flex text-center items-center flex-row"}>
                    <Checkbox
                        checked={"indeterminate"}
                        size="large"
                        onChange={(checked) => console.log(checked)}
                    />

                        <h2 className={"ml-2"}>All of the options</h2>
                    </div>
                    <div className={"flex text-center items-center flex-row"}>
                        <Checkbox

                            size="large"
                            onChange={(checked) => console.log(checked)}
                        />
                        <h2 className={"ml-2"}>Apples</h2>
                    </div>
                    <div className={"flex text-center items-center flex-row"}>
                        <Checkbox
                            size="large"
                            onChange={(checked) => console.log(checked)}
                        />
                        <h2 className={"ml-2"}>Cherry</h2>
                    </div>
                </div>
            ),
        },
        {
            cardHeader: "Label Before",
            cardSubtext: "The label can be placed before the checkbox.",
            cardComponent: (
                <div className="flex flex-col gap-2">
                    <div className={"flex text-center items-center  flex-row"}>
                    <h2 className={"ml-2"}>Cherries</h2>

                        <Checkbox

                            className={"ml-2"}
                            size="large"
                            onChange={(checked) => console.log(checked)}
                        />

                    </div>
                    <div className={"flex text-center ml-1 items-center flex-row"}>
                    <h2 className={"ml-2"}>Apples</h2>

                        <Checkbox

                            size="large"
                            className={"ml-3"}
                            onChange={(checked) => console.log(checked)}
                        />

                    </div>

                </div>
            ),
        },
        {
            cardHeader: "Circular",
            cardSubtext: "A checkbox can have a circular shape. Usage warning: Unless you are designing a tasks experience, we strongly discourage using this styling variant, as it can be confused with RadioItem",
            cardComponent: (
                <div className="flex gap-2">
                    <Checkbox
                        rounded={true}
                        size="large"
                        onChange={(checked) => console.log(checked)}
                    />
                    <Checkbox
                        rounded={true}
                        size="large"
                        onChange={(checked) => console.log(checked)}
                        checked={"true"}
                    />
                </div>
            ),
        },
        {
            cardHeader: "Required",
            cardSubtext: "When a checkbox is marked as required, its label also gets the required styling.",
            cardComponent: (
                <div className="flex gap-2">
                    <Checkbox
                        rounded={true}
                        size="large"
                        onChange={(checked) => console.log(checked)}
                    />
                    <Checkbox
                        rounded={true}
                        size="large"
                        onChange={(checked) => console.log(checked)}
                        checked={"true"}
                    />
                </div>
            ),
        },
        {
            cardHeader: "Label Wrapping",
            cardSubtext: "The label will wrap if it is wider than the available space. The checkbox indicator will stay aligned to the first line of text.",
            cardComponent: (
                <div className="flex gap-2">
                    <Checkbox
                        rounded={true}
                        size="large"
                        aria-label={"Label Wrapping text"}
                        onChange={(checked) => console.log(checked)}
                    />

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
            <InfoLabel size={"lg"}>This is an example of a InfoLabel </InfoLabel>
          </div>
        ),
      },
        {
            cardHeader: "Required",
            cardSubtext: "When marked required, the indicator asterisk is placed before the InfoButton.",
            cardComponent: (
                <div className="flex gap-2">
                    <InfoLabel size={"lg"}>This is an example of a Required InfoLabel <h2 className={"text-red-500 "}>*</h2> </InfoLabel>
                </div>
            ),
        },
        {
            cardHeader: "Size",
            cardSubtext: "InfoLabel's size prop affects the size of the Label and InfoButton. The default size is medium.",
            cardComponent: (
                <div className="flex gap-2">
                    <InfoLabel size={"lg"}>This is an example of a Required InfoLabel <h2 className={"text-red-500 "}>*</h2> </InfoLabel>
                </div>
            ),
        },
        {
            cardHeader: "In a Field",
            cardSubtext: "An InfoLabel can be used in a Field by rendering the label prop as an InfoLabel. This uses the slot render function support. See the code from this story for an example.",
            cardComponent: (
                <div className="flex flex-col gap-2">
                    <InfoLabel size={"lg"}>This is an example of a Field With an Info Label</InfoLabel>
                    <Input placeholder={"Input email here!"}></Input>
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
    subText: <>Links allow users to navigate between different locations. They can be used as standalone controls or inline with text.</>,
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

        {
            cardHeader: "Appearance",
            cardSubtext: "",

            cardComponent: (
                <div className="flex flex-col gap-2">
                    <Link href="#" variant="subtle">
                        A Subtle Link
                    </Link>
                </div>
            ),
        },  {
            cardHeader: "Inline",
            cardSubtext: "",

            cardComponent: (
                <div className="flex flex-col gap-2">
                    <Link href="#">Link default</Link>
                    <Link href="#" variant="subtle">
                        <Link href={"https://youtube.com"}>Youtube</Link>
                    </Link>
                </div>
            ),
        },  {
            cardHeader: "Appearance",
            cardSubtext: "",

            cardComponent: (
                <div className="flex flex-col gap-2">
                    <Link href="#">Link default</Link>
                    <Link href="#" variant="subtle">
                        <Link href={"https://youtube.com"}>Youtube</Link>
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
    header: "MessageBar",
    subText: <></>,
    cards: [
      {
        cardHeader: "Default",
        cardSubtext: "",
        cardComponent: (
          <div className="flex flex-col gap-2">
            <Button
              variant="outline"
              onClick={() => {
                toast({
                  messageBar: true,
                  variant: "error",
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
                }
                )
              }}
            >
              Add to calendar
            </Button>
          </div>
        ),
      },
        {
            cardHeader: "Intent",
            cardSubtext: "MessageBar components come built-in with preset intents that determine the design and aria live announcement, While it is recommended to use the preset intents, it's possible to configure the aria live politeness with the politeness prop.",
            cardComponent: (
                <div className="flex flex-col gap-2">
                    <Button
                        variant="outline"
                        onClick={() => {
                            toast({
                                    messageBar: true,
                                    variant: "error",
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
                                }
                            )
                        }}
                    >
                        Add to calendar
                    </Button>
                </div>
            ),
        },
        {
            cardHeader: "Shape",
            cardSubtext: "MessageBar can have either rounded or square corners, please follow the usage guidance for these shapes:\n" +
                "\n" +
                "    rounded used for component level message bars\n" +
                "    square used for page/app level message bars",
            cardComponent: (
                <div className="flex flex-col gap-2">
                    <Button
                        variant="outline"
                        onClick={() => {
                            toast({
                                    messageBar: true,
                                    variant: "error",
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
                                }
                            )
                        }}
                    >
                        Add to calendar
                    </Button>
                </div>
            ),
        },
        {
            cardHeader: "Actions",
            cardSubtext: "The MessageBar can have different actions.",
            cardComponent: (
                <div className="flex flex-col gap-2">
                    <Button
                        variant="outline"
                        onClick={() => {
                            toast({
                                    messageBar: true,
                                    variant: "error",
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
                                }
                            )
                        }}
                    >
                        Add to calendar
                    </Button>
                </div>
            ),
        },
        {
            cardHeader: "Dismiss",
            cardSubtext: "MessageBar components should be used in a MessageBarGroup when possible to enable exit animations. Once inside a MessageBarGroup component, the default exit animation will trigger automatically when the component is unmounted from DOM.",
            cardComponent: (
                <div className="flex flex-col gap-2">
                    <Button
                        variant="outline"
                        onClick={() => {
                            toast({
                                    messageBar: true,
                                    variant: "error",
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
                                }
                            )
                        }}
                    >
                        Add to calendar
                    </Button>
                </div>
            ),
        },
        {
            cardHeader: "Animation",
            cardSubtext: "Enter animations are also handled within the MessageBarGroup. However avoid entry animations for MessageBar components on page load. However, MessageBar components that are mounted during the lifecycle of an app can use enter animations.",
            cardComponent: (
                <div className="flex flex-col gap-2">
                    <Button
                        variant="outline"
                        onClick={() => {
                            toast({
                                    messageBar: true,
                                    variant: "error",
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
                                }
                            )
                        }}
                    >
                        Add to calendar
                    </Button>
                </div>
            ),
        },
        {
            cardHeader: "Reflow",
            cardSubtext: "The MessageBar will reflow by default once the body content wraps to a second line. This changes the layout of the actions in the MessageBar.",
            cardComponent: (
                <div className="flex flex-col gap-2">
                    <Button
                        variant="outline"
                        onClick={() => {
                            toast({
                                    messageBar: true,
                                    variant: "error",
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
                                }
                            )
                        }}
                    >
                        Add to calendar
                    </Button>
                </div>
            ),
        },
        {
            cardHeader: "Manual Layout",
            cardSubtext: "It's possible to opt out of automatic reflow with the layout prop. This can be useful if an application has an existing responsive design mechanism.",
            cardComponent: (
                <div className="flex flex-col gap-2">
                    <Button
                        variant="outline"
                        onClick={() => {
                            toast({
                                    messageBar: true,
                                    variant: "error",
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
                                }
                            )
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
