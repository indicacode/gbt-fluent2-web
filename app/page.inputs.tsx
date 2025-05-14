import { FaListUl } from "react-icons/fa6"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/done/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/done/avatar"
import { Button } from "@/components/done/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  FloatingAction,
} from "@/components/done/card"
import Combobox from "@/components/done/combobox"
import { Divider } from "@/components/done/divider"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/done/drawer"
import InfoLabel from "@/components/done/infoLabel"
import { Input, InputLeftAddon, InputRightAddon } from "@/components/done/input"
import { Label } from "@/components/done/label"
import Persona from "@/components/done/persona"
import { RadioGroup, RadioGroupItem } from "@/components/done/radio-group"
import { Slider } from "@/components/done/slider"
import { Switch } from "@/components/done/switch"
import { Textarea } from "@/components/done/textarea"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/not-done/menubar"
import { Progress } from "@/components/not-done/progress"
import { Skeleton } from "@/components/not-done/skeleton"
import { Checkbox } from "@/components/reviewing/checkbox"
import { DataTable } from "@/components/reviewing/data-table"
import { columns } from "@/components/reviewing/data-table.components"
import { dataTableData } from "@/components/reviewing/data-table.input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/reviewing/dialog"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/reviewing/popover"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/reviewing/select"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/reviewing/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/reviewing/tabs"
import { ToastAction } from "@/components/reviewing/toast"
import { toast } from "@/components/reviewing/use-toast"
import {
  Copy16Filled,
  DocumentPdfRegular,
  DocumentRegular,
  EditRegular,
  FolderRegular,
  OpenRegular,
  PeopleRegular,
  VideoRegular,
} from "@fluentui/react-icons"
import { AiFillCheckCircle } from "@react-icons/all-files/ai/AiFillCheckCircle"
import { BsThreeDots } from "@react-icons/all-files/bs/BsThreeDots"
import { GiBanana } from "@react-icons/all-files/gi/GiBanana"
import { GiCarrot } from "@react-icons/all-files/gi/GiCarrot"
import { GiMeat } from "@react-icons/all-files/gi/GiMeat"
import { GiOrange } from "@react-icons/all-files/gi/GiOrange"
import { GiShinyApple } from "@react-icons/all-files/gi/GiShinyApple"
import { ClipboardPasteIcon, ScissorsIcon } from "lucide-react"
import Link from "next/link"
import { ReactElement, ReactNode } from "react"

type RowItem = {
  file: { icon: ReactElement; label: string }
  author: {
    label: string
    status: "online" | "busy" | "away" | "offline" | "do-not-disturb"
  }
  lastUpdated: { label: string; timestamp: number }
  lastUpdate: { icon: ReactElement; label: string }
}

type ColumnItem = { columnKey: string; label: string }

type ComponentsType = Array<{
  header: string
  subText: string
  cards: Array<{
    cardHeader: string
    cardSubtext: ReactNode
    cardComponent: ReactNode
  }>
}>

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
            <Button shape="rounded" variant="primary">
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
        cardHeader: "Toggle",
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
            <h2>here is an input with a left addon</h2>
            <Input
              variant={"filledLight"}
              labelText={"Left Addon"}
              placeholder={
                "The Addon is on the left! this addon is a dollar sign , for a money amount input"
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
        cardHeader: "Placeholder",
        cardSubtext:
          " An input can have placeholder text. If using the placeholder as a\n" +
          "              label (which is not recommended for usability), be sure to provide\n" +
          "              an aria-label for screen reader users.",
        cardComponent: (
          <div>
            <Input placeholder={"This is the placeholder text!"}></Input>
          </div>
        ),
      },
      {
        cardHeader: "Size",
        cardSubtext:
          " An input can have different sizes. Those being small (sm) medium (md) and large (lg)",
        cardComponent: (
          <div className={"flex flex-col"}>
            <Input size="sm" placeholder={"Small Input"}></Input>
          </div>
        ),
      },
      {
        cardHeader: "Type",
        cardSubtext:
          " An input can have a custom text-based type such as email, url, or password based on the type of value the user will enter. Note that no custom styling is currently applied for alternative types, and some types may activate browser-default styling which does not match the Fluent design language.",
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
            placeholder="Select you favorite frameworks"
            options={frameworks}
          />
        ),
      },

      {
        cardHeader: "Filtering",
        cardSubtext:
          "We provide useComboboxFilter() hook to filter the options based on the user-typed string. It can be configured for a custom filter function, custom message, and custom render function. We recommend using filtering when creating a freeform Combobox.",
        cardComponent: (
          <Combobox
            emptyIndicator="No Items Found"
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
        cardSubtext:
          "Combobox can display multiselect values in custom tags. This example uses a controlled selection so the tags can be used to remove selected options.",
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
        cardSubtext:
          "Multiselect Combobox supports using a controlled value to display selected options when not in focus, similar to v8 behavior.We recommend using tags rather than the value string when possible,since they have better UX and accessibility.s",
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
          <div className="flex h-fit w-full flex-row gap-10">
            <Divider orientation="vertical" align="center">
              1
            </Divider>
            <Divider variant="subtle" orientation="vertical" align="center">
              2
            </Divider>
            <Divider variant="brand" orientation="vertical" align="center">
              3
            </Divider>
            <Divider variant="strong" orientation="vertical" align="center">
              4
            </Divider>
            <Divider orientation="vertical" align="center">
              5
            </Divider>
            <Divider variant="subtle" orientation="vertical" align="center">
              6
            </Divider>
            <Divider variant="brand" orientation="vertical" align="center">
              7
            </Divider>
            <Divider variant="strong" orientation="vertical" align="center">
              8
            </Divider>
            <Divider orientation="vertical" align="center">
              9
            </Divider>
            <Divider variant="subtle" orientation="vertical" align="center">
              10
            </Divider>
            <Divider variant="brand" orientation="vertical" align="center">
              11
            </Divider>
            <Divider variant="strong" orientation="vertical" align="center">
              12
            </Divider>
            <Divider orientation="vertical" align="center">
              13
            </Divider>
            <Divider variant="subtle" orientation="vertical" align="center">
              14
            </Divider>
            <Divider variant="brand" orientation="vertical" align="center">
              15
            </Divider>
            <Divider variant="strong" orientation="vertical" align="center">
              16
            </Divider>
            <Divider variant="brand" orientation="vertical" align="center">
              17
            </Divider>
          </div>
        ),
      },
      {
        cardHeader: "Appearance",
        cardSubtext:
          "A divider can have a brand, subtle, or strong appearance. When not specified, it has its default experience",
        cardComponent: (
          <div className="flex h-fit w-full flex-col">
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
        cardSubtext:
          "The label associated with the divider can be aligned at the start, center, or end of the divider line.",
        cardComponent: (
          <div className="flex h-fit w-full flex-col">
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
        cardSubtext:
          "A divider can have custom styles applied to both the label and the line.",
        cardComponent: (
          <div className="flex h-fit w-full flex-col">
            <Divider orientation="horizontal" align="start">
              Start
            </Divider>
            <Divider variant="subtle" orientation="horizontal" align="center">
              Center
            </Divider>
            <Divider variant="brand" orientation="horizontal" align="end">
              End
            </Divider>
            <Divider variant="strong" orientation="horizontal" align="center">
              4
            </Divider>
            <Divider
              variant={"primary"}
              orientation={"horizontal"}
              align={"center"}
            >
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
        cardHeader: "Default",
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
      {
        cardHeader: "Appearance",
        cardSubtext:
          "Select can have different appearances. The colors adjacent to the input should have a sufficient contrast. Particularly, the color of input with filled darker and lighter styles needs to provide greater than 3 to 1 contrast ratio against the immediate surrounding color to pass accessibility requirements.",
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
      {
        cardHeader: "Disabled",
        cardSubtext:
          "A Select can be disabled through the native disabled prop",
        cardComponent: (
          <Select disabled={true}>
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
      {
        cardHeader: "Size",
        cardSubtext:
          "A Select's size can be set to small,k medium (default), or large.",
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
            InlineDrawer. Used when toggling g between the two modes is
            necessary. Often used for responsiveness.
          </li>
        </ul>
      </div>
    ),
    cards: [
      {
        cardHeader: "",
        cardSubtext: "",
        cardComponent: (
          <Drawer defaultOpen={true} position="bottom">
            <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
              Open drawer
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader className="flex flex-col items-center">
                <DrawerTitle>Im the header!</DrawerTitle>
              </DrawerHeader>
              <DrawerDescription className={"text-slate-50"}>
                And i the content
              </DrawerDescription>
              <DrawerFooter>aaaaaaa</DrawerFooter>
            </DrawerContent>
          </Drawer>
        ),
      },
      {
        cardHeader: "Overlay",
        cardSubtext:
          "OverlayDrawer contains supplementary content and is used for complex creation, edit, or management experiences. For example, viewing details about an item in a list or editing settings. By default, drawer is blocking and signifies that the user's full attention is required when making configurations.",
        cardComponent: (
          <Drawer defaultOpen={false} position="bottom">
            <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
              Open drawer
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader className="flex flex-col items-center">
                <DrawerTitle>Im the header!</DrawerTitle>
              </DrawerHeader>
              <DrawerDescription className={"text-slate-50"}>
                And i the content
              </DrawerDescription>
              <DrawerFooter>aaaaaaa</DrawerFooter>
            </DrawerContent>
          </Drawer>
        ),
      },
      {
        cardHeader: "Overlay No Modal",
        cardSubtext:
          "An overlay is optional depending on whether or not interacting with the background content is beneficial to the user's context/scenario. By setting the modalType prop to non-modal, the Drawer will not be blocking and the user can interact with the background content.",
        cardComponent: (
          <Drawer defaultOpen={false} position="bottom">
            <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
              Open drawer
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader className="flex flex-col items-center">
                <DrawerTitle>Im the header!</DrawerTitle>
              </DrawerHeader>
              <DrawerDescription className={"text-slate-50"}>
                And i the content
              </DrawerDescription>
              <DrawerFooter>aaaaaaa</DrawerFooter>
            </DrawerContent>
          </Drawer>
        ),
      },
      {
        cardHeader: "Inline",
        cardSubtext:
          "InlineDrawer is often used for navigation that is not dismissible. As it is on the same level as the main surface, users can still interact with other UI elements. This could be useful for swapping between different items in the main surface.",
        cardComponent: (
          <Drawer defaultOpen={false} inline={true} position="left">
            <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
              Open drawer
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader className="flex flex-col items-center">
                <DrawerTitle>Im the header!</DrawerTitle>
              </DrawerHeader>
              <DrawerDescription className={"text-slate-50"}>
                And i the content
              </DrawerDescription>
              <DrawerFooter>aaaaaaa</DrawerFooter>
            </DrawerContent>
          </Drawer>
        ),
      },
      {
        cardHeader: "Position",
        cardSubtext:
          "When a Drawer is invoked, it slides in from either the left or right side, or bottom of the screen. This can be specified by the position prop.",
        cardComponent: (
          <div>
            <Drawer defaultOpen={false} position="bottom">
              <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
                Open drawer from the bottom
              </DrawerTrigger>

              <DrawerContent>
                <DrawerHeader className="flex flex-col items-center">
                  <DrawerTitle>Im the header!</DrawerTitle>
                </DrawerHeader>
                <DrawerDescription className={"text-slate-50"}>
                  And i the content
                </DrawerDescription>
                <DrawerFooter>aaaaaaa</DrawerFooter>
              </DrawerContent>
            </Drawer>
            <Drawer defaultOpen={false} position="right">
              <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary ml-2 rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
                Open drawer from the right
              </DrawerTrigger>

              <DrawerContent>
                <DrawerHeader className="flex flex-col items-center">
                  <DrawerTitle>Im the header!</DrawerTitle>
                </DrawerHeader>
                <DrawerDescription className={"text-slate-50"}>
                  And i the content
                </DrawerDescription>
                <DrawerFooter>aaaaaaa</DrawerFooter>
              </DrawerContent>
            </Drawer>
            <Drawer defaultOpen={false} position="left">
              <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary mt-2 rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
                Open drawer from the left
              </DrawerTrigger>

              <DrawerContent>
                <DrawerHeader className="flex flex-col items-center">
                  <DrawerTitle>Im the header!</DrawerTitle>
                </DrawerHeader>
                <DrawerDescription className={"text-slate-50"}>
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
        cardSubtext:
          "The size prop controls the width of the drawer. The default is small.",
        cardComponent: (
          <div>
            <Drawer defaultOpen={false} size="sm" position="right">
              <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
                Open small drawer
              </DrawerTrigger>

              <DrawerContent>
                <DrawerHeader className="flex flex-col items-center">
                  <DrawerTitle>Im the header!</DrawerTitle>
                </DrawerHeader>
                <DrawerDescription className={"text-slate-50"}>
                  And i the content
                </DrawerDescription>
                <DrawerFooter>aaaaaaa</DrawerFooter>
              </DrawerContent>
            </Drawer>
            <Drawer defaultOpen={false} position="bottom">
              <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary ml-2 rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
                Open medium drawer
              </DrawerTrigger>

              <DrawerContent>
                <DrawerHeader className="flex flex-col items-center">
                  <DrawerTitle>Im the header!</DrawerTitle>
                </DrawerHeader>
                <DrawerDescription className={"text-slate-50"}>
                  And i the content
                </DrawerDescription>
                <DrawerFooter>aaaaaaa</DrawerFooter>
              </DrawerContent>
            </Drawer>
            <Drawer defaultOpen={false} size={"lg"} position="right">
              <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary ml-2 rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
                Open large drawer
              </DrawerTrigger>

              <DrawerContent>
                <DrawerHeader className="flex flex-col items-center">
                  <DrawerTitle>Im the header!</DrawerTitle>
                </DrawerHeader>
                <DrawerDescription className={"text-slate-50"}>
                  And i the content
                </DrawerDescription>
                <DrawerFooter>aaaaaaa</DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        ),
      },
      {
        cardHeader: "Separator",
        cardSubtext:
          "The separator prop adds a line separator between the drawer and the content. Its placement will be determined by the position prop",
        cardComponent: (
          <div className={""}>
            <Drawer defaultOpen={false} size={"sm"} position="right">
              <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
                Open small drawer
              </DrawerTrigger>

              <DrawerContent>
                <DrawerHeader className="flex flex-col items-center">
                  <DrawerTitle>Im the header!</DrawerTitle>
                </DrawerHeader>
                <DrawerDescription className={"text-slate-50"}>
                  And i the content
                </DrawerDescription>
                <DrawerFooter>aaaaaaa</DrawerFooter>
              </DrawerContent>
            </Drawer>
            <Drawer defaultOpen={false} position="bottom">
              <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary ml-2 rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
                Open medium drawer
              </DrawerTrigger>

              <DrawerContent>
                <DrawerHeader className="flex flex-col items-center">
                  <DrawerTitle>Im the header!</DrawerTitle>
                </DrawerHeader>
                <DrawerDescription className={"text-slate-50"}>
                  And i the content
                </DrawerDescription>
                <DrawerFooter>aaaaaaa</DrawerFooter>
              </DrawerContent>
            </Drawer>
            <Drawer defaultOpen={false} size={"lg"} position="right">
              <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary ml-2 rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
                Open large drawer
              </DrawerTrigger>

              <DrawerContent>
                <DrawerHeader className="flex flex-col items-center">
                  <DrawerTitle>Im the header!</DrawerTitle>
                </DrawerHeader>
                <DrawerDescription className={"text-slate-50"}>
                  And i the content
                </DrawerDescription>
                <DrawerFooter>aaaaaaa</DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        ),
      },
      {
        cardHeader: "With Title",
        cardSubtext:
          "DrawerHeaderTitle is a component that provides a structured heading for a Drawer and can be used to display a title and an action. Although it works as a standalone component, it is intended to be used within a DrawerHeader. The title renders an h2 element by default but it can be customized using the heading prop.",
        cardComponent: (
          <div>
            <Drawer defaultOpen={false} size={"sm"} position="right">
              <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
                Open small drawer
              </DrawerTrigger>

              <DrawerContent>
                <DrawerHeader className="flex flex-col items-center">
                  <DrawerTitle>Im the header!</DrawerTitle>
                </DrawerHeader>
                <DrawerDescription className={"text-slate-50"}>
                  And i the content
                </DrawerDescription>
                <DrawerFooter>aaaaaaa</DrawerFooter>
              </DrawerContent>
            </Drawer>
            <Drawer defaultOpen={false} position="bottom">
              <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary ml-2 rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
                Open medium drawer
              </DrawerTrigger>

              <DrawerContent>
                <DrawerHeader className="flex flex-col items-center">
                  <DrawerTitle>Im the header!</DrawerTitle>
                </DrawerHeader>
                <DrawerDescription className={"text-slate-50"}>
                  And i the content
                </DrawerDescription>
                <DrawerFooter>aaaaaaa</DrawerFooter>
              </DrawerContent>
            </Drawer>
            <Drawer defaultOpen={false} size={"lg"} position="right">
              <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary ml-2 rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
                Open large drawer
              </DrawerTrigger>

              <DrawerContent>
                <DrawerHeader className="flex flex-col items-center">
                  <DrawerTitle>Im the header!</DrawerTitle>
                </DrawerHeader>
                <DrawerDescription className={"text-slate-50"}>
                  And i the content
                </DrawerDescription>
                <DrawerFooter>aaaaaaa</DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        ),
      },

      {
        cardHeader: "With Navigation",
        cardSubtext:
          " Drawers can have any type of content and one great case is to have a toolbar in the header. Drawer ships with a DrawerHeaderNavigation component that can be used to display a toolbar in the header of the drawer. This can be combined with DrawerHeaderTitle to display a title in the header.",
        cardComponent: (
          <div>
            <Drawer defaultOpen={false} size={"sm"} position="right">
              <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
                Open small drawer
              </DrawerTrigger>

              <DrawerContent>
                <DrawerHeader className="flex flex-col items-center">
                  <DrawerTitle>Im the header!</DrawerTitle>
                </DrawerHeader>
                <DrawerDescription className={"text-slate-50"}>
                  And i the content
                </DrawerDescription>
                <DrawerFooter>aaaaaaa</DrawerFooter>
              </DrawerContent>
            </Drawer>
            <Drawer defaultOpen={false} position="bottom">
              <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary ml-2 rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
                Open medium drawer
              </DrawerTrigger>

              <DrawerContent>
                <DrawerHeader className="flex flex-col items-center">
                  <DrawerTitle>Im the header!</DrawerTitle>
                </DrawerHeader>
                <DrawerDescription className={"text-slate-50"}>
                  And i the content
                </DrawerDescription>
                <DrawerFooter>aaaaaaa</DrawerFooter>
              </DrawerContent>
            </Drawer>
            <Drawer defaultOpen={false} size={"lg"} position="right">
              <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary ml-2 rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
                Open large drawer
              </DrawerTrigger>

              <DrawerContent>
                <DrawerHeader className="flex flex-col items-center">
                  <DrawerTitle>Im the header!</DrawerTitle>
                </DrawerHeader>
                <DrawerDescription className={"text-slate-50"}>
                  And i the content
                </DrawerDescription>
                <DrawerFooter>aaaaaaa</DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        ),
      },
      {
        cardHeader: "With Scroll",
        cardSubtext:
          "By default, the drawer will not scroll its content when it overflows. To enable this behavior, the DrawerBody component can be used to wrap the content of the drawer.\n" +
          "\n" +
          "Important note: if the drawer content does not contain any focusable elements, the DrawerBody itself needs a tabIndex of 0 to ensure keyboard scroll access.",
        cardComponent: (
          <div className={""}>
            <Drawer defaultOpen={false} size={"sm"} position="right">
              <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
                Open small drawer
              </DrawerTrigger>

              <DrawerContent>
                <DrawerHeader className="flex flex-col items-center">
                  <DrawerTitle>Im the header!</DrawerTitle>
                </DrawerHeader>
                <DrawerDescription className={"text-slate-50"}>
                  And i the content
                </DrawerDescription>
                <DrawerFooter>aaaaaaa</DrawerFooter>
              </DrawerContent>
            </Drawer>
            <Drawer defaultOpen={false} position="bottom">
              <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary ml-2 rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
                Open medium drawer
              </DrawerTrigger>

              <DrawerContent>
                <DrawerHeader className="flex flex-col items-center">
                  <DrawerTitle>Im the header!</DrawerTitle>
                </DrawerHeader>
                <DrawerDescription className={"text-slate-50"}>
                  And i the content
                </DrawerDescription>
                <DrawerFooter>aaaaaaa</DrawerFooter>
              </DrawerContent>
            </Drawer>
            <Drawer defaultOpen={false} size="lg" position="right">
              <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary ml-2 rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
                Open large drawer
              </DrawerTrigger>

              <DrawerContent>
                <DrawerHeader className="flex flex-col items-center">
                  <DrawerTitle>Im the header!</DrawerTitle>
                </DrawerHeader>
                <DrawerDescription className={"text-slate-50"}>
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
        cardSubtext:
          "An alert Dialog is a modal dialog that interrupts the user's workflow to communicate an important message and acquire a response. Examples include action confirmation prompts and error message confirmations. The alert Dialog role enables assistive technologies and browsers to distinguish alert dialogs from other dialogs so they have the option of giving alert dialogs special treatment, such as playing a system alert sound. By default clicking on backdrop will not dismiss an alert Dialog.",
        cardComponent: (
          <Dialog>
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
                <DialogTrigger className="mr-2">
                  <Button variant={"secondary"}>Deny</Button>
                </DialogTrigger>
                <DialogTrigger className="">
                  <Button variant={"primary"}>Agree</Button>
                </DialogTrigger>
              </div>
            </DialogContent>
          </Dialog>
        ),
      },
      {
        cardHeader: "Scrolling Long Content",
        cardSubtext:
          "By default DialogContent should grow until it fits viewport size, overflowed content will be scrollable",
        cardComponent: (
          <Dialog>
            <DialogTrigger>Open Dialog</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>This is a dialog.</DialogTitle>
              </DialogHeader>
              <h2 className={"max-h-20 overflow-y-scroll"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam exercitationem cumque repellendus eaque est dolor eius
                expedita nulla ullam? Tenetur reprehenderit aut voluptatum
                impedit voluptates in natus iure cumque eaque? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quisquam exercitationem
                cumque repellendus eaque est dolor eius expedita nulla ullam?
                Tenetur reprehenderit aut voluptatum impedit voluptates in natus
                iure cumque eaque? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam exercitationem cumque repellendus
                eaque est dolor eius expedita nulla ullam? Tenetur reprehenderit
                aut voluptatum impedit voluptates in natus iure cumque eaque?
              </h2>
              <div className="flex flex-row justify-end">
                <DialogTrigger className="mr-2">
                  <Button variant={"secondary"}>Deny</Button>
                </DialogTrigger>
                <DialogTrigger className="">
                  {" "}
                  <Button variant={"primary"}>Agree</Button>
                </DialogTrigger>
              </div>
            </DialogContent>
          </Dialog>
        ),
      },
      {
        cardHeader: "Actions",
        cardSubtext:
          "Dialogs should be used for providing the user with quick prompt options where decisions should be made quickly. They should be used for actions that are not reversible, such as deleting an item.\n" +
          "\n" +
          "DialogActions should be used to provide the user with a set of actions to choose from. The actions should be clear and concise, and should be used to guide the user to the next step in the process.",
        cardComponent: (
          <Dialog>
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
                <DialogTrigger className="mr-2">
                  <Button variant={"secondary"}>Deny</Button>
                </DialogTrigger>
                <DialogTrigger className="">
                  <Button variant={"primary"}>Agree</Button>
                </DialogTrigger>
              </div>
            </DialogContent>
          </Dialog>
        ),
      },
      {
        cardHeader: "Fluid Actions",
        cardSubtext:
          "Use the fluid prop on the DialogActions component so that it spans the entire width of the dialog. This prop can be useful for having large number of actions.",
        cardComponent: (
          <Dialog>
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
                <DialogTrigger className="mr-2">
                  <Button variant={"secondary"}>Deny</Button>
                </DialogTrigger>
                <DialogTrigger className="">
                  {" "}
                  <Button variant={"primary"}>Agree</Button>
                </DialogTrigger>
              </div>
            </DialogContent>
          </Dialog>
        ),
      },
      {
        cardHeader: "No Focusable Element",
        cardSubtext:
          " Dialog should always have at least one focusable element. Some accessibility issues might happen if no focusable element is provided, like this one caught in Talkback.\n" +
          "\n" +
          "In the case when there is no focusable element inside a Dialog the only way to close the Dialog would be clicking on the backdrop.",
        cardComponent: (
          <Dialog>
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
                <DialogTrigger className="mr-2">
                  <Button variant={"secondary"}>Deny</Button>
                </DialogTrigger>
                <DialogTrigger className="">
                  <Button variant={"primary"}>Agree</Button>
                </DialogTrigger>
              </div>
            </DialogContent>
          </Dialog>
        ),
      },
      {
        cardHeader: "Change Focus",
        cardSubtext:
          "Changing the default focused element can be done in an effect",
        cardComponent: (
          <Dialog>
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
                <DialogTrigger className="mr-2">
                  <Button variant={"secondary"}>Deny</Button>
                </DialogTrigger>
                <DialogTrigger className="">
                  <Button variant={"primary"}>Agree</Button>
                </DialogTrigger>
              </div>
            </DialogContent>
          </Dialog>
        ),
      },
      {
        cardHeader: "Trigger Outside Dialog",
        cardSubtext:
          " When using a Dialog without a DialogTrigger (or when using a DialogTrigger outside of a Dialog), it becomes your responsibility to control some of the dialog's behavior.You must make sure that the open state is set accordingly to the dialog's visibility (mostly this means to properly react to the events provided by onOpenChange callback on Dialog component).You must make sure that focus is properly restored once the dialog is closed (this can be achieved by using the useRestoreFocusTarget hook, or by manually invoking .focus() on the target element).The example bellow showcases both explicit responsibilities:When using a Dialog without a DialogTrigger (or when using a DialogTrigger outside of a Dialog), it becomes your responsibility to control some of the dialog's behavior.You must make sure that the open state is set accordingly to the dialog's visibility (mostly this means to properly react to the events provided by onOpenChange callback on Dialog component).You must make sure that focus is properly restored once the dialog is closed (this can be achieved by using the useRestoreFocusTarget hook, or by manually invoking .focus() on the target element). The example bellow showcases both explicit responsibilities",
        cardComponent: (
          <Dialog>
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
                <DialogTrigger className="mr-2">
                  <Button variant={"secondary"}>Deny</Button>
                </DialogTrigger>
                <DialogTrigger className="">
                  <Button variant={"primary"}>Agree</Button>
                </DialogTrigger>
              </div>
            </DialogContent>
          </Dialog>
        ),
      },
      {
        cardHeader: "No Focusable Element",
        cardSubtext:
          " Dialog should always have at least one focusable element. Some accessibility issues might happen if no focusable element is provided, like this one caught in Talkback.\n" +
          "\n" +
          "In the case when there is no focusable element inside a Dialog the only way to close the Dialog would be clicking on the backdrop.",
        cardComponent: (
          <Dialog>
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
                <DialogTrigger className="mr-2">
                  <Button variant={"secondary"}>Deny</Button>
                </DialogTrigger>
                <DialogTrigger className="">
                  <Button variant={"primary"}>Agree</Button>
                </DialogTrigger>
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
          <Tabs defaultValue={"fruits"} className={"w-[full]"}>
            <TabsList className={"w-full"}>
              <TabsTrigger value={"fruits"}>Fruits</TabsTrigger>
              <TabsTrigger value={"vegetables"}>Vegetables</TabsTrigger>
              <TabsTrigger value={"meat"}>Meat</TabsTrigger>
            </TabsList>
            <TabsContent value={"fruits"}>
              <div className={"flex w-[20%] flex-row justify-between"}>
                <GiShinyApple className={"mr-1"} size={160} />
                <GiOrange className={"mr-1"} size={160} />
                <GiBanana className={"mr-1"} size={160} />

                <GiShinyApple className={"mr-1"} size={160} />
                <GiOrange className={"mr-1"} size={160} />
                <GiBanana className={"mr-1"} size={160} />
              </div>
            </TabsContent>
            <TabsContent value={"vegetables"}>
              <div className={"flex w-[20%] flex-row justify-between"}>
                <GiCarrot className={"mr-1"} size={160} />
                <GiCarrot className={"mr-1"} size={160} />
              </div>
            </TabsContent>
            <TabsContent value={"meat"}>
              <div className={"flex w-[20%] flex-row justify-between"}>
                <GiMeat size={160} />
                <GiMeat size={160} />
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
        primitive component <code>DataGrid</code> is a feature-rich, so there
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
            data={dataTableData}
            columns={columns}
            features={{
              sorting: true,
              viewOptions: true,
              filtering: true,
              pagination: true,
              columnVisibility: false,
              rowSelection: true,
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
          <Table>
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
                            src="https://github.com/shadcn.png"
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
          </Table>
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
      {
        cardHeader: "Step",
        cardSubtext:
          "You can define the step value of a slider so that the value will always be a multiple of that step",
        cardComponent: <Slider size={"sm"} step={25} />,
      },
      {
        cardHeader: "Min Max",
        cardSubtext: "A slider with min and max values displayed",
        cardComponent: (
          <div className={"flex flex-row"}>
            {" "}
            <h2 className={"mr-1"}>Min: 10</h2>{" "}
            <Slider className={"w-[40vw]"} size={"sm"} step={10} />{" "}
            <h2 className={"ml-1 flex flex-row"}>Max: 100</h2>{" "}
          </div>
        ),
      },
      {
        cardHeader: "Disabled",
        cardSubtext:
          "A disabled slider will not change or fire events on click or keyboard press.",
        cardComponent: (
          <Slider
            disabled={true}
            className={"w-[40vw]"}
            size={"sm"}
            step={10}
          />
        ),
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
          <Accordion type="single" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger size="md">Is it easy to use?</AccordionTrigger>
              <AccordionContent>
                Yes. Try it for yourself, with a few lines of code you get9
                beautiful UI!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger size="md">Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the Fluent2
                Aesthetic!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger size="md">Is it animated?</AccordionTrigger>
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
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger size="md">Is it easy to use?</AccordionTrigger>
              <AccordionContent>
                Yes. Try it for yourself, with a few lines of code you get
                beautiful UI!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger size="md">Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the Fluent2
                Aesthetic!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger size="md">Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default with a smooth expanding motion,
                you can disable animations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ),
      },

      {
        cardHeader: "Navigation",
        cardSubtext: "An accordion supports keyboard navigation.",
        cardComponent: (
          <div>
            <Accordion
              defaultValue={["item-2"]}
              type="multiple"
              className="w-full"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger size="md">
                  Is it easy to use?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. Try it for yourself, with a few lines of code you get
                  beautiful UI!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger size="md">Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the Fluent2
                  Aesthetic!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger size="md">Is it animated?</AccordionTrigger>
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
        cardSubtext:
          "An accordion supports multiple panels expanded simultaneously.\n" +
          "              Since it's not simple to determine which panel will be opened by\n" +
          "              default, multiple will also be collapsed by default on the first\n" +
          "              render.",
        cardComponent: (
          <div>
            <Accordion
              defaultValue={["item-2"]}
              type="multiple"
              className="w-full"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger size="md">
                  Is it easy to use?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. Try it for yourself, with a few lines of code you get
                  beautiful UI!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger size="md">Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the Fluent2
                  Aesthetic!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger size="md">Is it animated?</AccordionTrigger>
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
        cardHeader: "Open Items",
        cardSubtext:
          " An accordion can have defined open items. If no open item is\n" +
          "              present, all panels will be closed by default.",
        cardComponent: (
          <div>
            <Accordion
              defaultValue={["item-2"]}
              type="multiple"
              className="w-full"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger size="md">
                  Is it easy to use?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. Try it for yourself, with a few lines of code you get
                  beautiful UI!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger size="md">Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the Fluent2
                  Aesthetic!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger size="md">Is it animated?</AccordionTrigger>
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
        cardHeader: "Expand Icon Position",
        cardSubtext:
          " An accordion supports multiple panels expanded simultaneously. Since it's not simple to determine which panel will be opened by default, multiple will also be collapsed by default on the first render",

        cardComponent: (
          <div>
            <h2 className={"font-extrabold"}></h2>
            <h2></h2>
            <Accordion
              defaultValue={["item-2"]}
              type="multiple"
              className="w-full"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger size="md">
                  Is it easy to use?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. Try it for yourself, with a few lines of code you get
                  beautiful UI!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger size="md">Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the Fluent2
                  Aesthetic!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger size="md">Is it animated?</AccordionTrigger>
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
        cardHeader: "With Icon",
        cardComponent: (
          <div>
            <h2>
              An accordion header can contain an icon. <AiFillCheckCircle />
            </h2>
            <Accordion
              defaultValue={["item-2"]}
              type="multiple"
              className="w-full"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger size="md">
                  Is it easy to use?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. Try it for yourself, with a few lines of code you get
                  beautiful UI!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger size="md">Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the Fluent2
                  Aesthetic!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger size="md">Is it animated?</AccordionTrigger>
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
        cardHeader: "Collapsible",
        cardComponent: (
          <div>
            <h2 className={"font-extrabold"}></h2>
            <h2>This is collapsible</h2>
            <Accordion
              defaultValue={["item-2"]}
              type="multiple"
              className="w-full"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger size="md">
                  Is it easy to use?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. Try it for yourself, with a few lines of code you get
                  beautiful UI!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger size="md">Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the Fluent2
                  Aesthetic!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger size="md">Is it animated?</AccordionTrigger>
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
              <AvatarFallback>Josh Well</AvatarFallback>
            </Avatar>
            <Avatar status="online" size="sm">
              <AvatarFallback>Joshua Graham</AvatarFallback>
            </Avatar>
            <Avatar status={"busy"} size="sm">
              <AvatarFallback>Ane Parker</AvatarFallback>
            </Avatar>
            <Avatar status={"do-not-disturb"} size="sm">
              <AvatarFallback>Helen Pereira</AvatarFallback>
            </Avatar>
            <Avatar status="busy" size="sm">
              <AvatarFallback>Johnny Mans</AvatarFallback>
              <AvatarImage src="https://images.pexels.com/photos/23909935/pexels-photo-23909935/free-photo-of-moda-tendencia-amor-mulher.jpeg" />
            </Avatar>
            <Avatar status={"online"} size="sm">
              <AvatarFallback>Jordan Terrence</AvatarFallback>
              <AvatarImage
                src={
                  "https://images.pexels.com/photos/22884699/pexels-photo-22884699/free-photo-of-cafeina-cafe-copo-taca.jpeg"
                }
              />
            </Avatar>
            <Avatar status={"online"} size="sm">
              <AvatarFallback>Fernanda Almeida</AvatarFallback>
              <AvatarImage
                src={
                  "https://images.pexels.com/photos/22814807/pexels-photo-22814807/free-photo-of-moda-tendencia-mulher-modelo.jpeg"
                }
              />
            </Avatar>
          </div>
        ),
      },
      {
        cardHeader: "Image",
        cardSubtext:
          "An avatar can display an image, It is recommended to also include a name in addition to the image: the initials from the name are displayed while the image is loading, and the name makes the Avatar accessible to screen readers.",
        cardComponent: (
          <div className={"flex flex-row"}>
            <Avatar status={"away"}>
              <AvatarFallback>Jordan Herrera</AvatarFallback>
              <AvatarImage
                src={
                  "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=800"
                }
              />
            </Avatar>
            <Avatar status={"do-not-disturb"}>
              <AvatarFallback>Kaio Telmo </AvatarFallback>
              <AvatarImage
                src={
                  "https://images.pexels.com/photos/24702820/pexels-photo-24702820/free-photo-of-moda-tendencia-pessoas-mulher.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                }
              />
            </Avatar>
            <Avatar status={"online"}>
              <AvatarFallback>Carlos John</AvatarFallback>
              <AvatarImage
                src={
                  "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
                }
              />
            </Avatar>
            <Avatar status={"busy"}>
              <AvatarFallback>Ana Watson</AvatarFallback>
              <AvatarImage
                src={
                  "https://images.pexels.com/photos/23201952/pexels-photo-23201952/free-photo-of-comida-alimento-refeicao-restaurante.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                }
              />
            </Avatar>
          </div>
        ),
      },
      {
        cardHeader: "Badge",
        cardSubtext:
          "An avatar can have a badge to indicate presence status. See the status prop inside of the avatar component for more info.\n" +
          "\n",
        cardComponent: (
          <div className={"flex flex-row items-center"}>
            <Avatar status={"away"}>
              <AvatarFallback>Jordan Cummings</AvatarFallback>
              <AvatarImage
                src={
                  "https://images.pexels.com/photos/23201952/pexels-photo-23201952/free-photo-of-comida-alimento-refeicao-restaurante.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                }
              />
            </Avatar>
            <Avatar status={"do-not-disturb"}>
              <AvatarFallback>Kaio Karlos </AvatarFallback>
              <AvatarImage
                src={
                  "https://images.pexels.com/photos/24702820/pexels-photo-24702820/free-photo-of-moda-tendencia-pessoas-mulher.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                }
              />
            </Avatar>
            <Avatar status={"online"}>
              <AvatarFallback>Jordan Herrera</AvatarFallback>
              <AvatarImage
                src={
                  "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=800"
                }
              />
            </Avatar>
            <Avatar status={"busy"}>
              <AvatarFallback>Piccarte Artsy</AvatarFallback>
              <AvatarImage
                src={
                  "https://images.pexels.com/photos/23201952/pexels-photo-23201952/free-photo-of-comida-alimento-refeicao-restaurante.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                }
              />
            </Avatar>
          </div>
        ),
      },
      {
        cardHeader: "Avatar Icon",
        cardSubtext:
          "An avatar can display an image.\n" +
          "It is recommended to also include a name in addition to the image: the initials from the name are displayed while the image is loading, and the name makes the Avatar accessible to screen readers.",
        cardComponent: (
          <div className={"flex flex-row items-center"}>
            <Avatar status={"away"}>
              <AvatarFallback>Jordan Herrera</AvatarFallback>
              <AvatarImage
                src={
                  "https://images.pexels.com/photos/23961099/pexels-photo-23961099/free-photo-of-homem-casal-conjuges-mulher.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                }
              />
            </Avatar>
            <Avatar status={"away"}>
              <AvatarFallback>Kaio Pereira </AvatarFallback>
              <AvatarImage
                src={
                  "https://images.pexels.com/photos/24279986/pexels-photo-24279986/free-photo-of-homem-terno-traje-amor.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                }
              />
            </Avatar>
            <Avatar status={"online"}>
              <AvatarFallback>Victoria Petes</AvatarFallback>
              <AvatarImage
                src={
                  "https://images.pexels.com/photos/21327991/pexels-photo-21327991/free-photo-of-comida-alimento-refeicao-restaurante.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                }
              />
            </Avatar>
            <Avatar status={"online"}>
              <AvatarFallback>Loucas Marquise</AvatarFallback>
              <AvatarImage
                src={
                  "https://images.pexels.com/photos/23201952/pexels-photo-23201952/free-photo-of-comida-alimento-refeicao-restaurante.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                }
              />
            </Avatar>
          </div>
        ),
      },
      {
        cardHeader: "Badge Icon",
        cardSubtext:
          "An avatar can display an image.\n" +
          "It is recommended to also include a name in addition to the image: the initials from the name are displayed while the image is loading, and the name makes the Avatar accessible to screen readers.",
        cardComponent: (
          <div className={"flex flex-row items-center"}>
            <Avatar status={"away"}>
              <AvatarFallback>Jordan Herrera</AvatarFallback>
              <AvatarImage
                src={
                  "https://images.pexels.com/photos/23961099/pexels-photo-23961099/free-photo-of-homem-casal-conjuges-mulher.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                }
              />
            </Avatar>
            <Avatar status={"offline"}>
              <AvatarFallback>Alonso Rencio </AvatarFallback>
              <AvatarImage
                src={
                  "https://images.pexels.com/photos/24279986/pexels-photo-24279986/free-photo-of-homem-terno-traje-amor.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                }
              />
            </Avatar>
            <Avatar status={"busy"}>
              <AvatarFallback>Junior Silva</AvatarFallback>
              <AvatarImage
                src={
                  "https://images.pexels.com/photos/21327991/pexels-photo-21327991/free-photo-of-comida-alimento-refeicao-restaurante.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                }
              />
            </Avatar>
            <Avatar status={"online"}>
              <AvatarFallback>Loucas Marquise</AvatarFallback>
              <AvatarImage
                src={
                  "https://images.pexels.com/photos/23201952/pexels-photo-23201952/free-photo-of-comida-alimento-refeicao-restaurante.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                }
              />
            </Avatar>
          </div>
        ),
      },
    ],
  },
  {
    header: "Skeleton",
    subText: (
      <>
        The Skeleton component is a temporary animation placeholder for when a
        service call takes time to return data and we don't want to block
        rendering the rest of the UI.
      </>
    ),
    cards: [
      {
        cardHeader: "Default",
        cardSubtext: "",
        cardComponent: (
          <div className={"flex w-full flex-row"}>
            <Skeleton className={"h-4 w-full"} />
          </div>
        ),
      },
      {
        cardHeader: "Appearance",
        cardSubtext:
          "You can specify the appearance of the Skeleton. This is useful for instances where you want to render a Skeleton with a MaterialOS theme",
        cardComponent: (
          <div className={"flex w-full flex-col"}>
            <Skeleton className={"h-4 w-full"} />
            <h2>Opaque Appearance</h2>
            <Skeleton className={"mt-6 h-4 w-full opacity-80"} />
            <h2>Translucent Appearance</h2>
          </div>
        ),
      },
      {
        cardHeader: "Animation",
        cardSubtext:
          "You can specify the animation style of the Skeleton. The default is 'pulse'",
        cardComponent: (
          <div className={"flex w-full flex-col"}>
            <Skeleton className={"mt-1 h-4 w-full animate-pulse"} />
            <h2>Pulse Animation</h2>
          </div>
        ),
      },
      {
        cardHeader: "Row",
        cardSubtext:
          "You can specify the animation style of the Skeleton. The default is 'pulse'",
        cardComponent: (
          <div className={"flex w-full flex-col"}>
            <div className={"flex flex-row items-center"}>
              <Skeleton className={"mt-2 h-8 w-8 animate-pulse rounded-full"} />
              <Skeleton className={"mt-2 ml-2 h-8 w-full"}></Skeleton>
            </div>
            <div className={"flex w-full flex-row items-center"}>
              <Skeleton className={"mt-3 h-8 w-8 animate-pulse rounded-full"} />
              <Skeleton className={"mt-3 ml-2 h-8 w-[25%]"} />
              <Skeleton className={"mt-3 ml-2 h-8 w-[25%]"} />
              <Skeleton className={"mt-3 ml-2 h-8 w-[25%]"} />
              <Skeleton className={"mt-3 ml-2 h-8 w-[25%]"} />
            </div>
            <div className={"flex w-full flex-row items-center"}>
              <Skeleton className={"mt-3 h-8 w-8 animate-pulse"} />
              <Skeleton className={"mt-3 ml-2 h-8 w-[25%]"} />
              <Skeleton className={"mt-3 ml-2 h-8 w-[25%]"} />
              <Skeleton className={"mt-3 ml-2 h-8 w-[25%]"} />
              <Skeleton className={"mt-3 ml-2 h-8 w-[25%]"} />
            </div>
          </div>
        ),
      },
      {
        cardHeader: "Size",
        cardSubtext:
          "You can specify the size of the Skeleton by using the classes. The size is a number that represents the height of the Skeleton in pixels",
        cardComponent: (
          <div className={"flex w-full flex-col"}>
            <div className={"flex w-full flex-row"}>
              <h2>2</h2>
              <Skeleton className={"ml-2 h-2 w-full"} />
            </div>
            <div className={"mt-5 flex w-full flex-row items-center"}>
              <h2>4</h2>
              <Skeleton className={"ml-2 h-4 w-full"} />
            </div>
            <div className={"mt-5 flex w-full flex-row items-center"}>
              <h2>6</h2>
              <Skeleton className={"ml-2 h-6 w-full"} />
            </div>
            <div className={"mt-5 flex w-full flex-row items-center"}>
              <h2>8</h2>
              <Skeleton className={"ml-2 h-8 w-full"} />
            </div>
            <div className={"mt-5 flex w-full flex-row items-center"}>
              <h2>12</h2>
              <Skeleton className={"ml-2 h-12 w-full"} />
            </div>
            <div className={"mt-5 flex w-full flex-row items-center"}>
              <h2>16</h2>
              <Skeleton className={"ml-2 h-16 w-full"} />
            </div>
            <div className={"mt-5 flex w-full flex-row items-center"}>
              <h2>24</h2>
              <Skeleton className={"mt-5 ml-2 h-24 w-full"} />
            </div>
            <div className={"flex w-full flex-row items-center"}>
              <h2>32</h2>
              <Skeleton className={"ml-2 h-32 w-full"} />
            </div>
            <div className={"mt-5 flex w-full flex-row items-center"}>
              <h2>40</h2>
              <Skeleton className={"ml-2 h-40 w-full"} />
            </div>
          </div>
        ),
      },
      {
        cardHeader: "Shape",
        cardSubtext:
          "The shape of the Skeleton can be set to circle, rectangle, or square.",
        cardComponent: (
          <div className={"flex w-full items-center justify-between"}>
            <div className={"flex w-full flex-row"}>
              <Skeleton className={"ml-2 h-20 w-20"} />
              <Skeleton className={"mt-2 ml-6 h-20 w-20 rounded-full"} />
            </div>
            <Skeleton className={"rounded-ml mt-2 ml-2 h-12 w-full"} />
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
      {
        cardHeader: "",
        cardSubtext: " ",
        cardComponent: (
          <div className={"flex flex-row items-center"}>
            <Switch className={""} />
            <h2 className={""}>This is a switch.</h2>
          </div>
        ),
      },
      {
        cardHeader: "Required",
        cardSubtext:
          " When a Switch is marked as , its label also gets the required styling",
        cardComponent: (
          <div className={"flex flex-row items-center"}>
            <Switch className={""} />
            <Label className={"ml-2"} required={true}>
              Required
            </Label>
          </div>
        ),
      },

      {
        cardHeader: "Checked",
        cardSubtext:
          "A Switch can be initially checked by passing a value to the defaultChecked property, or have its checked value controlled via the checked property.",
        cardComponent: (
          <div className={"flex flex-row items-center"}>
            <Switch className={""} checked={true} />
            <h2 className={"ml-2"}>Checked Switch</h2>
          </div>
        ),
      },
      {
        cardHeader: "Disabled",
        cardSubtext: " A Switch can be disabled.",
        cardComponent: (
          <div className={"flex flex-row items-center"}>
            <Switch checked={true} className={""} disabled={true} />
            <h2 className={"ml-2"}> This is a disabled switch!</h2>
          </div>
        ),
      },
      {
        cardHeader: "Label",
        cardSubtext:
          "A label can be provided to the Switch and is positioned above, before or after the component.\n",
        cardComponent: (
          <div className={"flex flex-row"}>
            <div className={"flex flex-row items-center"}>
              <h2>With label before and unchecked</h2>
              <Switch />
            </div>
            <div className={"ml-2 flex flex-col items-center"}>
              <h2>With label above and checked</h2>
              <Switch checked={true} />
            </div>
            <div className={"ml-2 flex flex-row items-center"}>
              <Switch />
              <h2>With label after and unchecked</h2>
            </div>
          </div>
        ),
      },
      {
        cardHeader: "Required",
        cardSubtext:
          "When a Switch is marked as required, its label also gets the required styling.",
        cardComponent: (
          <div className={"flex flex-row items-center"}>
            <Switch checked={true} className={""} />

            <h2 className={"ml-2"}>Required</h2>
            <h2 className={"mb-2 text-red-500"}>*</h2>
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
        cardHeader: "Appearance",
        cardSubtext:
          "Textarea can have different appearances. The colors adjacent to the Textarea should have a sufficient contrast. Particularly, the color of input with filled darker and lighter styles needs to provide a contrast ratio greater than 3 to 1 against the immediate surrounding color to pass accessibility requirement.",
        cardComponent: (
          <div className={"flex w-full flex-col"}>
            <Textarea
              error={false}
              variant={"focus"}
              className=""
              labelText="TextArea"
            />
            <h2>A Textarea with a Outline Appearance</h2>
            <Textarea
              variant={"filledDark"}
              error={false}
              className=""
              labelText=" Dark TextArea"
            />

            <h2>A Textarea with a Filled Dark Appearance</h2>

            <Textarea
              variant={"filledLight"}
              error={false}
              className="w-full"
              labelText="Light TextArea "
            />
            <h2>Textarea with a Filled Light Appearance </h2>
          </div>
        ),
      },
      {
        cardHeader: "Placeholder",
        cardSubtext:
          "Any textarea or input field can have the placeholder attribute!",
        cardComponent: (
          <div className={"w-full"}>
            <Textarea
              error={false}
              placeholder={"This is placeholder text."}
              className="flex w-full font-bold text-black dark:text-white"
              labelText="TextArea"
            />
          </div>
        ),
      },
      {
        cardHeader: "Disabled",
        cardSubtext: "",
        cardComponent: (
          <div className={"w-full"}>
            <Textarea
              disabled={true}
              error={false}
              className="font-bold text-black dark:text-white"
              labelText="TextArea"
              placeholder={
                "This is a disabled textarea, you cant use it for anything."
              }
            />
          </div>
        ),
      },
      {
        cardHeader: "Uncontrolled",
        cardSubtext: "",
        cardComponent: (
          <div className={"w-full"}>
            <Textarea
              error={false}
              className="font-bold text-black dark:text-white"
              labelText="TextArea"
              placeholder={"This is a uncontrolled textarea"}
            />
          </div>
        ),
      },
      {
        cardHeader: "Resize",
        cardSubtext:
          " When typing inside of a textarea, if you run out of space for your entire message, the TextArea component will automatically grow expand the typing area vertically so you can finish your message.",
        cardComponent: (
          <div className={"w-full"}>
            <Textarea
              error={false}
              size={"sm"}
              className="font-bold text-black dark:text-white"
              labelText="TextArea"
              placeholder={
                "This textarea will expand upon its border being passed."
              }
            />
          </div>
        ),
      },
      {
        cardHeader: "Size",
        cardSubtext: "",
        cardComponent: (
          <div className={"flex w-full flex-col"}>
            <Textarea
              error={false}
              className="mt-4"
              labelText="TextArea"
              size="sm"
              placeholder={"This is a small textarea"}
            />
            <Textarea
              error={false}
              className="mt-4"
              labelText="TextArea"
              size="md"
              placeholder={"This is a medium  textarea"}
            />
            <Textarea
              error={false}
              className="mt-4"
              labelText="TextArea"
              size="lg"
              placeholder={"This is a large textarea"}
            />
          </div>
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
        cardHeader: "Default",
        cardSubtext:
          "This is the default Radio Group component provided by fluent2",
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

      {
        cardHeader: "Default Value",
        cardSubtext:
          "The initially selected item can be set by setting the defaultValue of RadioGroup. Alternatively, one Radio item can have defaultChecked set. Both methods have the same effect, but only one should be used in a given RadioGroup.",
        cardComponent: (
          <RadioGroup defaultValue="4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="4" id="r4" />
              <Label htmlFor="r4">Example 1</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="5" id="r5" />
              <Label htmlFor="r5">Example 2</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="6" id="r6" />
              <Label htmlFor="r6">Example 3</Label>
            </div>
          </RadioGroup>
        ),
      },

      {
        cardHeader: "Required",
        cardSubtext:
          "Use the required prop to indicate that one of the radio items must be selected. Or, if the RadioGroup is inside a Field, it will inherit the required prop from the Field.",
        cardComponent: (
          <RadioGroup required={true} defaultValue="10">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="10" id="r10" />
              <Label htmlFor="r10">Example 1</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="11" id="r11" />
              <Label htmlFor="r11">Example 2</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="12" id="r12" />
              <Label htmlFor="r12">Example 3</Label>
            </div>
          </RadioGroup>
        ),
      },
      {
        cardHeader: "Disabled",
        cardSubtext:
          "RadioGroup can be disabled, which disables all Radio Items inside.",
        cardComponent: (
          <RadioGroup disabled={true} defaultValue="13">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="13" id="r13" />
              <Label htmlFor="r13">Example 1</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="14" id="r14" />
              <Label htmlFor="r14">Example 2</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="15" id="r15" />
              <Label htmlFor="r15">Example 3</Label>
            </div>
          </RadioGroup>
        ),
      },
      {
        cardHeader: "Disabled Item",
        cardSubtext: "Radio Items can be disabled manually and individually",
        cardComponent: (
          <RadioGroup defaultValue="16">
            <div className="flex items-center space-x-2">
              <RadioGroupItem disabled={true} value="2" id="r16" />
              <Label htmlFor="r16">Example 1 - Disabled</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="17" id="r17" />
              <Label htmlFor="r17">Example 2</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem disabled={true} value="18" id="r18" />
              <Label htmlFor="r18">Example 3 - Disabled</Label>
            </div>
          </RadioGroup>
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
        cardHeader: "Default Card",
        cardSubtext: "The default card variant is the filled commodity.  ",
        cardComponent: (
          <div className="flex flex-col items-center justify-center gap-10">
            <Card className="w-[540px]">
              <CardHeader image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cDhXXBPPmXB0TeWGmhYA-AHaE8%26pid%3DApi&f=1&ipt=cd7797c8ef5c996d9ca56b20a8c65b8df7bb69d45d9afe2e963243aa4e8c43cc&ipo=images">
                <CardTitle>New Sweet Stuff!</CardTitle>
                <CardDescription>Relaxing Kitty</CardDescription>
              </CardHeader>
              <CardContent>
                Donut chocolate bar oat cake. Dragée tiramisu lollipop bear
                claw. Marshmallow pastry jujubes toffee sugar plum.
              </CardContent>
              <CardFooter>
                <Button>Order Some!</Button>
                <Button variant="secondary">Pass up</Button>
              </CardFooter>
            </Card>
          </div>
        ),
      },
      {
        cardHeader: "",
        cardSubtext: "",
        cardComponent: (
          <Card orientation="horizontal" selectable variant="filled-alt">
            <CardHeader image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cDhXXBPPmXB0TeWGmhYA-AHaE8%26pid%3DApi&f=1&ipt=cd7797c8ef5c996d9ca56b20a8c65b8df7bb69d45d9afe2e963243aa4e8c43cc&ipo=images">
              <CardTitle>Eat Candy!</CardTitle>
              <CardDescription>Relaxing Kitty</CardDescription>
            </CardHeader>
            <FloatingAction>
              <BsThreeDots />
            </FloatingAction>
          </Card>
        ),
      },
      {
        cardHeader: "",
        cardSubtext: "",
        cardComponent: (
          <Card size="lg" variant="outline">
            <CardHeader>
              <CardTitle>Breakfast in Paris</CardTitle>
              <CardDescription>
                Start your day off right with a delicious and authentic Parisian
                breakfast.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div> A fresh croissant 🥐</div>
              <div> A cup of coffee ☕</div>
            </CardContent>
          </Card>
        ),
      },
      {
        cardHeader: "",
        cardSubtext: "",
        cardComponent: (
          <Card variant="subtle">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>Card Content</CardContent>
            <CardFooter>Card Footer</CardFooter>
          </Card>
        ),
      },
    ],
  },
  {
    header: "Checkbox",
    subText: (
      <>
        Checkboxes give people a way to select one or more items from a group,
        or switch between two mutually exclusive options (checked or unchecked).
      </>
    ),
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
              checked
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
              checked
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
              checked
            />
          </div>
        ),
      },
      {
        cardHeader: "Mixed",
        cardSubtext:
          "A checkbox can be initially mixed (also known as indeterminate) using the checked={indeterminate} property, In this example, the mixed state is used when a group of options has differing values.",
        cardComponent: (
          <div className="flex flex-col gap-2">
            <div className={"flex flex-row items-center text-center"}>
              <Checkbox
                checked={"indeterminate"}
                size="large"
                onChange={(checked) => console.log(checked)}
              />

              <h2 className={"ml-2"}>All of the options</h2>
            </div>
            <div className={"flex flex-row items-center text-center"}>
              <Checkbox
                size="large"
                onChange={(checked) => console.log(checked)}
              />
              <h2 className={"ml-2"}>Apples</h2>
            </div>
            <div className={"flex flex-row items-center text-center"}>
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
            <div className={"flex flex-row items-center text-center"}>
              <h2 className={"ml-2"}>Cherries</h2>

              <Checkbox
                className={"ml-2"}
                size="large"
                onChange={(checked) => console.log(checked)}
              />
            </div>
            <div className={"ml-1 flex flex-row items-center text-center"}>
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
        cardSubtext:
          "A checkbox can have a circular shape. Usage warning: Unless you are designing a tasks experience, we strongly discourage using this styling variant, as it can be confused with RadioItem",
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
              checked
            />
          </div>
        ),
      },
      {
        cardHeader: "Required",
        cardSubtext:
          "When a checkbox is marked as required, its label also gets the required styling.",
        cardComponent: (
          <div className="flex gap-2">
            <Checkbox
              rounded={true}
              size="large"
              required={true}
              onChange={(checked) => console.log(checked)}
            />
            <Checkbox
              rounded={true}
              size="large"
              onChange={(checked) => console.log(checked)}
              checked
            />
          </div>
        ),
      },
      {
        cardHeader: "Label Wrapping",
        cardSubtext:
          "The label will wrap if it is wider than the available space. The checkbox indicator will stay aligned to the first line of text.",
        cardComponent: (
          <div className="flex gap-2">
            <Checkbox
              size="large"
              aria-label={"Label Wrapping text"}
              onChange={(checked) => console.log(checked)}
            />
            <h2 className={"max-w-64"}>
              This label`s text will wrap around if it gets too big!
            </h2>
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
            <InfoLabel size={"lg"}>
              This is an example of a InfoLabel{" "}
            </InfoLabel>
          </div>
        ),
      },
      {
        cardHeader: "Required",
        cardSubtext:
          "When marked required, the indicator asterisk is placed before the InfoButton.",
        cardComponent: (
          <div className="flex gap-2">
            <InfoLabel size={"lg"}>
              This is an example of a Required InfoLabel{" "}
              <h2 className={"text-red-500"}>*</h2>{" "}
            </InfoLabel>
          </div>
        ),
      },
      {
        cardHeader: "Size",
        cardSubtext:
          "InfoLabel's size prop affects the size of the Label and InfoButton. The default size is medium.",
        cardComponent: (
          <div className="flex gap-2">
            <InfoLabel size={"lg"}>
              This is an example of a Required InfoLabel{" "}
              <h2 className={"text-red-500"}>*</h2>{" "}
            </InfoLabel>
          </div>
        ),
      },
      {
        cardHeader: "In a Field",
        cardSubtext:
          "An InfoLabel can be used in a Field by rendering the label prop as an InfoLabel. This uses the slot render function support. See the code from this story for an example.",
        cardComponent: (
          <div className="flex flex-col gap-2">
            <InfoLabel size={"lg"}>
              This is an example of a Field With an Info Label
            </InfoLabel>
            <Input placeholder={"Input email here!"}></Input>
          </div>
        ),
      },
    ],
  },
  {
    header: "Menu",
    subText: (
      <>
        A menu displays a list of actions. The Menu component handles the state
        management of the passed in list of actions.
      </>
    ),
    cards: [
      {
        cardHeader: "Default",
        cardSubtext: "",
        cardComponent: (
          <div className="flex gap-2">
            <Menubar onValueChange={(e) => console.log(e)}>
              <MenubarMenu value={"share"}>
                <MenubarTrigger>Toggle Menu</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    New <MenubarShortcut>⌘T</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>New Window</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Open File</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Open Folder</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        ),
      },
      {
        cardHeader: "Interaction",
        cardSubtext:
          "Each sub component of the Menu that renders DOM elements can be assigned HTML event listeners. You can simply add an onClick listener to individual MenuItem without needing to control the entire component. Special handling is required for checkboxes and radio items inside a Menu, read the further examples below to see how to handle those variants.",
        cardComponent: (
          <div className="flex gap-2">
            <Menubar onValueChange={(e) => console.log(e)}>
              <MenubarMenu value={"share"}>
                <MenubarTrigger>Edit content</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <ScissorsIcon size={18} /> Cut{" "}
                    <MenubarShortcut>⌘T</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <Copy16Filled /> Copy <MenubarShortcut>⌘C</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <ClipboardPasteIcon size={15} />
                    Paste <MenubarShortcut>⌘V</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        ),
      },
      {
        cardHeader: "Menu Item Link Navigation",
        cardSubtext:
          "To implement a navigation menu, simply use the MenuItemLink component that provides the correct semantics for link based navigation.",
        cardComponent: (
          <div className="flex gap-2">
            <Menubar onValueChange={(e) => console.log(e)}>
              <MenubarMenu value={"share"}>
                <MenubarTrigger>Navigation</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <Link href={"/"}>Home Page</Link>
                  </MenubarItem>
                  <MenubarItem>
                    {" "}
                    <Link target={"_blank"} href={"https://grbtec.com.br"}>
                      Go to our company's home page
                    </Link>{" "}
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    {" "}
                    <Link href={"/?section=Button"}>Go to Button</Link>{" "}
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        ),
      },
      {
        cardHeader: "Menu Items With Icons",
        cardSubtext: "",
        cardComponent: (
          <div className="flex gap-2">
            <Menubar onValueChange={(e) => console.log(e)}>
              <MenubarMenu value={"share"}>
                <MenubarTrigger>Edit content</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <ScissorsIcon size={18} /> Cut{" "}
                    <MenubarShortcut>⌘T</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <Copy16Filled /> Copy <MenubarShortcut>⌘C</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <ClipboardPasteIcon size={15} />
                    Paste <MenubarShortcut>⌘V</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        ),
      },
      {
        cardHeader: "Aligning With Icons",
        cardSubtext:
          "The hasIcons prop will align menu items if only a subset of menu items contain an icon. When separation of menu items is only for visual aesthetics, the MenuDivider component can be used by itself as it has no accessible markup features.The hasIcons prop will align menu items if only a subset of menu items contain an icon. When separation of menu items is only for visual aesthetics, the MenuDivider component can be used by itself as it has no accessible markup features.",
        cardComponent: (
          <div className="flex gap-2">
            <Menubar onValueChange={(e) => console.log(e)}>
              <MenubarMenu value={"share"}>
                <MenubarTrigger>Edit content</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <ScissorsIcon size={18} /> Cut{" "}
                    <MenubarShortcut>⌘T</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <Copy16Filled /> Copy <MenubarShortcut>⌘C</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <ClipboardPasteIcon size={15} />
                    Paste <MenubarShortcut>⌘V</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        ),
      },
      {
        cardHeader: "Aligning With Selectable Items",
        cardSubtext:
          "The hasCheckmarks prop will align menu items if only a subset of menu items are selectable.\n",
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
      {
        cardHeader: "Secondary Content For Menu Items",
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
      {
        cardHeader: "Controlling Open And Close",
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
      {
        cardHeader: "Grouping Items",
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
      {
        cardHeader: "Visual Divider Only",
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
      {
        cardHeader: "Checkbox Items",
        cardSubtext:
          "A variant of MenuItem that handles checkbox like selection. The name and value props are are used similar to HTML checkboxes with input\n" +
          "\n" +
          '<input type="checkbox" name="name" value="value" />',
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
      {
        cardHeader: "Switch Item",
        cardSubtext:
          "A variant of MenuItemCheckbox that displays selection using a switch design. This is commonly used for menus that don't really have strong selection function but needs to support an exceptional selected option.",
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
      {
        cardHeader: "Radio Items",
        cardSubtext:
          "A variant of MenuItem that handles checkbox like selection. The name and value props are are used similar to HTML checkboxes with input\n" +
          "\n" +
          '<input type="checkbox" name="name" value="value" />',
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
      {
        cardHeader: "Checkbox Items",
        cardSubtext:
          "A variant of MenuItem that handles checkbox like selection. The name and value props are are used similar to HTML checkboxes with input\n" +
          "\n" +
          '<input type="checkbox" name="name" value="value" />',
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
    header: "Toast",
    subText: (
      <>
        A Toasts displays temporary content to the user. Toasts are rendered as
        a separate surface that can be dismissed by user action or a application
        timeout. Toasts are typically used in the following situations,to Update
        the user on the status of a task to Display the progress of a task, to
        Notify the user to take an action, or Notify the user of an application
        update, Warn the user of an error. The Fluent UI Toast component uses an
        imperative API. Once a Toaster has been rendered, you can use the
        useToastController hook to get access to imperative methods to dispatch
        a Toast. The Toast component itself is simply a layout component.
      </>
    ),
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
      {
        cardHeader: "Default Toast Options",
        cardSubtext:
          "Default options for all toasts can be configured on the Toaster. These options are only defaults and can be overridden using dispatchToast",
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
      {
        cardHeader: "Update Toast",
        cardSubtext:
          "Use the updateToast imperative API to make changes to a Toast that is already visible. To do this you must provide an id when dispatching the toast. Almost all options of a Toast can be updated.",
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
      {
        cardHeader: "Dismiss Toast",
        cardSubtext:
          "Toasts can be dismissed imperatively using the dismissToast API. In order to imperatively dismiss a Toast, it's necessary to dispatch it with a user provided id. You can use the id to dismiss the toast. Don't use this API to dismiss toats when clicking on an action inside the toast, use the ToastTrigger instead.",
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
      {
        cardHeader: "Dismiss Toast With Action",
        cardSubtext:
          "By wrapping a button or link with a ToastTrigger, it`s possible to make that actionable element dismiss the toast with a click.",
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
                })
              }}
            >
              Add to calendar
            </Button>
          </div>
        ),
      },
      {
        cardHeader: "Intent",
        cardSubtext:
          "MessageBar components come built-in with preset intents that determine the design and aria live announcement, While it is recommended to use the preset intents, it's possible to configure the aria live politeness with the politeness prop.",
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
                })
              }}
            >
              Add to calendar
            </Button>
          </div>
        ),
      },

      {
        cardHeader: "Shape",
        cardSubtext:
          "MessageBar can have either rounded-sm or square corners, please follow the usage guidance for these shapes:\n" +
          "\n" +
          "    rounded-sm used for component level message bars\n" +
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
                })
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
                })
              }}
            >
              Add to calendar
            </Button>
          </div>
        ),
      },
      {
        cardHeader: "Dismiss",
        cardSubtext:
          "MessageBar components should be used in a MessageBarGroup when possible to enable exit animations. Once inside a MessageBarGroup component, the default exit animation will trigger automatically when the component is unmounted from DOM.",
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
                })
              }}
            >
              Add to calendar
            </Button>
          </div>
        ),
      },
      {
        cardHeader: "Animation",
        cardSubtext:
          "Enter animations are also handled within the MessageBarGroup. However avoid entry animations for MessageBar components on page load. However, MessageBar components that are mounted during the lifecycle of an app can use enter animations.",
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
                })
              }}
            >
              Add to calendar
            </Button>
          </div>
        ),
      },

      {
        cardHeader: "Reflow",
        cardSubtext:
          "The MessageBar will reflow by default once the body content wraps to a second line. This changes the layout of the actions in the MessageBar.",
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
                })
              }}
            >
              Add to calendar
            </Button>
          </div>
        ),
      },

      {
        cardHeader: "Manual Layout",
        cardSubtext:
          "It's possible to opt out of automatic reflow with the layout prop. This can be useful if an application has an existing responsive design mechanism.",
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
    header: "Persona",
    subText: (
      <>
        A Persona is a visual representation of a person or status that
        showcases an Avatar, PresenceBadge, or an Avatar with a PresenceBadge.
      </>
    ),
    cards: [
      {
        cardHeader: "Default",
        cardSubtext: "",
        cardComponent: (
          <div className="flex flex-col gap-2">
            <Persona
              name={"John Walker"}
              secondaryText={"Available"}
              avatar={{
                status: "online",
                size: "lg",
                src: "https://images.pexels.com/photos/26898037/pexels-photo-26898037/free-photo-of-european-garden-spider-with-web.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
                name: "John Walker",
              }}
            ></Persona>
          </div>
        ),
      },
      {
        cardHeader: "Text Alignment",
        cardSubtext:
          "A Persona supports two text alignments, start being the default position.",
        cardComponent: (
          <div className="flex flex-row gap-2">
            <Persona
              name={"Alex Whittaker"}
              secondaryText={"Available"}
              avatar={{
                status: "online",
                size: "lg",
                src: "https://images.pexels.com/photos/27862762/pexels-photo-27862762/free-photo-of-a-man-standing-in-front-of-a-wall-with-a-bag.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
                name: "John Walker",
              }}
            ></Persona>
            <Persona
              name={"Roger Juniper"}
              secondaryText={"Available"}
              avatar={{
                status: "online",
                size: "lg",
                src: "https://images.pexels.com/photos/13925674/pexels-photo-13925674.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
                name: "John Walker",
              }}
            ></Persona>
            <Persona
              name={"Jonas Hill"}
              secondaryText={"Available"}
              avatar={{
                status: "online",
                size: "lg",
                src: "https://images.pexels.com/photos/27862762/pexels-photo-27862762/free-photo-of-a-man-standing-in-front-of-a-wall-with-a-bag.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
                name: "John Walker",
              }}
            ></Persona>
          </div>
        ),
      },
    ],
  },
  {
    header: "Popover",
    subText: <>A popover displays content on top of other content.</>,
    cards: [
      {
        cardHeader: "Default",
        cardSubtext: "",
        cardComponent: (
          <div className="flex flex-col gap-2">
            <Popover>
              <PopoverTrigger>Popover Trigger</PopoverTrigger>
              <PopoverContent
                className={"rounded-md px-3 py-4"}
                sideOffset={-11}
              >
                <div>
                  <h2 className={"mb-1 text-lg font-extrabold"}>
                    This is a Popover!
                  </h2>
                  <h3 className={"text-md pl-1"}>
                    ... And you can edit it to contain whatever you want!
                  </h3>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        ),
      },
      {
        cardHeader: "Trapping Focus",
        cardSubtext:
          "When a Popover contains focusable elements, the modal dialog pattern will apply. By using the trapFocus prop, the component sets aria-hidden appropriately to parent elements in the document so that elements not contained in the focus trap are hidden to screen reader users. This focus trap is automatically removed when the Popover is closed.",
        cardComponent: (
          <div className="flex flex-col gap-2">
            <Popover>
              <PopoverTrigger>Popover Trigger</PopoverTrigger>
              <PopoverContent
                className={"rounded-md px-3 py-4"}
                sideOffset={-11}
              >
                <div>
                  <h2 className={"mb-1 text-lg font-extrabold"}>
                    This is a Popover!
                  </h2>
                  <h3 className={"text-md pl-1"}>
                    ... And you can edit it to contain whatever you want!
                  </h3>
                  <div className={"flex flex-row"}>
                    <Button className={"mt-1"} variant={"secondary"}>
                      Action
                    </Button>
                    <Button className={"mt-1 ml-2"} variant={"secondary"}>
                      Action
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        ),
      },
      {
        cardHeader: "Controlling Open And Close",
        cardSubtext:
          "The opening and close of the Popover can be controlled with your own state. The onOpenChange callback will provide the hints for the state and triggers based on the appropriate event.\n" +
          "\n" +
          "When controlling the open state of the Popover, extra effort is required to ensure that interactions are still appropriate and that keyboard accessibility does not degrade.",
        cardComponent: (
          <div className="flex flex-col gap-2">
            <Popover>
              <PopoverTrigger>Popover Trigger</PopoverTrigger>
              <PopoverContent
                className={"rounded-md px-3 py-4"}
                sideOffset={-11}
              >
                <div>
                  <h2 className={"mb-1 text-lg font-extrabold"}>
                    This is a Popover!
                  </h2>
                  <h3 className={"text-md pl-1"}>
                    ... And you can edit it to contain whatever you want!
                  </h3>
                  <div className={"flex flex-row"}>
                    <Button className={"mt-1"} variant={"secondary"}>
                      Action
                    </Button>
                    <Button className={"mt-1 ml-2"} variant={"secondary"}>
                      Action
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        ),
      },
      {
        cardHeader: "Nested Popovers",
        cardSubtext:
          "Popovers can be nested within each other. Too much nesting can result in extra accessibility considerations and are generally not a great user experience Since nested popovers will generally have an interactive PopoverTrigger to control the nested popover, make sure to combine their usage with the trapFocus prop for correct screen reader and keyboard accessibility Try and limit nesting to 2 levels Make sure to use trapFocus when nestingCreating nested popovers as separate components will result in more maintainable code ",
        cardComponent: (
          <div className="flex flex-col gap-2">
            <Popover>
              <PopoverTrigger>Popover Trigger</PopoverTrigger>
              <PopoverContent
                className={"rounded-md px-3 py-4"}
                sideOffset={-11}
              >
                <div>
                  <h2 className={"mb-1 text-lg font-extrabold"}>
                    This is a Popover!
                  </h2>
                  <h3 className={"text-md pl-1"}>
                    ... And you can edit it to contain whatever you want!
                  </h3>
                  <div className={"flex flex-row"}>
                    <Button className={"mt-1"} variant={"secondary"}>
                      Action
                    </Button>
                    <Button className={"mt-1 ml-2"} variant={"secondary"}>
                      Action
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        ),
      },
      {
        cardHeader: "Anchor To Custom Target",
        cardSubtext:
          "A Popover can be used without a trigger and anchored to any DOM element. This can be useful if a Popover instance needs to be reused in different places.\n" +
          "\n" +
          "Not using a PopoverTrigger will require more work to make sure your scenario is accessible, such as, implementing accessible markup and keyboard interactions for your trigger.",
        cardComponent: (
          <div className="flex flex-col gap-2">
            <Popover>
              <PopoverTrigger>Popover Trigger</PopoverTrigger>
              <PopoverContent
                className={"rounded-md px-3 py-4"}
                sideOffset={-11}
              >
                <div>
                  <h2 className={"mb-1 text-lg font-extrabold"}>
                    This is a Popover!
                  </h2>
                  <h3 className={"text-md pl-1"}>
                    ... And you can edit it to contain whatever you want!
                  </h3>
                  <div className={"flex flex-row"}>
                    <Button className={"mt-1"} variant={"secondary"}>
                      Action
                    </Button>
                    <Popover>
                      <PopoverTrigger>Open Nested Popover</PopoverTrigger>
                      <PopoverContent
                        className={"rounded-md px-3 py-4"}
                        sideOffset={-11}
                      >
                        <div className={"h-full w-full"}>
                          <h2>This is a nested popover placed in this</h2>
                        </div>
                        <Popover>
                          <PopoverTrigger>
                            <Button variant={"primary"}>
                              Another nested popover!
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent sideOffset={-11}>
                            No More Popovers from here on
                          </PopoverContent>
                        </Popover>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        ),
      },
      {
        cardHeader: "Custom Trigger",
        cardSubtext:
          "Native elements and Fluent components have first class support as children of PopoverTrigger so they will be injected automatically with the correct props for interactions and accessibility attributes.  It is possible to use your own custom React component as a child of PopoverTrigger. These components should use ref forwarding with React.forwardRef",
        cardComponent: (
          <div className="flex flex-col gap-2">
            <Popover>
              <PopoverTrigger>Popover Trigger</PopoverTrigger>
              <PopoverContent
                className={"rounded-md px-3 py-4"}
                sideOffset={-11}
              >
                <div>
                  <h2 className={"mb-1 text-lg font-extrabold"}>
                    This is a Popover!
                  </h2>
                  <h3 className={"text-md pl-1"}>
                    ... And you can edit it to contain whatever you want!
                  </h3>
                  <div className={"flex flex-row"}>
                    <Button className={"mt-1"} variant={"secondary"}>
                      Action 1{" "}
                    </Button>
                    <Button className={"mt-1 ml-2"} variant={"primary"}>
                      Action 2
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        ),
      },
      {
        cardHeader: "Without Trigger",
        cardSubtext:
          "When using a Popover without a PopoverTrigger, it is up to the user to make sure that the focus is restored correctly when the popover is closed. This can be done quite easily by using the useRestoreFocusTarget hook. The Popover already uses the useRestoreFocusSource hook directly, which will restore focus to the most recently focused target on close.",
        cardComponent: (
          <div className="flex flex-col gap-2">
            <Popover>
              <PopoverTrigger>Popover Trigger</PopoverTrigger>
              <PopoverContent
                className={"rounded-md px-3 py-4"}
                sideOffset={-11}
              >
                <div>
                  <h2 className={"mb-1 text-lg font-extrabold"}>
                    This is a Popover!
                  </h2>
                  <h3 className={"text-md pl-1"}>
                    ... And you can edit it to contain whatever you want!
                  </h3>
                  <div className={"flex flex-row"}>
                    <Button className={"mt-1"} variant={"secondary"}>
                      Action 1{" "}
                    </Button>
                    <Button className={"mt-1 ml-2"} variant={"primary"}>
                      Action 2
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        ),
      },
      {
        cardHeader: "Internal Update Content",
        cardSubtext: "",
        cardComponent: (
          <div className="flex flex-col gap-2">
            <Popover>
              <PopoverTrigger>Popover Trigger</PopoverTrigger>
              <PopoverContent
                className={"rounded-md px-3 py-4"}
                sideOffset={-11}
              >
                <div>
                  <h2 className={"mb-1 text-lg font-extrabold"}>
                    This is a Popover!
                  </h2>
                  <h3 className={"text-md pl-1"}>
                    ... And you can edit it to contain whatever you want!
                  </h3>
                  <div className={"flex flex-row"}>
                    <Button className={"mt-1"} variant={"secondary"}>
                      Action 1{" "}
                    </Button>
                    <Button className={"mt-1 ml-2"} variant={"primary"}>
                      Action 2
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        ),
      },
      {
        cardHeader: "Appearance",
        cardSubtext:
          "When using a Popover without a PopoverTrigger, it is up to the user to make sure that the focus is restored correctly when the popover is closed. This can be done quite easily by using the useRestoreFocusTarget hook. The Popover already uses the useRestoreFocusSource hook directly, which will restore focus to the most recently focused target on close.",
        cardComponent: (
          <div className="flex flex-col gap-2">
            <Popover>
              <PopoverTrigger>Popover Trigger</PopoverTrigger>
              <PopoverContent
                className={"rounded-md px-3 py-4"}
                sideOffset={-11}
              >
                <div>
                  <h2 className={"mb-1 text-lg font-extrabold"}>
                    This is a Popover!
                  </h2>
                  <h3 className={"text-md pl-1"}>
                    ... And you can edit it to contain whatever you want!
                  </h3>
                  <div className={"flex flex-row"}>
                    <Button className={"mt-1"} variant={"secondary"}>
                      Action 1{" "}
                    </Button>
                    <Button className={"mt-1 ml-2"} variant={"primary"}>
                      Action 2
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        ),
      },
      {
        header: "ProgressBar",
        subText: (
          <>
            Progress bars allow users to not have the feeling that an action is
            not progressing, by giving them a visual cue of how close they are
            to completion, you retain the user`s attention with ease.
          </>
        ),
        cards: [
          {
            cardHeader: "Default Appearance",
            cardSubtext: "The normal progressbar.",
            cardComponent: (
              <div className="flex flex-col gap-2">
                <Progress></Progress>
              </div>
            ),
          },

          {
            cardHeader: "Appearance",
            cardSubtext: "",

            cardComponent: (
              <div className="flex flex-col gap-2">
                <Progress></Progress>
              </div>
            ),
          },
          {
            cardHeader: "Inline",
            cardSubtext: "",

            cardComponent: (
              <div className="flex flex-col gap-2">
                <Progress></Progress>
              </div>
            ),
          },
          {
            cardHeader: "Appearance",
            cardSubtext: "",

            cardComponent: (
              <div className="flex flex-col gap-2">
                <Progress></Progress>
              </div>
            ),
          },
          {
            cardHeader: "As Button",
            cardSubtext:
              "When the href property is not provided, the component is rendered as a html  <button/>",

            cardComponent: (
              <div className="flex flex-col gap-2">
                <Progress></Progress>
              </div>
            ),
          },
          {
            cardHeader: "As Span",
            cardSubtext:
              'A Link can be rendered as an html <span>, in which case it will have role="button" set. Links that render as a span wrap correctly between lines, behaving as inline elements as opposed to links rendered as buttons, which always behave as inline-block elements that do not wrap correctly.',

            cardComponent: (
              <div className="flex flex-col gap-2">
                <Progress></Progress>
              </div>
            ),
          },
        ],
      },
    ],
  },
] as ComponentsType

export const sideBar = {
  Components: {
    icon: <FaListUl />,
    items: components.map((component) => component.header).sort(),
  },
} as const
